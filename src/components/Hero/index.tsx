import { Button, Container, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
  // const titlePrimary = largeScreen
  //   ? 'Welcome to DirtyBits'
  //   : 'Enchance your skills';
  // const titleSecondary = largeScreen
  //   ? 'First, solve the problem. Then, write the code'
  //   : "It's a platform for you to enhance your problem solving skills and prepare yourself for the technical interviews";

  return (
    <div className="glass min-h-screen">
      <Container size="xl" className="pt-[20%] lg:pt-[4%]">
        <div className="grid grid-cols-1 p-3 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col items-center justify-center space-y-7 lg:items-start">
            <h1 className="text-gradient text-center text-3xl font-bold tracking-wider text-transparent md:text-left md:text-5xl">
              Ace your interview
            </h1>
            <Text className="text-2xl text-white md:text-3xl">
              Be a Coder with us
            </Text>
            <Text
              color="dimmed"
              className=" text-center text-lg md:w-2/3 lg:w-full lg:text-left lg:text-xl"
            >
              Be a part of the DirtyBits community
            </Text>
            <div className="btnRing p-1">
              <Link href="/" passHref>
                <Button
                  variant="white"
                  radius="xl"
                  size="xl"
                  // className="mx-auto w-[10rem] text-black lg:mx-0"
                >
                  Explore
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center transition-transform ease-in-out lg:scale-125">
            <Image
              src="https://i.postimg.cc/MGFX8MY9/Saly-1.png"
              height={800}
              width={800}
              className="aspect-auto"
              alt="rocket illustrator"
            />
          </div>
        </div>
      </Container>
      {/* <Container size="xl" className="flex-1 ">
        <Grid gutter="md" grow>
          <Grid.Col
            className="flex items-center"
            span={4}
            mt={!largeScreen ? 'xl' : ''}
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
      </Container> */}
    </div>
  );
};
export default HeroSection;
