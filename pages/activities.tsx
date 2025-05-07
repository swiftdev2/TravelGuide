import { Container, Title, Text, Paper, Stack, SimpleGrid, Card, Group, Badge } from '@mantine/core';
import { CustomImage } from '../components/CustomImage';

const topAttractions = [
  {
    name: 'Bahrain Fort',
    description: 'Ancient Portuguese fort with rich history and stunning views',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop&q=60',
    type: 'Historical Site',
    location: 'Karbabad',
    bestTime: 'Sunset',
    tips: 'Visit during sunset for the best views and cooler temperatures',
  },
  {
    name: 'Tree of Life',
    description: '400-year-old mesquite tree in the middle of the desert',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=60',
    type: 'Natural Wonder',
    location: 'Sakhir Desert',
    bestTime: 'Early Morning',
    tips: 'Best visited early morning to avoid the heat',
  },
  {
    name: 'Al-Fateh Grand Mosque',
    description: 'One of the largest mosques in the world',
    image: 'https://images.unsplash.com/photo-1564769625093-8916c7a2c0b3?w=800&auto=format&fit=crop&q=60',
    type: 'Religious Site',
    location: 'Juffair',
    bestTime: 'Morning',
    tips: 'Dress modestly and visit during non-prayer times',
  },
  {
    name: 'Bahrain National Museum',
    description: 'Showcases Bahrain\'s rich history and culture',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&auto=format&fit=crop&q=60',
    type: 'Museum',
    location: 'Manama',
    bestTime: 'Afternoon',
    tips: 'Allow 2-3 hours for a complete tour',
  },
];

const outdoorActivities = [
  {
    name: 'Desert Safari',
    description: 'Experience the thrill of dune bashing and desert camping',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop&q=60',
    type: 'Adventure',
    location: 'Sakhir Desert',
    duration: '4-6 hours',
    tips: 'Book in advance and bring sunscreen',
  },
  {
    name: 'Pearl Diving',
    description: 'Traditional pearl diving experience in the Arabian Gulf',
    image: 'https://images.unsplash.com/photo-1560275619-67f85cf1f5d9?w=800&auto=format&fit=crop&q=60',
    type: 'Water Sports',
    location: 'Muharraq',
    duration: 'Full Day',
    tips: 'Best experienced between April and October',
  },
  {
    name: 'Water Sports',
    description: 'Jet skiing, parasailing, and other water activities',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop&q=60',
    type: 'Water Sports',
    location: 'Amwaj Islands',
    duration: '2-4 hours',
    tips: 'Book through reputable operators',
  },
];

const dayTrips = [
  {
    name: 'Muharraq Island',
    description: 'Explore the old capital and its traditional architecture',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&auto=format&fit=crop&q=60',
    type: 'Cultural Tour',
    location: 'Muharraq',
    duration: 'Half Day',
    tips: 'Visit the traditional houses and souq',
  },
  {
    name: 'Al-Areen Wildlife Park',
    description: 'Wildlife reserve with native Arabian animals',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&auto=format&fit=crop&q=60',
    type: 'Nature',
    location: 'Sakhir',
    duration: 'Full Day',
    tips: 'Best visited in the morning when animals are most active',
  },
];

export default function Activities() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl" style={{ color: 'var(--mantine-color-gold-0)' }}>
        Activities & Attractions
      </Title>

      <Stack gap="xl">
        <Paper p="md" radius="md" withBorder>
          <Title order={2} mb="md" style={{ color: 'var(--mantine-color-gold-0)' }}>
            Top Attractions
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing="lg">
            {topAttractions.map((attraction) => (
              <Card key={attraction.name} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <CustomImage
                    src={attraction.image}
                    alt={attraction.name}
                    height={200}
                    fallbackText={`Image of ${attraction.name}`}
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} size="lg">
                    {attraction.name}
                  </Text>
                  <Badge color="gold" variant="light">
                    {attraction.type}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  {attraction.description}
                </Text>

                <Group mt="md" mb="xs">
                  <Badge color="oasis" variant="light">
                    {attraction.location}
                  </Badge>
                  <Badge color="spice" variant="light">
                    Best Time: {attraction.bestTime}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed" mt="sm">
                  Tips: {attraction.tips}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Paper>

        <Paper p="md" radius="md" withBorder>
          <Title order={2} mb="md" style={{ color: 'var(--mantine-color-gold-0)' }}>
            Outdoor Activities
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing="lg">
            {outdoorActivities.map((activity) => (
              <Card key={activity.name} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <CustomImage
                    src={activity.image}
                    alt={activity.name}
                    height={200}
                    fallbackText={`Image of ${activity.name}`}
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} size="lg">
                    {activity.name}
                  </Text>
                  <Badge color="gold" variant="light">
                    {activity.type}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  {activity.description}
                </Text>

                <Group mt="md" mb="xs">
                  <Badge color="oasis" variant="light">
                    {activity.location}
                  </Badge>
                  <Badge color="spice" variant="light">
                    Duration: {activity.duration}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed" mt="sm">
                  Tips: {activity.tips}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Paper>

        <Paper p="md" radius="md" withBorder>
          <Title order={2} mb="md" style={{ color: 'var(--mantine-color-gold-0)' }}>
            Day Trips
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing="lg">
            {dayTrips.map((trip) => (
              <Card key={trip.name} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <CustomImage
                    src={trip.image}
                    alt={trip.name}
                    height={200}
                    fallbackText={`Image of ${trip.name}`}
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} size="lg">
                    {trip.name}
                  </Text>
                  <Badge color="gold" variant="light">
                    {trip.type}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  {trip.description}
                </Text>

                <Group mt="md" mb="xs">
                  <Badge color="oasis" variant="light">
                    {trip.location}
                  </Badge>
                  <Badge color="spice" variant="light">
                    Duration: {trip.duration}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed" mt="sm">
                  Tips: {trip.tips}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Paper>
      </Stack>
    </Container>
  );
} 