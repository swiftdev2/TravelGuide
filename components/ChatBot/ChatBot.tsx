import { useState, useRef, useEffect } from 'react';
import { ActionIcon, Paper, TextInput, Group, Text, Stack, ScrollArea, Box } from '@mantine/core';
import { IconMessageCircle, IconSend, IconX } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! I\'m your Bahrain travel assistant. How can I help you today?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const bahrainKnowledge = {
  visa: 'Bahrain offers visa on arrival for many countries. You\'ll need a valid passport with 6 months validity and a return ticket.',
  currency: 'The currency is Bahraini Dinar (BHD). 1 BHD is approximately 2.65 USD. Credit cards are widely accepted.',
  language: 'Arabic is the official language, but English is widely spoken, especially in tourist areas.',
  weather: 'Best time to visit is November to March when temperatures are mild (20-25°C). Summers can be very hot (35-45°C).',
  transport: 'Taxis, buses, and ride-sharing apps are available. Public buses are very affordable.',
  food: 'Must-try dishes include Machboos (spiced rice with meat), Muhammar (sweet rice), and fresh seafood.',
  culture: 'Bahrain is relatively liberal but modest dress is recommended. Respect local customs and traditions.',
  attractions: 'Top attractions include Bahrain Fort, Tree of Life, Al-Fateh Grand Mosque, and the National Museum.',
  shopping: 'Visit traditional souks for authentic goods or modern malls like City Centre Bahrain and The Avenues.',
  safety: 'Bahrain is generally safe for tourists. Keep emergency numbers handy: Police 999, Ambulance 998.',
};

export function ChatBot() {
  const [opened, setOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const scrollToBottom = () => {
    if (scrollRef.current) {
      const scrollHeight = scrollRef.current.scrollHeight;
      const currentScroll = scrollRef.current.scrollTop;
      const targetScroll = scrollHeight - scrollRef.current.clientHeight;
      
      // Only scroll if we're not already at the bottom
      if (Math.abs(currentScroll - targetScroll) > 10) {
        scrollRef.current.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  // Scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Scroll when chat is opened
  useEffect(() => {
    if (opened) {
      scrollToBottom();
    }
  }, [opened]);

  const handleSend = () => {
    if (!input.trim()){
      return;
    } 

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    scrollToBottom(); // Immediate scroll for user message

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(input.trim().toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      scrollToBottom(); // Scroll after bot response
    }, 1000);
  };

  const generateBotResponse = (query: string): string => {
    // Simple keyword matching
    if (query.includes('visa') || query.includes('entry')) {
      return bahrainKnowledge.visa;
    }
    if (query.includes('currency') || query.includes('money') || query.includes('cash')) {
      return bahrainKnowledge.currency;
    }
    if (query.includes('language') || query.includes('speak')) {
      return bahrainKnowledge.language;
    }
    if (query.includes('weather') || query.includes('climate') || query.includes('temperature')) {
      return bahrainKnowledge.weather;
    }
    if (query.includes('transport') || query.includes('bus') || query.includes('taxi')) {
      return bahrainKnowledge.transport;
    }
    if (query.includes('food') || query.includes('eat') || query.includes('restaurant')) {
      return bahrainKnowledge.food;
    }
    if (query.includes('culture') || query.includes('custom') || query.includes('dress')) {
      return bahrainKnowledge.culture;
    }
    if (query.includes('attraction') || query.includes('visit') || query.includes('see')) {
      return bahrainKnowledge.attractions;
    }
    if (query.includes('shop') || query.includes('mall') || query.includes('souk')) {
      return bahrainKnowledge.shopping;
    }
    if (query.includes('safe') || query.includes('emergency') || query.includes('help')) {
      return bahrainKnowledge.safety;
    }

    return "I'm not sure about that. You can ask me about visas, currency, language, weather, transport, food, culture, attractions, shopping, or safety in Bahrain.";
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{
          position: 'fixed',
          bottom: isMobile ? 20 : 30,
          right: isMobile ? 20 : 30,
          zIndex: 1000,
        }}
      >
        <ActionIcon
          size={isMobile ? 50 : 60}
          radius="xl"
          variant="filled"
          color="gold"
          onClick={() => setOpened(!opened)}
          style={{
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          {opened ? <IconX size={isMobile ? 24 : 30} /> : <IconMessageCircle size={isMobile ? 24 : 30} />}
        </ActionIcon>
      </motion.div>

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed',
              bottom: isMobile ? 80 : 100,
              right: isMobile ? 20 : 30,
              width: isMobile ? 'calc(100% - 40px)' : 400,
              zIndex: 1000,
            }}
          >
            <Paper
              shadow="xl"
              radius="md"
              style={{
                background: 'linear-gradient(45deg, #2C2A2A, #3C2A1A)',
                border: '2px solid #FFC300',
              }}
            >
              <Box p="md">
                <Text size="lg" fw={700} c="gold.0" mb="md">
                  Bahrain Travel Assistant
                </Text>
                <ScrollArea
                  h={isMobile ? 300 : 400}
                  type="auto"
                  scrollbarSize={8}
                  ref={scrollRef}
                  viewportRef={scrollRef}
                  onScrollPositionChange={() => {
                    // Optional: Add any scroll position tracking logic here
                  }}
                >
                  <Stack gap="md">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        onAnimationComplete={scrollToBottom} // Scroll after animation completes
                      >
                        <Paper
                          p="sm"
                          radius="md"
                          style={{
                            background: message.sender === 'user' ? '#FFC300' : '#3C2A1A',
                            maxWidth: '80%',
                            marginLeft: message.sender === 'user' ? 'auto' : 0,
                            border: '1px solid #FFC300',
                          }}
                        >
                          <Text
                            size="sm"
                            c={message.sender === 'user' ? 'dark' : 'gold.0'}
                          >
                            {message.text}
                          </Text>
                          <Text
                            size="xs"
                            c={message.sender === 'user' ? 'dark.4' : 'gold.3'}
                            mt={4}
                          >
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </Text>
                        </Paper>
                      </motion.div>
                    ))}
                  </Stack>
                </ScrollArea>
                <Group mt="md" gap="xs">
                  <TextInput
                    placeholder="Ask about Bahrain..."
                    value={input}
                    onChange={(e) => setInput(e.currentTarget.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault(); // Prevent default form submission
                        handleSend();
                      }
                    }}
                    style={{ flex: 1 }}
                    size={isMobile ? "sm" : "md"}
                    radius="xl"
                    styles={{
                      input: {
                        background: '#2C2A2A',
                        borderColor: '#FFC300',
                        color: '#FFC300',
                        '&::placeholder': {
                          color: '#FFC30080',
                        },
                      },
                    }}
                  />
                  <ActionIcon
                    size={isMobile ? 36 : 42}
                    radius="xl"
                    variant="filled"
                    color="gold"
                    onClick={handleSend}
                    disabled={!input.trim()}
                  >
                    <IconSend size={isMobile ? 18 : 20} />
                  </ActionIcon>
                </Group>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 