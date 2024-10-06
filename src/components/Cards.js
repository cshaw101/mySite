import React from 'react';
import { Title, Text, Card, Container, useMantineTheme, rem } from '@mantine/core';
import { SectionHeader } from './SectionHeader';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react'; // Correct imports
import './Cards.css'; 

const mockdata = [
  {
    title: 'Peak Performance',
    description:
      'Our software is optimized for speed, efficiency, and scalability. We create websites that help your business operate at its highest potential.',
    icon: IconGauge,
  },
  {
    title: 'Privacy & Security',
    description:
      'With best-in-class security measures, we ensure your business data remains private and protected every step of the way.',
    icon: IconUser,
  },
  {
    title: 'Tailored Solutions',
    description:
      'Custom development paired with trusted third-party integrations ensures tailored functionality for your business’s needs.',
    icon: IconCookie,
  },
];

export function Cards() {
  const theme = useMantineTheme();

  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" padding="xl" className="features-card" withBorder>
      <div className="card-content">
        <feature.icon
          style={{ width: rem(60), height: rem(60), marginBottom: '20px' }} // Increased icon size for emphasis
          stroke={2}
          color={theme.colors.teal[4]} // Update icon color to match theme
        />
        <Text fz="lg" fw={700} className="card-title" mt="md" color="#FFFFFF"> {/* Update title styling */}
          {feature.title}
        </Text>
        <Text fz="sm" className="card-description" color="#B0B0B0" mt="sm"> {/* Update description color */}
          {feature.description}
        </Text>
      </div>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className="title" ta="center" mt="sm">
      <SectionHeader
  title="Tailored Solutions Built Around Your Vision"
  description="I specialize in creating custom websites that align perfectly with your goals."
/>
      </Title>
      <div className="features-grid">
        {features}
      </div>
    </Container>
  );
}
