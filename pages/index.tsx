import { Container, Title, Text, SimpleGrid, Card, Image, Button, Group, Stack, Box, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconArrowRight, IconCalendar, IconCurrencyDinar, IconLanguage, IconClock, IconEPassport, IconBus } from '@tabler/icons-react';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const guideSections = [
    {
      title: 'Local Tips & Tricks',
      description: 'Insider knowledge, cultural etiquette, and money-saving tips',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      link: '/tips',
      color: 'linear-gradient(45deg, #FFC300, #FF8C00)'
    },
    {
      title: 'Essential Information',
      description: 'Visa requirements, best time to visit, currency, and basic travel tips',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800',
      link: '/essentials',
      color: 'linear-gradient(45deg, #4A90E2, #357ABD)'
    },
    {
      title: 'Where to Stay',
      description: 'Best neighborhoods, hotels, and accommodation options for every budget',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      link: '/accommodation',
      color: 'linear-gradient(45deg, #50C878, #3CB371)'
    },
    {
      title: 'Food & Dining',
      description: 'Traditional Bahraini cuisine, best restaurants, and food experiences',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
      link: '/food',
      color: 'linear-gradient(45deg, #FF6B6B, #FF4757)'
    },
    {
      title: 'Activities & Attractions',
      description: 'Top things to do, historical sites, and unique experiences',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
      link: '/activities',
      color: 'linear-gradient(45deg, #9B59B6, #8E44AD)'
    },
    {
      title: 'Shopping Guide',
      description: 'Best markets, malls, and shopping districts',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800',
      link: '/shopping',
      color: 'linear-gradient(45deg, #3498DB, #2980B9)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <Box
      style={{
        background: 'linear-gradient(45deg, #1a1a1a, #2C2A2A)',
        minHeight: '100vh',
        padding: isMobile ? '80px 0 20px 0' : '40px 0',
      }}
    >
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack gap="xl" align="center" mt={isMobile ? "xl" : 0}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2
              }}
            >
              <Title
                order={1}
                ta="center"
                style={{
                  fontSize: isMobile ? rem(40) : rem(60),
                  background: 'linear-gradient(45deg, #FFC300, #FF8C00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(255, 195, 0, 0.3)',
                  letterSpacing: '2px',
                  fontWeight: 900,
                }}
              >
                Discover Bahrain
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Text
                size={isMobile ? "md" : "lg"}
                ta="center"
                c="dimmed"
                style={{
                  maxWidth: rem(800),
                  lineHeight: 1.6,
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                }}
              >
                Your comprehensive guide to exploring the pearl of the Arabian Gulf
              </Text>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ width: '100%' }}
            >
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                {guideSections.map((section) => (
                  <motion.div key={section.title} variants={itemVariants}>
                    <Card
                      shadow="xl"
                      padding="lg"
                      radius="md"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      component={motion.div}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <Card.Section>
                        <Box
                          style={{
                            position: 'relative',
                            overflow: 'hidden',
                            height: 200,
                          }}
                        >
                          <Image
                            src={section.image}
                            height={200}
                            alt={section.title}
                            style={{
                              transition: 'transform 0.3s ease',
                            }}
                          />
                          <Box
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: section.color,
                              opacity: 0.2,
                              transition: 'opacity 0.3s ease',
                            }}
                          />
                        </Box>
                      </Card.Section>

                      <Stack gap="sm" mt="md" style={{ flex: 1 }}>
                        <Title
                          order={3}
                          style={{
                            background: section.color,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {section.title}
                        </Title>
                        <Text size="sm" c="dimmed" style={{ flex: 1 }}>
                          {section.description}
                        </Text>
                        <Group justify="flex-end" mt="md">
                          <Link href={section.link} passHref style={{ textDecoration: 'none' }}>
                            <Button
                              variant="light"
                              rightSection={<IconArrowRight size={16} />}
                              style={{
                                background: section.color,
                                color: 'white',
                                border: 'none',
                                transition: 'transform 0.3s ease',
                              }}
                              component={motion.button}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Learn More
                            </Button>
                          </Link>
                        </Group>
                      </Stack>
                    </Card>
                  </motion.div>
                ))}
              </SimpleGrid>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ width: '100%' }}
            >
              <Card
                shadow="xl"
                padding="xl"
                radius="md"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Title
                  order={2}
                  ta="center"
                  mb="xl"
                  style={{
                    background: 'linear-gradient(45deg, #FFC300, #FF8C00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Quick Facts About Bahrain
                </Title>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                  {[
                    { 
                      label: 'Best Time to Visit', 
                      value: 'November to March (cooler weather)',
                      icon: <IconCalendar size={24} style={{ color: '#FFC300' }} />
                    },
                    { 
                      label: 'Currency', 
                      value: 'Bahraini Dinar (BHD)',
                      icon: <IconCurrencyDinar size={24} style={{ color: '#FFC300' }} />
                    },
                    { 
                      label: 'Language', 
                      value: 'Arabic (English widely spoken)',
                      icon: <IconLanguage size={24} style={{ color: '#FFC300' }} />
                    },
                    { 
                      label: 'Time Zone', 
                      value: 'GMT+3',
                      icon: <IconClock size={24} style={{ color: '#FFC300' }} />
                    },
                    { 
                      label: 'Visa', 
                      value: 'Visa on arrival for many countries',
                      icon: <IconEPassport size={24} style={{ color: '#FFC300' }} />
                    },
                    { 
                      label: 'Transport', 
                      value: 'Taxis, buses, and ride-sharing apps',
                      icon: <IconBus size={24} style={{ color: '#FFC300' }} />
                    },
                  ].map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <Box
                        p="md"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <Group gap="sm" mb="xs">
                          {fact.icon}
                          <Text fw={700} style={{ color: '#FFC300' }}>
                            {fact.label}
                          </Text>
                        </Group>
                        <Text size="sm" c="dimmed" ml={rem(36)}>
                          {fact.value}
                        </Text>
                      </Box>
                    </motion.div>
                  ))}
                </SimpleGrid>
              </Card>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
