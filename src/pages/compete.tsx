import React from 'react';

import PageContainer from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';

const Compete: React.FC = () => {
  return (
    <>
      <Meta
        title="DirtyBits - Compete"
        description="It's an online coding platform for skill enhancement and students preparing for technical interviews."
      />
      <PageContainer>
        <div className="text-4xl text-white">Compete</div>
      </PageContainer>
    </>
  );
};
export default Compete;
