import React, { useEffect, useState } from 'react';

import PageContainer from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';

// Example query
// http://localhost:3000/problemset/all/?status=AC&page=1&topicSlugs=array&difficulty=HARD

const ProblemSet: React.FC = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data) {
    return (
      <>
        <Meta
          title="Loading..."
          description="It's an online coding platform for skill enhancement and students preparing for technical interviews."
        />
        <PageContainer>
          <div className="text-4xl text-white">Loading...</div>
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <Meta
        title="Problems - DirtyBits"
        description="It's an online coding platform for skill enhancement and students preparing for technical interviews."
      />
      <PageContainer>
        <div className="text-green-500">Have a good coding</div>
        <p>{JSON.stringify(data, null, 2)}</p>
      </PageContainer>
    </>
  );
};
export default ProblemSet;
