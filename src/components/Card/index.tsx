import { BackgroundImage, Box, Button, Center, Text } from '@mantine/core';
import React from 'react';

type CardProps = {
  title: string;
  backgroundImageSrc: string;
  btnText?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  backgroundImageSrc,
  btnText,
}: CardProps) => {
  return (
    <Box
      sx={{
        minWidth: 300,
        maxWidth: 300,
        overflow: 'hidden',
      }}
    >
      <BackgroundImage src={backgroundImageSrc} radius="lg">
        <Center p="md" className="flex flex-col items-start space-y-3 ">
          <Text weight="bold" size={25} color="#fff">
            {title}
          </Text>
          <Button radius="xl" variant="white">
            {btnText || 'Get Started'}
          </Button>
        </Center>
      </BackgroundImage>
    </Box>
  );
};
export default Card;
