import { Button, Container, Grid, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const titlePrimary = largeScreen
    ? 'Welcome to DirtyBits'
    : 'Enchance your skills';
  const titleSecondary = largeScreen
    ? 'First, solve the problem. Then, write the code.'
    : "It's a platform for you to enhance your problem solving skills and prepare yourself for the technical interviews.";

  return (
    <div className="flex h-screen w-full items-center justify-center p-3 text-3xl md:p-10 lg:items-start ">
      <Container size="xl" className="flex-1 ">
        <Grid gutter="md" grow>
          <Grid.Col
            className="flex items-center"
            span={4}
            mt={!largeScreen ? 'sm' : ''}
          >
            <Stack className="space-y-4">
              <Title
                order={1}
                className="text-center text-3xl md:text-4xl lg:text-left lg:text-[2rem]"
              >
                {' '}
                <span className="bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text tracking-wider text-transparent">
                  {titlePrimary}
                </span>
              </Title>
              <Text
                className="hidden text-center text-xl font-light tracking-wider md:block md:text-3xl lg:text-left"
                color="#fff"
              >
                Be a Coder with us.
              </Text>
              <Text
                className="text-center text-lg tracking-wider text-gray-500 lg:text-left lg:text-[1rem]"
                color="dimmed"
              >
                {titleSecondary}
              </Text>
              <Link href="/" passHref>
                <Button
                  variant="white"
                  radius="xl"
                  size="lg"
                  className="mx-auto w-[10rem] text-black lg:mx-0"
                >
                  Explore
                </Button>
              </Link>
            </Stack>
          </Grid.Col>

          <Grid.Col className="" span={largeScreen ? 6 : 0}>
            <Image
              src="https://i.postimg.cc/MGFX8MY9/Saly-1.png"
              height={largeScreen ? 800 : 600}
              width={largeScreen ? 800 : 600}
              alt="rocket illustrator"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
export default HeroSection;
