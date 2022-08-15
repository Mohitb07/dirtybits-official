import { Text } from '@mantine/core';
import React from 'react';

import PageContainer from '@/layouts/Container';

import feature1 from '../../../public/Saly-2.png';
import feature2 from '../../../public/Saly-3.png';
import feature3 from '../../../public/Saly-4.png';
import Feature from './Feature';

const index: React.FC = () => {
  return (
    <div className="glass h-full w-full space-y-14">
      <Text color="white" align="center" className="text-[30px] md:text-[50px]">
        Some of Our Features
      </Text>
      <PageContainer className="space-y-10">
        <Feature
          title="Top Quality Questions"
          description="Join the community of top-quality questions if you are preparing for product-based companies."
          imageSrc={feature1}
          alt="feature1"
        />
        <Feature
          title="Personalized Learning"
          description="Get personalized learning from the best resources on the internet."
          imageSrc={feature2}
          alt="feature1"
        />
        <Feature
          title="Contributions"
          description="Contribute to the community by adding your own problems and solutions to the platform. And help us to grow the community."
          imageSrc={feature3}
          alt="feature1"
        />
      </PageContainer>
    </div>
  );
};
export default index;
