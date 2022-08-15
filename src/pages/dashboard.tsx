import React from 'react';

import PageContainer from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';

const Dashboard: React.FC = () => {
  return (
    <>
      <Meta
        title="DirtyBits - Dashboard"
        description="It's an online coding platform for skill enhancement and students preparing for technical interviews."
      />
      <PageContainer>
        <div className="text-4xl text-white">Dashboard</div>
      </PageContainer>
    </>
  );
};
export default Dashboard;
