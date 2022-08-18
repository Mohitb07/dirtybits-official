import { Button, Menu } from '@mantine/core';
import { BsChevronDown } from 'react-icons/bs';

import type { IFilterData } from '@/atom/filterData';

import MultiSelectFilter from './CustomBody';

function Demo({ filterStateData }: { filterStateData: IFilterData }) {
  const itemList = [
    'Arrays',
    'Strings',
    'Linked-List',
    'Recursion',
    'Backtracking',
    'Trees',
    'Hash Table',
  ];
  return (
    <Menu shadow="md" offset={15} position="bottom-start">
      <Menu.Target>
        <Button variant="default" rightIcon={<BsChevronDown />}>
          <span className="text-[#B6C1C4]">Tags</span>
        </Button>
      </Menu.Target>

      <Menu.Dropdown className="overflow-hidden">
        <MultiSelectFilter
          filterStateData={filterStateData}
          itemList={itemList}
          className="w-[300px] md:w-[400px]"
          title="Topics"
          placeholder="Filter topics"
        />
      </Menu.Dropdown>
    </Menu>
  );
}

export default Demo;
