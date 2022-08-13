import { Button, Container, Grid, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const index: React.FC = () => {
  return (
    <div className="flex h-full w-full items-start justify-center  p-10 text-3xl text-white">
      <Container size="xl" className="flex-1">
        <Grid grow>
          <Grid.Col className="flex items-center" span={4}>
            <Stack className="space-y-4">
              <Title order={1} className="text-4xl">
                {' '}
                <span className="bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text tracking-wider text-transparent">
                  Welcome to DirtyBits
                </span>
              </Title>
              <Text className="text-3xl font-light tracking-wider" color="#fff">
                Be a Coder with us.
              </Text>
              <Text
                className=" text-lg tracking-wider text-gray-500"
                color="dimmed"
              >
                First, solve the problem. Then, write the code.
              </Text>
              <Link href="/" passHref>
                <Button
                  variant="white"
                  radius="xl"
                  size="lg"
                  className="w-1/2 text-black"
                >
                  Explore
                </Button>
              </Link>
            </Stack>
          </Grid.Col>
          <Grid.Col className="" span={6}>
            <Image
              src="https://i.postimg.cc/MGFX8MY9/Saly-1.png"
              height={800}
              width={800}
              alt="rocket illustrator"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
export default index;
