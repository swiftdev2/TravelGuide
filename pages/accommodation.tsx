import { Container, Title, Text, Paper, Stack, SimpleGrid, Card, Image, Group, Badge } from '@mantine/core';

export default function Accommodation() {
  const areas = [
    {
      name: 'Manama',
      description: 'The capital city and commercial center, perfect for business travelers and those who want to be in the heart of the action.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
      pros: ['Central location', 'Luxury hotels', 'Shopping malls', 'Restaurants'],
      cons: ['Higher prices', 'More traffic', 'Less authentic']
    },
    {
      name: 'Juffair',
      description: 'Popular expat area with a mix of hotels and apartments, known for its nightlife and dining options.',
      image: 'https://images.unsplash.com/photo-1564769625093-8916c7a2c0b3?w=800',
      pros: ['Vibrant nightlife', 'International cuisine', 'Modern amenities', 'Expat community'],
      cons: ['Can be noisy', 'Less traditional feel']
    },
    {
      name: 'Seef',
      description: 'Modern district with luxury shopping malls and upscale hotels, great for families and shopping enthusiasts.',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800',
      pros: ['Family-friendly', 'Shopping paradise', 'Modern facilities', 'Safe area'],
      cons: ['Less authentic', 'Higher prices']
    },
    {
      name: 'Muharraq',
      description: 'Traditional area with authentic Bahraini culture, perfect for experiencing local life.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      pros: ['Authentic experience', 'Lower prices', 'Traditional markets', 'Cultural sites'],
      cons: ['Fewer luxury options', 'Less modern amenities']
    }
  ];

  const accommodationTypes = [
    {
      type: 'Luxury Hotels',
      description: '5-star international chains and boutique hotels with premium amenities',
      price: '200-500 BHD per night',
      bestFor: 'Business travelers, luxury seekers, special occasions'
    },
    {
      type: 'Mid-range Hotels',
      description: 'Comfortable 3-4 star hotels with good facilities and service',
      price: '80-200 BHD per night',
      bestFor: 'Families, couples, regular tourists'
    },
    {
      type: 'Serviced Apartments',
      description: 'Fully furnished apartments with hotel-like services',
      price: '60-150 BHD per night',
      bestFor: 'Long-term stays, families, business travelers'
    },
    {
      type: 'Budget Hotels',
      description: 'Basic accommodation with essential amenities',
      price: '30-80 BHD per night',
      bestFor: 'Budget travelers, backpackers, short stays'
    }
  ];

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={1} ta="center" c="blue.9">
          Where to Stay in Bahrain
        </Title>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} mb="md">Best Areas to Stay</Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {areas.map((area) => (
              <Card key={area.name} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={area.image}
                    height={160}
                    alt={area.name}
                  />
                </Card.Section>

                <Stack gap="sm" mt="md">
                  <Title order={3}>{area.name}</Title>
                  <Text size="sm">{area.description}</Text>
                  
                  <Group gap="xs">
                    <Badge color="green">Pros</Badge>
                    <Badge color="red">Cons</Badge>
                  </Group>
                  
                  <SimpleGrid cols={2} spacing="xs">
                    <div>
                      {area.pros.map((pro) => (
                        <Text key={pro} size="sm" c="green">✓ {pro}</Text>
                      ))}
                    </div>
                    <div>
                      {area.cons.map((con) => (
                        <Text key={con} size="sm" c="red">✗ {con}</Text>
                      ))}
                    </div>
                  </SimpleGrid>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} mb="md">Types of Accommodation</Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {accommodationTypes.map((type) => (
              <Card key={type.type} shadow="sm" padding="lg" radius="md" withBorder>
                <Stack gap="sm">
                  <Title order={3}>{type.type}</Title>
                  <Text size="sm">{type.description}</Text>
                  <Text fw={700}>Price Range: {type.price}</Text>
                  <Text size="sm">Best for: {type.bestFor}</Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} mb="md">Booking Tips</Title>
          <Text mb="md">
            Here are some tips to help you find the best accommodation in Bahrain:
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <div>
              <Title order={4}>Best Booking Practices</Title>
              <Text size="sm">• Book 2-3 months in advance for peak season</Text>
              <Text size="sm">• Check multiple booking sites for best rates</Text>
              <Text size="sm">• Look for special deals during off-peak season</Text>
              <Text size="sm">• Consider location vs. price trade-offs</Text>
            </div>
            <div>
              <Title order={4}>What to Look For</Title>
              <Text size="sm">• Proximity to public transport</Text>
              <Text size="sm">• Included breakfast options</Text>
              <Text size="sm">• Free WiFi and amenities</Text>
              <Text size="sm">• Guest reviews and ratings</Text>
            </div>
          </SimpleGrid>
        </Paper>
      </Stack>
    </Container>
  );
} 