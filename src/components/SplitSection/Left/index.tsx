import { Tabs } from '@mantine/core';
import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { TbFileDescription } from 'react-icons/tb';

import ProblemTab from './ProblemTab';

type LeftPaneProps = {
  problemName: string;
};

const LeftPane: React.FC<LeftPaneProps> = ({ problemName = '' }) => {
  return (
    <div className="h-[100vh] overflow-hidden px-5 pt-3">
      <Tabs color="primary.5" radius="md" defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" icon={<TbFileDescription />}>
            Problem
          </Tabs.Tab>
          <Tabs.Tab value="messages" icon={<AiOutlineClockCircle />}>
            Submissions
          </Tabs.Tab>
          <Tabs.Tab value="settings" disabled>
            Solutions
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          <ProblemTab problemName={problemName} />
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          All Submissions
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          All Solutions
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
export default LeftPane;
