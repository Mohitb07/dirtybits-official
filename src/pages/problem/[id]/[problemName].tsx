import { useRouter } from 'next/router';
import React from 'react';
import Split from 'react-split';

import LeftPane from '@/components/SplitSection/Left';
import RightPane from '@/components/SplitSection/Right';
import { Meta } from '@/layouts/Meta';

type ProblemProps = {};

const Problem: React.FC<ProblemProps> = () => {
  const router = useRouter();
  const problemName = router.query.problemName as string;
  // const problemId = router.query.id as string;
  return (
    <>
      <Meta
        title={problemName ?? 'Loading...'}
        description="It's an online coding platform for skill enhancement and students preparing for technical interviews."
      />
      <div className="h-screen">
        <Split className="split">
          <LeftPane problemName={problemName} />
          <RightPane />
        </Split>
      </div>
    </>
  );
};
export default Problem;
