import { useState, useEffect, useRef } from 'react';
import { Container, Paper, Title, Text, Button, Group, Stack } from '@mantine/core';

interface Duck {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [stack, setStack] = useState<Duck[]>([]);
  const [currentDuck, setCurrentDuck] = useState<Duck | null>(null);
  const [direction, setDirection] = useState(1);
  const [speed, setSpeed] = useState(5);
  const [perfect, setPerfect] = useState(false);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gameLoop = () => {
      if (!currentDuck) {
        // Create new duck
        setCurrentDuck({
          x: 0,
          y: canvas.height - 100,
          width: 60,
          height: 40
        });
        setDirection(1);
        setSpeed(5);
      } else {
        // Move current duck
        setCurrentDuck(prev => {
          if (!prev) return null;
          const newX = prev.x + speed * direction;
          
          // Change direction if hitting edges
          if (newX <= 0 || newX + prev.width >= canvas.width) {
            setDirection(-direction);
          }
          
          return {
            ...prev,
            x: newX
          };
        });
      }

      // Draw game
      drawGame();
    };

    const interval = setInterval(gameLoop, 16);
    return () => clearInterval(interval);
  }, [gameStarted, gameOver, currentDuck, direction, speed]);

  // Draw the game
  const drawGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw sky background
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw stack
    stack.forEach((duck, index) => {
      drawDuck(ctx, duck.x, duck.y, duck.width, duck.height, index % 2 === 0);
    });

    // Draw current duck
    if (currentDuck) {
      drawDuck(ctx, currentDuck.x, currentDuck.y, currentDuck.width, currentDuck.height, stack.length % 2 === 0);
    }

    // Draw perfect indicator
    if (perfect) {
      ctx.fillStyle = '#00FF00';
      ctx.font = '24px Arial';
      ctx.fillText('Perfect!', canvas.width / 2 - 40, 50);
    }
  };

  // Draw a single duck
  const drawDuck = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, isYellow: boolean) => {
    // Draw duck's body
    ctx.fillStyle = isYellow ? '#FFD700' : '#8B4513';
    ctx.beginPath();
    ctx.ellipse(x + width/2, y + height/2, width/2, height/2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw duck's head
    ctx.fillStyle = isYellow ? '#FFC000' : '#654321';
    ctx.beginPath();
    ctx.arc(x + width - 10, y + height/2, height/3, 0, Math.PI * 2);
    ctx.fill();

    // Draw duck's beak
    ctx.fillStyle = '#FFA500';
    ctx.beginPath();
    ctx.moveTo(x + width + 5, y + height/2);
    ctx.lineTo(x + width + 15, y + height/2 - 5);
    ctx.lineTo(x + width + 15, y + height/2 + 5);
    ctx.closePath();
    ctx.fill();
  };

  // Handle canvas click
  const handleCanvasClick = () => {
    if (!gameStarted || gameOver || !currentDuck) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const lastDuck = stack[stack.length - 1];
    
    if (!lastDuck) {
      // First duck
      setStack([currentDuck]);
      setCurrentDuck(null);
      setScore(1);
      setPerfect(true);
      setTimeout(() => setPerfect(false), 500);
    } else {
      // Check overlap
      const overlap = Math.min(
        currentDuck.x + currentDuck.width,
        lastDuck.x + lastDuck.width
      ) - Math.max(currentDuck.x, lastDuck.x);

      if (overlap <= 0) {
        // Game over - no overlap
        setGameOver(true);
        return;
      }

      // Calculate new duck position and size
      const newX = Math.max(currentDuck.x, lastDuck.x);
      const newWidth = overlap;
      const newY = lastDuck.y - currentDuck.height;

      // Check if perfect stack
      const isPerfect = Math.abs(currentDuck.x - lastDuck.x) < 5;
      if (isPerfect) {
        setPerfect(true);
        setTimeout(() => setPerfect(false), 500);
      }

      // Add to stack
      setStack(prev => [...prev, { ...currentDuck, x: newX, width: newWidth, y: newY }]);
      setCurrentDuck(null);
      setScore(prev => prev + 1);
      setSpeed(prev => Math.min(prev + 0.5, 15)); // Increase speed
    }
  };

  // Start new game
  const startGame = () => {
    setScore(0);
    setGameStarted(true);
    setGameOver(false);
    setStack([]);
    setCurrentDuck(null);
    setSpeed(5);
  };

  return (
    <Container size="lg" py="xl">
      <Stack gap="md">
        <Title order={1} ta="center" c="duckBlue.9">
          Duck Stack
        </Title>
        <Text ta="center" size="lg" c="duckBlue.7">
          Click to stack the ducks! Time it perfectly for bonus points.
        </Text>
        <Group justify="center">
          <Text fw={700} size="xl">Score: {score}</Text>
          {!gameStarted && (
            <Button
              color="yellow"
              size="lg"
              onClick={startGame}
            >
              Start Game
            </Button>
          )}
          {gameStarted && !gameOver && (
            <Button
              color="yellow"
              size="lg"
              onClick={() => setGameStarted(false)}
            >
              End Game
            </Button>
          )}
          {gameOver && (
            <Button
              color="yellow"
              size="lg"
              onClick={startGame}
            >
              Play Again
            </Button>
          )}
        </Group>
        <Paper shadow="sm" p="md" style={{ background: '#87CEEB' }}>
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            style={{
              width: '100%',
              height: '600px',
              cursor: 'pointer',
              background: '#87CEEB',
            }}
          />
        </Paper>
      </Stack>
    </Container>
  );
} 