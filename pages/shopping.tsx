import { Container, Title, Text, Paper, Stack, SimpleGrid, Card, Group, Badge } from '@mantine/core';
import { CustomImage } from '../components/CustomImage';

const shoppingAreas = [
  {
    name: 'The Avenues',
    type: 'Luxury Mall',
    location: 'Bahrain Bay',
    description: 'Modern shopping destination with luxury brands and waterfront views',
    bestFor: 'High-end shopping, dining, and entertainment',
    hours: '10:00 AM - 10:00 PM',
    image: 'https://images.unsplash.com/photo-1564769625093-8916c7a2c0b3?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Manama Souq',
    type: 'Traditional Market',
    location: 'Old Manama',
    description: 'Traditional market with local goods and souvenirs',
    bestFor: 'Traditional crafts, spices, and local souvenirs',
    hours: '9:00 AM - 9:00 PM',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'City Centre Bahrain',
    type: 'Shopping Mall',
    location: 'Seef',
    description: 'Largest shopping mall in Bahrain with international brands',
    bestFor: 'Family shopping, entertainment, and dining',
    hours: '10:00 AM - 10:00 PM',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Muharraq Souq',
    type: 'Traditional Market',
    location: 'Muharraq',
    description: 'Historic market with traditional Bahraini atmosphere',
    bestFor: 'Local crafts, antiques, and cultural experience',
    hours: '9:00 AM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop&q=60',
  },
];

const shoppingTips = [
  {
    title: 'Best Shopping Times',
    description: 'Weekday mornings and evenings are less crowded',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Bargaining Tips',
    description: 'Common in traditional markets, not in malls',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'What to Buy',
    description: 'Pearls, gold jewelry, traditional crafts, spices, and local perfumes',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Payment Methods',
    description: 'Credit cards widely accepted, cash preferred in souqs',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop&q=60',
  },
];

const specialMarkets = [
  {
    name: 'Gold Souq',
    location: 'Manama',
    specialty: 'Gold and jewelry',
    bestTime: 'Morning',
    description: 'Traditional market specializing in gold jewelry',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Bab Al Bahrain',
    location: 'Manama',
    specialty: 'Traditional goods',
    bestTime: 'Evening',
    description: 'Historic market entrance with various shops',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Moda Mall',
    location: 'Bahrain World Trade Center',
    specialty: 'Luxury brands',
    bestTime: 'Afternoon',
    description: 'Luxury shopping destination in Bahrain World Trade Center',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Yateem Center',
    location: 'Manama',
    specialty: 'Electronics',
    bestTime: 'Weekends',
    description: 'Popular for electronics and gadgets',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop&q=60',
  },
];

export default function Shopping() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl" style={{ color: 'var(--mantine-color-gold-0)' }}>
        Shopping in Bahrain
      </Title>

      <Stack gap="xl">
        <Paper p="md" radius="md" withBorder>
          <Title order={2} mb="md" style={{ color: 'var(--mantine-color-gold-0)' }}>
            Shopping Areas
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing="lg">
            {shoppingAreas.map((area) => (
              <Card key={area.name} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <CustomImage
                    src={area.image}
                    alt={area.name}
                    height={300}
                    fallbackText={`Image of ${area.name}`}
                    priority={shoppingAreas.indexOf(area) < 2}
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} size="lg">
                    {area.name}
                  </Text>
                  <Badge color="gold" variant="light">
                    {area.type}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  {area.description}
                </Text>

                <Group mt="md" mb="xs">
                  <Badge color="oasis" variant="light">
                    {area.location}
                  </Badge>
                  <Badge color="spice" variant="light">
                    {area.hours}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed" mt="sm">
                  Best for: {area.bestFor}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Paper>

        <Paper p="md" radius="md" withBorder>
          <Title order={2} mb="md" style={{ color: 'var(--mantine-color-gold-0)' }}>
            Shopping Tips
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing="lg">
            {shoppingTips.map((tip) => (
              <Card key={tip.title} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <CustomImage
                    src={tip.image}
                    alt={tip.title}
                    height={250}
                    fallbackText={`Image for ${tip.title}`}
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} size="lg">
                    {tip.title}
                  </Text>
                </Group>

                <Text size="sm" c="dimmed">
                  {tip.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Paper>

        <Paper p="md" radius="md" withBorder>
          <Title order={2} mb="md" style={{ color: 'var(--mantine-color-gold-0)' }}>
            Special Markets
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing="lg">
            {specialMarkets.map((market) => (
              <Card key={market.name} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <CustomImage
                    src={market.image}
                    alt={market.name}
                    height={300}
                    fallbackText={`Image of ${market.name}`}
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} size="lg">
                    {market.name}
                  </Text>
                  <Badge color="gold" variant="light">
                    {market.specialty}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  {market.description}
                </Text>

                <Group mt="md" mb="xs">
                  <Badge color="oasis" variant="light">
                    {market.location}
                  </Badge>
                  <Badge color="spice" variant="light">
                    Best Time: {market.bestTime}
                  </Badge>
                </Group>
              </Card>
            ))}
          </SimpleGrid>
        </Paper>
      </Stack>
    </Container>
  );
} 