import { Container, Title, Text, Paper, Stack, SimpleGrid, Card, Group, Badge } from '@mantine/core';
import { CustomImage } from '../components/CustomImage';

const restaurants = [
  {
    name: 'Cafe Lilou',
    type: 'French Cafe',
    location: 'Adliya',
    description: 'Charming French cafe with excellent pastries and coffee',
    bestFor: 'Breakfast, Brunch, Coffee',
    price: '$$',
    image: 'https://picsum.photos/id/1018/1200/800',
  },
  {
    name: 'Saffron by Jena',
    type: 'Indian',
    location: 'Bahrain Bay',
    description: 'Fine dining Indian restaurant with modern twists',
    bestFor: 'Dinner, Special Occasions',
    price: '$$$',
    image: 'https://picsum.photos/id/1019/1200/800',
  },
  {
    name: 'Haji\'s Cafe',
    type: 'Local',
    location: 'Muharraq',
    description: 'Traditional Bahraini breakfast and coffee',
    bestFor: 'Breakfast, Local Experience',
    price: '$',
    image: 'https://picsum.photos/id/1020/1200/800',
  },
  {
    name: 'La Vinoteca',
    type: 'Italian',
    location: 'Juffair',
    description: 'Authentic Italian cuisine with extensive wine selection',
    bestFor: 'Dinner, Wine Tasting',
    price: '$$$',
    image: 'https://picsum.photos/id/1021/1200/800',
  },
];

const localDishes = [
  {
    name: 'Machboos',
    description: 'Traditional rice dish with meat or fish',
    ingredients: 'Rice, Meat/Fish, Spices, Onions',
    bestPlaces: 'Local restaurants and home kitchens',
    image: 'https://picsum.photos/id/1022/1200/800',
  },
  {
    name: 'Muhammar',
    description: 'Sweet rice dish with dates',
    ingredients: 'Rice, Dates, Cardamom, Saffron',
    bestPlaces: 'Traditional restaurants',
    image: 'https://picsum.photos/id/1023/1200/800',
  },
  {
    name: 'Gahwa',
    description: 'Traditional Arabic coffee',
    ingredients: 'Coffee beans, Cardamom, Saffron',
    bestPlaces: 'Traditional cafes and homes',
    image: 'https://picsum.photos/id/1024/1200/800',
  },
  {
    name: 'Halwa',
    description: 'Traditional sweet dessert',
    ingredients: 'Cornstarch, Sugar, Rosewater, Nuts',
    bestPlaces: 'Sweet shops and traditional markets',
    image: 'https://picsum.photos/id/1025/1200/800',
  },
];

const foodTips = [
  {
    title: 'Best Dining Times',
    description: 'Lunch: 1-3 PM, Dinner: 7-10 PM. Book in advance for popular restaurants',
    image: 'https://picsum.photos/id/1026/1200/800',
  },
  {
    title: 'Local Customs',
    description: 'Try eating with your right hand, and accept coffee when offered',
    image: 'https://picsum.photos/id/1027/1200/800',
  },
  {
    title: 'Food Markets',
    description: 'Visit Manama Souq for fresh produce and local delicacies',
    image: 'https://picsum.photos/id/1028/1200/800',
  },
  {
    title: 'Dining Etiquette',
    description: 'Dress modestly, remove shoes when entering traditional seating areas',
    image: 'https://picsum.photos/id/1029/1200/800',
  },
];

export default function Food() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl" style={{ color: 'var(--mantine-color-gold-0)' }}>
        Food & Dining
      </Title>

      <Stack gap="xl">
        <Paper p="md" radius="md" withBorder>
          <Title order={2} mb="md" style={{ color: 'var(--mantine-color-gold-0)' }}>
            Popular Restaurants
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing="lg">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.name} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <CustomImage
                    src={restaurant.image}
                    alt={restaurant.name}
                    height={200}
                    fallbackText={`Image of ${restaurant.name}`}
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} size="lg">
                    {restaurant.name}
                  </Text>
                  <Badge color="gold" variant="light">
                    {restaurant.type}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  {restaurant.description}
                </Text>

                <Group mt="md" mb="xs">
                  <Badge color="oasis" variant="light">
                    {restaurant.location}
                  </Badge>
                  <Badge color="spice" variant="light">
                    {restaurant.price}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed" mt="sm">
                  Best for: {restaurant.bestFor}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Paper>

        <Paper p="md" radius="md" withBorder>
          <Title order={2} mb="md" style={{ color: 'var(--mantine-color-gold-0)' }}>
            Local Dishes
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing="lg">
            {localDishes.map((dish) => (
              <Card key={dish.name} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <CustomImage
                    src={dish.image}
                    alt={dish.name}
                    height={200}
                    fallbackText={`Image of ${dish.name}`}
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} size="lg">
                    {dish.name}
                  </Text>
                </Group>

                <Text size="sm" c="dimmed">
                  {dish.description}
                </Text>

                <Group mt="md" mb="xs">
                  <Badge color="oasis" variant="light">
                    Ingredients
                  </Badge>
                  <Badge color="spice" variant="light">
                    Best Places
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed" mt="sm">
                  {dish.ingredients}
                </Text>
                <Text size="sm" c="dimmed">
                  {dish.bestPlaces}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Paper>

        <Paper p="md" radius="md" withBorder>
          <Title order={2} mb="md" style={{ color: 'var(--mantine-color-gold-0)' }}>
            Food Tips
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing="lg">
            {foodTips.map((tip) => (
              <Card key={tip.title} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <CustomImage
                    src={tip.image}
                    alt={tip.title}
                    height={200}
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
      </Stack>
    </Container>
  );
} 