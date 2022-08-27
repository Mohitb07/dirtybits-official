import { Tab } from '@headlessui/react';
import { Text, Textarea } from '@mantine/core';
import { FcServices } from 'react-icons/fc';

type MyTabsProps = {
  selectedIndex: number;
  onChange: (index: number) => void;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function MyTabs({ selectedIndex, onChange }: MyTabsProps) {
  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={onChange}>
      <Tab.List className="flex w-2/3 space-x-2 rounded-xl">
        <Tab
          className={({ selected }) =>
            classNames(
              'w-1/6 rounded-lg py-2.5 text-sm font-bold leading-5 border-none',
              selected
                ? 'bg-white shadow text-black'
                : 'text-white bg-white/[0.12] hover:text-white'
            )
          }
        >
          Input
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-1/6 rounded-lg py-2.5 text-sm font-bold leading-5 border-none',
              selected
                ? 'bg-white shadow text-black'
                : 'text-white bg-white/[0.12] hover:text-white '
            )
          }
        >
          Output
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel className={classNames('rounded-xl')}>
          <Textarea
            placeholder="Custom Input"
            autosize
            minRows={5}
            radius="md"
          />
        </Tab.Panel>
        <Tab.Panel className={classNames('rounded-xl')}>
          <ul>
            <li className="relative rounded-md p-3">
              <div className="flex items-center justify-center space-x-3">
                <FcServices size={40} />
                <Text size="xl" weight="bold">
                  You must run your code first
                </Text>
              </div>
            </li>
          </ul>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MyTabs;
