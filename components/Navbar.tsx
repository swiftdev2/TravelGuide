import { AppShell, Group, Button, Title } from '@mantine/core';
import Link from 'next/link';

export function Navbar() {
  return (
    <AppShell.Header bg="duckYellow.0">
      <Group h="100%" px="md" justify="space-between">
        <Group>
          <Title order={3} c="duckBlue.7">🦆 Duck World</Title>
        </Group>
        <Group>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <Button variant="filled" color="duckBlue" radius="xl">Home</Button>
          </Link>
          <Link href="/introduction" passHref style={{ textDecoration: 'none' }}>
            <Button variant="filled" color="duckYellow" radius="xl">Introduction</Button>
          </Link>
          <Link href="/game" passHref style={{ textDecoration: 'none' }}>
            <Button variant="filled" color="duckBlue" radius="xl">Duck Hunt Game</Button>
          </Link>
        </Group>
      </Group>
    </AppShell.Header>
  );
}