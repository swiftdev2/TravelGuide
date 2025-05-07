import { Container, Title, Text, Paper, Stack, List } from '@mantine/core';

export default function Essentials() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={1} ta="center" c="blue.9">
          Essential Travel Information
        </Title>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} mb="md">Visa Requirements</Title>
          <Text mb="md">
            Bahrain offers visa on arrival for citizens of many countries. However, it's always best to check the latest requirements before traveling.
          </Text>
          <List spacing="sm">
            <List.Item>Visa on arrival for 14 days (extendable)</List.Item>
            <List.Item>Valid passport with 6 months validity</List.Item>
            <List.Item>Return ticket required</List.Item>
            <List.Item>Proof of accommodation</List.Item>
            <List.Item>Sufficient funds for stay</List.Item>
          </List>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} mb="md">Best Time to Visit</Title>
          <Text mb="md">
            Bahrain has a desert climate with hot summers and mild winters. The best time to visit is during the cooler months.
          </Text>
          <List spacing="sm">
            <List.Item>High Season: November to March (20-25°C)</List.Item>
            <List.Item>Shoulder Season: April and October (25-35°C)</List.Item>
            <List.Item>Low Season: May to September (35-45°C)</List.Item>
          </List>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} mb="md">Money & Currency</Title>
          <Text mb="md">
            The official currency is the Bahraini Dinar (BHD). Here's what you need to know about money in Bahrain:
          </Text>
          <List spacing="sm">
            <List.Item>1 BHD ≈ 2.65 USD (as of 2024)</List.Item>
            <List.Item>Credit cards widely accepted</List.Item>
            <List.Item>ATMs available throughout the country</List.Item>
            <List.Item>Exchange rates better at banks than hotels</List.Item>
            <List.Item>Keep small change for tips and small purchases</List.Item>
          </List>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} mb="md">Getting Around</Title>
          <Text mb="md">
            Bahrain has several transportation options for getting around:
          </Text>
          <List spacing="sm">
            <List.Item>Taxis: Metered and available 24/7</List.Item>
            <List.Item>Ride-sharing: Uber and Careem available</List.Item>
            <List.Item>Public buses: Extensive network, very affordable</List.Item>
            <List.Item>Car rental: Available at airport and major hotels</List.Item>
            <List.Item>Walking: Safe in most areas, but hot during summer</List.Item>
          </List>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} mb="md">Staying Cool</Title>
          <Text mb="md">
            Bahrain can get extremely hot, especially during summer. Here are some tips to stay cool:
          </Text>
          <List spacing="sm">
            <List.Item>Stay hydrated - drink plenty of water</List.Item>
            <List.Item>Wear light, breathable clothing</List.Item>
            <List.Item>Use sunscreen (SPF 50+)</List.Item>
            <List.Item>Plan outdoor activities early morning or evening</List.Item>
            <List.Item>Take advantage of air-conditioned malls and attractions</List.Item>
          </List>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} mb="md">Local Customs & Etiquette</Title>
          <Text mb="md">
            While Bahrain is relatively liberal, it's important to respect local customs:
          </Text>
          <List spacing="sm">
            <List.Item>Dress modestly in public areas</List.Item>
            <List.Item>Remove shoes before entering homes</List.Item>
            <List.Item>Use right hand for eating and greeting</List.Item>
            <List.Item>Respect prayer times and religious customs</List.Item>
            <List.Item>Public displays of affection should be avoided</List.Item>
          </List>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={2} mb="md">Emergency Information</Title>
          <Text mb="md">
            Important emergency numbers and information:
          </Text>
          <List spacing="sm">
            <List.Item>Police: 999</List.Item>
            <List.Item>Ambulance: 999</List.Item>
            <List.Item>Fire Department: 999</List.Item>
            <List.Item>Tourist Police: 1756 6666</List.Item>
            <List.Item>Your country's embassy contact information</List.Item>
          </List>
        </Paper>
      </Stack>
    </Container>
  );
} 