import { AppShell, Text, Group, ActionIcon, useMantineTheme, Box, Burger, Paper, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBot } from './ChatBot/ChatBot';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Essentials', href: '/essentials' },
    { label: 'Accommodation', href: '/accommodation' },
    { label: 'Food', href: '/food' },
    { label: 'Activities', href: '/activities' },
    { label: 'Shopping', href: '/shopping' },
    { label: 'Tips', href: '/tips' },
  ];

  return (
    <AppShell
      padding={isMobile ? "xs" : "md"}
      header={{
        height: isMobile ? 50 : 60,
      }}
    >
      <AppShell.Header
        p={isMobile ? "xs" : "md"}
        style={{
          background: `linear-gradient(45deg, ${theme.colors.spice[1]}, ${theme.colors.oasis[1]})`,
          borderBottom: `2px solid ${theme.colors.gold[5]}`,
        }}
      >
        <Group justify="space-between" h="100%">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size={isMobile ? "xs" : "sm"}
              color={theme.colors.gold[0]}
              style={{
                transition: 'transform 0.3s ease',
                transform: opened ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            />
            <Text
              size={isMobile ? "lg" : "xl"}
              fw={700}
              style={{
                color: theme.colors.gold[0],
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontFamily: 'var(--mantine-font-family)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.color = theme.colors.gold[3];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = theme.colors.gold[0];
              }}
            >
              Discover Bahrain
            </Text>
          </Group>
          
          {mounted && (
            <ActionIcon
              variant="outline"
              color="yellow"
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
              size={isMobile ? "sm" : "md"}
              style={{
                color: theme.colors.gold[0],
                borderColor: theme.colors.gold[5],
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(15deg) scale(1.1)';
                e.currentTarget.style.backgroundColor = theme.colors.gold[5];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(0) scale(1)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {colorScheme === 'dark' ? <IconSun size={isMobile ? "0.9rem" : "1.1rem"} /> : <IconMoonStars size={isMobile ? "0.9rem" : "1.1rem"} />}
            </ActionIcon>
          )}
        </Group>
      </AppShell.Header>

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed',
              top: isMobile ? 50 : 60,
              left: 0,
              bottom: 0,
              width: isMobile ? '100%' : 300,
              zIndex: 1000,
            }}
          >
            <Paper
              p={isMobile ? "sm" : "md"}
              style={{
                height: '100%',
                background: `linear-gradient(45deg, ${theme.colors.desert[1]}, ${theme.colors.spice[1]})`,
                borderRight: `2px solid ${theme.colors.gold[5]}`,
                boxShadow: '4px 0 15px rgba(0,0,0,0.2)',
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'block',
                    padding: isMobile ? '12px 15px' : '10px 15px',
                    margin: isMobile ? '8px 0' : '5px 0',
                    textDecoration: 'none',
                    color: theme.colors.gold[0],
                    borderRadius: theme.radius.sm,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    fontSize: isMobile ? '1.1rem' : '1rem',
                  }}
                  onClick={() => toggle()}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.spice[2];
                    e.currentTarget.style.transform = 'translateX(10px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 195, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      <Box
        style={{
          minHeight: '100vh',
          padding: isMobile ? '10px' : '20px',
          background: `linear-gradient(45deg, ${theme.colors.desert[1]}, ${theme.colors.spice[1]})`,
          borderRadius: isMobile ? theme.radius.md : theme.radius.lg,
          boxShadow: '0 0 20px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
        }}
      >
        {children}
      </Box>

      <ChatBot />
    </AppShell>
  );
} 