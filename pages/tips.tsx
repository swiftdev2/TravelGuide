import { Container, Title, Text, Paper, Stack, SimpleGrid, Card, Box, rem } from '@mantine/core';
import { useViewportSize, useMediaQuery } from '@mantine/hooks';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CustomImage } from '../components/CustomImage';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #000000, #1a1a1a)',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <motion.div
        animate={{
          background: [
            'linear-gradient(45deg, #000000, #1a1a1a)',
            'linear-gradient(45deg, #1a1a1a, #000000)',
            'linear-gradient(45deg, #000000, #1a1a1a)',
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          textAlign: 'center',
          padding: isMobile ? '0 20px' : '0',
        }}
        className="floating-animation"
      >
        <Stack align="center" gap={isMobile ? "lg" : "xl"}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          >
            <Title
              order={1}
              size={isMobile ? rem(50) : rem(100)}
              style={{
                background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
                textShadow: '0 0 20px rgba(255,255,255,0.3)',
                letterSpacing: '2px',
                fontWeight: 900,
              }}
              className="glowing-animation"
            >
              Discover Bahrain
            </Title>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
          >
            <Text
              size={isMobile ? rem(18) : rem(24)}
              style={{
                color: '#ffffff',
                textAlign: 'center',
                maxWidth: isMobile ? '100%' : rem(800),
                textShadow: '0 0 10px rgba(255,255,255,0.2)',
                lineHeight: 1.6,
                letterSpacing: '1px',
              }}
            >
              Your essential guide to experiencing the pearl of the Arabian Gulf
            </Text>
          </motion.div>
        </Stack>
      </motion.div>

      <style jsx global>{`
        @keyframes glowing {
          0% { box-shadow: 0 0 20px rgba(255,255,255,0.3); }
          50% { box-shadow: 0 0 40px rgba(255,255,255,0.5); }
          100% { box-shadow: 0 0 20px rgba(255,255,255,0.3); }
        }

        @keyframes floating {
          0% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
          100% { transform: translate(-50%, -50%) translateY(0); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        .glowing-animation {
          animation: glowing 2s ease-in-out infinite;
        }

        .floating-animation {
          animation: floating 3s ease-in-out infinite;
        }

        .card-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
};

const culturalTips = [
  {
    title: 'Dress Code',
    description: 'Modest clothing recommended. Cover shoulders and knees in public places',
    image: 'https://images.pexels.com/photos/6203791/pexels-photo-6203791.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-blue-9)',
  },
  {
    title: 'Social Etiquette',
    description: 'Use right hand for eating and greeting. Remove shoes when entering homes',
    image: 'https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-gold-9)',
  },
  {
    title: 'Photography',
    description: 'Ask permission before taking photos of people. Avoid sensitive areas',
    image: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-red-9)',
  },
  {
    title: 'Language',
    description: 'Basic Arabic phrases appreciated. English widely spoken in tourist areas',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-green-9)',
  },
];

const moneySavingTips = [
  {
    title: 'Transportation',
    description: 'Use public buses or group taxis for cost-effective travel',
    image: 'https://images.pexels.com/photos/2996106/pexels-photo-2996106.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-orange-9)',
  },
  {
    title: 'Dining',
    description: 'Local restaurants offer better value than tourist spots',
    image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-pink-9)',
  },
  {
    title: 'Shopping',
    description: 'Visit traditional souks for authentic goods at better prices',
    image: 'https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-violet-9)',
  },
  {
    title: 'Accommodation',
    description: 'Book in advance and consider apartments for longer stays',
    image: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-cyan-9)',
  },
];

const practicalTips = [
  {
    title: 'Health & Safety',
    description: 'Drink bottled water. Keep emergency numbers handy',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-teal-9)',
  },
  {
    title: 'Internet & Communication',
    description: 'Free WiFi in malls and cafes. Local SIM cards available',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-indigo-9)',
  },
  {
    title: 'Weather',
    description: 'Hot summers, mild winters. Best time to visit: October to April',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-lime-9)',
  },
  {
    title: 'Emergency Contacts',
    description: 'Police: 999, Ambulance: 998, Fire: 997',
    image: 'https://images.pexels.com/photos/3856050/pexels-photo-3856050.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'var(--mantine-color-grape-9)',
  },
];

export default function Tips() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      rotateY: [-5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box>
      <HeroSection />

      <Container size="lg" py={isMobile ? "md" : "xl"}>
        <Stack gap={isMobile ? "lg" : "xl"}>
          {/* Cultural Tips Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <Paper
              p={isMobile ? "md" : "xl"}
              radius="md"
              style={{
                background: 'linear-gradient(45deg, #000000, #1a1a1a)',
                color: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
                    'linear-gradient(45deg, rgba(255,255,255,0), rgba(255,255,255,0.1))',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 0,
                }}
              />
              <Title
                order={2}
                mb={isMobile ? "md" : "xl"}
                style={{
                  background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  zIndex: 1,
                  fontSize: isMobile ? rem(24) : undefined,
                }}
              >
                Cultural Insights
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing={isMobile ? "md" : "xl"}>
                {culturalTips.map((tip, index) => (
                  <motion.div
                    key={tip.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.3 }}
                    style={{
                      perspective: 1000
                    }}
                  >
                    <Card
                      shadow="xl"
                      padding={isMobile ? "md" : "xl"}
                      radius="md"
                      style={{
                        background: tip.color,
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <motion.div
                        animate={{
                          background: [
                            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                            'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                          ],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          zIndex: 0,
                        }}
                        className="card-shine"
                      />
                      <Card.Section>
                        <motion.div
                          variants={imageVariants}
                          style={{
                            overflow: 'hidden'
                          }}
                        >
                          <CustomImage
                            src={tip.image}
                            alt={tip.title}
                            height={isMobile ? 200 : 300}
                            fallbackText={`Image for ${tip.title}`}
                          />
                        </motion.div>
                      </Card.Section>

                      <Stack mt={isMobile ? "sm" : "md"} gap={isMobile ? "sm" : "md"} style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                          initial={{ x: -50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Title order={3} style={{ 
                            color: '#ffffff',
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            fontSize: isMobile ? rem(18) : undefined,
                          }}>
                            {tip.title}
                          </Title>
                        </motion.div>
                        <motion.div
                          initial={{ x: 50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <Text size={isMobile ? "sm" : "lg"} style={{ 
                            color: '#ffffff',
                            textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                          }}>
                            {tip.description}
                          </Text>
                        </motion.div>
                      </Stack>
                    </Card>
                  </motion.div>
                ))}
              </SimpleGrid>
            </Paper>
          </motion.div>

          {/* Money Saving Tips Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <Paper
              p={isMobile ? "md" : "xl"}
              radius="md"
              style={{
                background: 'linear-gradient(45deg, #1a1a1a, #000000)',
                color: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
                    'linear-gradient(45deg, rgba(255,255,255,0), rgba(255,255,255,0.1))',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 0,
                }}
              />
              <Title
                order={2}
                mb={isMobile ? "md" : "xl"}
                style={{
                  background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  zIndex: 1,
                  fontSize: isMobile ? rem(24) : undefined,
                }}
              >
                Smart Travel
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing={isMobile ? "md" : "xl"}>
                {moneySavingTips.map((tip, index) => (
                  <motion.div
                    key={tip.title}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, 1, -1, 1, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Card
                      shadow="xl"
                      padding={isMobile ? "md" : "xl"}
                      radius="md"
                      style={{
                        background: tip.color,
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                          zIndex: 0,
                        }}
                      />
                      <Card.Section>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CustomImage
                            src={tip.image}
                            alt={tip.title}
                            height={isMobile ? 200 : 300}
                            fallbackText={`Image for ${tip.title}`}
                          />
                        </motion.div>
                      </Card.Section>

                      <Stack mt={isMobile ? "sm" : "md"} gap={isMobile ? "sm" : "md"} style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                          initial={{ x: -50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Title order={3} style={{ 
                            color: '#ffffff',
                            fontSize: isMobile ? rem(18) : undefined,
                          }}>
                            {tip.title}
                          </Title>
                        </motion.div>
                        <motion.div
                          initial={{ x: 50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <Text size={isMobile ? "sm" : "lg"} style={{ color: '#ffffff' }}>
                            {tip.description}
                          </Text>
                        </motion.div>
                      </Stack>
                    </Card>
                  </motion.div>
                ))}
              </SimpleGrid>
            </Paper>
          </motion.div>

          {/* Practical Tips Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <Paper
              p={isMobile ? "md" : "xl"}
              radius="md"
              style={{
                background: 'linear-gradient(45deg, #000000, #1a1a1a)',
                color: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
                    'linear-gradient(45deg, rgba(255,255,255,0), rgba(255,255,255,0.1))',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 0,
                }}
              />
              <Title
                order={2}
                mb={isMobile ? "md" : "xl"}
                style={{
                  background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  zIndex: 1,
                  fontSize: isMobile ? rem(24) : undefined,
                }}
              >
                Essential Knowledge
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing={isMobile ? "md" : "xl"}>
                {practicalTips.map((tip, index) => (
                  <motion.div
                    key={tip.title}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -1, 1, -1, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Card
                      shadow="xl"
                      padding={isMobile ? "md" : "xl"}
                      radius="md"
                      style={{
                        background: tip.color,
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                          zIndex: 0,
                        }}
                      />
                      <Card.Section>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CustomImage
                            src={tip.image}
                            alt={tip.title}
                            height={isMobile ? 200 : 300}
                            fallbackText={`Image for ${tip.title}`}
                          />
                        </motion.div>
                      </Card.Section>

                      <Stack mt={isMobile ? "sm" : "md"} gap={isMobile ? "sm" : "md"} style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                          initial={{ x: -50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Title order={3} style={{ 
                            color: '#ffffff',
                            fontSize: isMobile ? rem(18) : undefined,
                          }}>
                            {tip.title}
                          </Title>
                        </motion.div>
                        <motion.div
                          initial={{ x: 50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <Text size={isMobile ? "sm" : "lg"} style={{ color: '#ffffff' }}>
                            {tip.description}
                          </Text>
                        </motion.div>
                      </Stack>
                    </Card>
                  </motion.div>
                ))}
              </SimpleGrid>
            </Paper>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
} 