import React from 'react';

import PageContainer from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';

// Example query
// http://localhost:3000/problemset/all/?status=AC&page=1&topicSlugs=array&difficulty=HARD

const ProblemSet: React.FC = () => {
  return (
    <>
      <Meta
        title="Problems - DirtyBits"
        description="It's an online coding platform for skill enhancement and students preparing for technical interviews."
      />
      <PageContainer>
        <div className="text-4xl text-white">Have a good coding</div>
      </PageContainer>
    </>
  );
};
export default ProblemSet;
