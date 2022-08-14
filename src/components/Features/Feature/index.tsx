import { Box } from '@mantine/core';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

type Props = {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  alt: string;
};

const Feature: React.FC<Props> = ({
  imageSrc,
  title,
  description,
  alt,
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-between p-5 md:flex-row md:p-0 md:even:flex-row-reverse">
      <div className="space-y-6 md:w-1/3">
        <Box className="group">
          <h1 className="text-2xl font-bold tracking-wider text-white md:text-left md:text-4xl">
            {title}
          </h1>
          <div className="hover-underline group-hover:scale-50"></div>
        </Box>
        <p className="text-lg tracking-wider text-gray-500 md:text-xl">
          {description}
        </p>
      </div>
      <div className="transition-transform duration-500 ease-in-out hover:scale-105">
        <Image src={imageSrc} width={400} height={400} alt={alt} />
      </div>
    </div>
  );
};
export default Feature;
