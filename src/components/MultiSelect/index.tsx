import { Button, Chip, Divider, Menu, TextInput } from '@mantine/core';
import { useRouter } from 'next/router';
import type { MouseEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { useRecoilState } from 'recoil';

import { filterData } from '@/atom/filterData';

function Demo() {
  const router = useRouter();
  const [filterStateData, setFilterStateData] = useRecoilState(filterData);

  const itemClick = (
    e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => {
    const { value } = e.target as HTMLInputElement;
    if (filterStateData.tags.includes(value)) {
      setFilterStateData((prev) => ({
        ...prev,
        tags: prev.tags.filter((tag) => tag !== value),
      }));
    } else {
      setFilterStateData((prev) => ({
        ...prev,
        tags: [...prev.tags, value],
      }));
    }
    router.push(
      {
        pathname: '/problemset/all/',
        query: {
          ...router.query,
          tag: value,
        },
      },
      undefined,
      { shallow: true }
    );
  };
  return (
    <Menu shadow="md" width={450} offset={15} position="bottom-start" withArrow>
      <Menu.Target>
        <Button variant="default" rightIcon={<BsChevronDown />}>
          <span className="text-[#B6C1C4]">Tags</span>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <div className="p-3">
          <TextInput
            variant="filled"
            icon={<AiOutlineSearch />}
            placeholder="Filter topics"
          />
        </div>
        <Divider orientation="horizontal" />
        <div className="space-y-1 px-3 py-1">
          <Menu.Item disabled>Topics</Menu.Item>
          <Chip.Group position="left" multiple>
            <Chip
              size="xs"
              color="violet"
              variant="filled"
              radius="lg"
              value="arrays"
              checked={Boolean(filterStateData.tags.includes('arrays'))}
              onClick={itemClick}
            >
              Arrays
            </Chip>
            <Chip
              size="xs"
              color="violet"
              variant="filled"
              radius="lg"
              value="string"
              checked={Boolean(filterStateData.tags.includes('string'))}
              onClick={itemClick}
            >
              Strings
            </Chip>
            <Chip
              size="xs"
              color="violet"
              variant="filled"
              radius="lg"
              value="linkedlist"
              checked={Boolean(filterStateData.tags.includes('linkedlist'))}
              onClick={itemClick}
            >
              Linked-List
            </Chip>
            <Chip
              size="xs"
              color="violet"
              variant="filled"
              radius="lg"
              value="hashtable"
              checked={Boolean(filterStateData.tags.includes('hashtable'))}
              onClick={itemClick}
            >
              Hash Table
            </Chip>
          </Chip.Group>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Demo;
