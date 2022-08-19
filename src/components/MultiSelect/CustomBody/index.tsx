import { Chip, Divider, TextInput } from '@mantine/core';
import { useRouter } from 'next/router';
import type { MouseEvent } from 'react';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSetRecoilState } from 'recoil';

import type { IFilterData } from '@/atom/filterData';
import { filterData } from '@/atom/filterData';

type MultiSelectFilterProps = {
  filterStateData: IFilterData;
  className?: string;
  itemList: string[];
  title: string;
  placeholder: string;
};

const MultiSelectFilter: React.FC<MultiSelectFilterProps> = ({
  filterStateData,
  className,
  itemList,
  title = '',
  placeholder = '',
}) => {
  const router = useRouter();
  const setFilterStateData = useSetRecoilState(filterData);

  const itemClick = (
    e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => {
    const { value } = e.target as HTMLInputElement;
    if (filterStateData.tags.includes(value)) {
      setFilterStateData((prev) => ({
        ...prev,
        tags: prev.tags.filter((tag) => tag !== value),
      }));
      const tagValue = router.query.tag as string;
      const filteredString = tagValue!
        .split('&')
        .filter((tag: string) => tag !== value)
        .join('&');
      router.push(
        {
          pathname: '/problemset/all/',
          query: {
            ...router.query,
            tag: filteredString,
          },
        },
        undefined,
        { shallow: true }
      );
    } else {
      setFilterStateData((prev) => ({
        ...prev,
        tags: [...prev.tags, value],
      }));
      router.push(
        {
          pathname: '/problemset/all/',
          query: {
            ...router.query,
            tag: router.query?.tag
              ? router.query.tag.concat(`&${value}`)
              : value,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <div className={className}>
      <div className="p-3">
        <TextInput
          variant="filled"
          icon={<AiOutlineSearch />}
          placeholder={placeholder}
        />
      </div>
      <Divider orientation="horizontal" />
      <div className="space-y-1 px-3 py-1">
        <h4>{title}</h4>
        <Chip.Group position="left" multiple>
          {itemList.map((item) => (
            <Chip
              key={item}
              size="xs"
              color="violet"
              variant="filled"
              radius="lg"
              value={item.toLowerCase()}
              checked={Boolean(
                filterStateData.tags.includes(item.toLowerCase())
              )}
              onClick={itemClick}
            >
              {item}
            </Chip>
          ))}
        </Chip.Group>
      </div>
    </div>
  );
};
export default MultiSelectFilter;
