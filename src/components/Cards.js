import React from 'react';
import { Title, Text, Card, Container, useMantineTheme, rem } from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react'; // Correct imports
import './Cards.css'; 

const mockdata = [
  {
    title: 'Built for Peak Performance',
    description:
      'Our software is optimized for speed, efficiency, and scalability. From fast-loading websites to powerful applications, we create solutions that help your business run at its highest potential, no matter the demands.',
    icon: IconGauge,
  },
  {
    title: 'Privacy and Security First',
    description:
      'We implement best-in-class security measures to ensure your business data stays private and protected. By integrating secure third-party tools and maintaining a privacy-focused approach, we safeguard your information every step of the way.',
    icon: IconUser,
  },
  {
    title: 'Tailored Solutions',
    description:
      'We combine custom development with trusted third-party integrations to deliver the best possible solution for your business. Our approach ensures you get tailored functionality, while leveraging the power of reliable tools and platforms.',
    icon: IconCookie,
  },
];

export function Cards() {
  const theme = useMantineTheme();

  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" padding="xl" className="features-card" withBorder>
      <div className="card-content">
        <feature.icon
          style={{ width: rem(50), height: rem(50), marginBottom: '20px' }}
          stroke={2}
          color={theme.colors.blue[6]}
        />

        <Text fz="lg" fw={500} className="card-title" mt="md">
          {feature.title}
        </Text>

        <Text fz="sm" className="card-description" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </div>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className="title" ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text className="description" ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <div className="features-grid">
        {features}
      </div>
    </Container>
  );
}
