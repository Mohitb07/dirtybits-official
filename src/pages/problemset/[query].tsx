import { Divider, Select, TextInput } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRecoilState } from 'recoil';

import { filterData } from '@/atom/filterData';
import Card from '@/components/Card';
import StyledChip from '@/components/Chip';
import StyledMultiSelect from '@/components/MultiSelect';
import MultiSelectFilter from '@/components/MultiSelect/CustomBody';
import Table from '@/components/Table';
import PageContainer from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';
// Example query
// http://localhost:3000/problemset/all/?status=AC&page=1&topicSlugs=array&difficulty=HARD

const ProblemSet: React.FC = () => {
  const [filterStateData, setFilterStateData] = useRecoilState(filterData);
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      console.log('requesting', router.query);
    }
  }, [router.asPath]);

  const companyTags = [
    'Google',
    'Facebook',
    'Amazon',
    'Microsoft',
    'Apple',
    'Alibaba',
    'Tencent',
    'Twitter',
    'Instagram',
    'Netflix',
    'Spotify',
    'Uber',
    'Lyft',
    'Airbnb',
    'Snapchat',
    'Pinterest',
    'Tumblr',
    'Reddit',
  ];

  const handleSelectChange = (e: any) => {
    setFilterStateData((prev) => ({
      ...prev,
      difficulty: e,
    }));
    const query = e ? { ...router.query, difficulty: e } : {};
    router.push(
      {
        pathname: '/problemset/all/',
        query,
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  const filterStateDataCopy = [filterStateData.difficulty];
  const latestData = [...filterStateDataCopy, ...filterStateData.tags].filter(
    Boolean
  );

  return (
    <>
      <Meta
        title="Problems - DirtyBits"
        description="It's an online coding platform for skill enhancement and students preparing for technical interviews."
      />
      <PageContainer className="h-screen space-y-5 p-5">
        <div className="flex items-center space-x-5 overflow-x-scroll scrollbar-hide">
          <Card
            title="Weekly Contest Result Announced"
            backgroundImageSrc="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0"
            btnText="Check Result"
          />
          <Card
            title="Top Interview Questions"
            backgroundImageSrc="https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?cs=srgb&dl=pexels-dana-tentis-370799.jpg&fm=jpg"
          />
          <Card
            title="Top Microsoft Interview Questions"
            backgroundImageSrc="https://freerangestock.com/sample/138007/tech-abstract-light-background-.jpg"
          />
          <Card
            title="Top Google Interview Questions"
            backgroundImageSrc="https://static.vecteezy.com/system/resources/previews/002/295/413/non_2x/technology-background-for-gears-in-mechanical-concepts-vector.jpg"
          />
        </div>
        <Divider orientation="horizontal" />
        <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-3">
          <div className="flex space-x-3">
            <StyledMultiSelect filterStateData={filterStateData} />
            <Select
              data={['Easy', 'Medium', 'Hard']}
              placeholder="Difficulty"
              onChange={handleSelectChange}
              clearable
              className="flex-1 "
            />
          </div>
          <TextInput
            placeholder="Search questions"
            icon={<AiOutlineSearch />}
          />
        </div>
        <div aria-label="filters" className="flex min-h-[5px] justify-start">
          <StyledChip dataList={latestData} />
        </div>
        <div className="flex flex-col items-start justify-between md:flex-row">
          <Table
            dataList={[
              {
                id: 1,
                title: 'Two Sum',
                difficulty: 'Easy',
                status: 'completed',
              },
              {
                id: 2,
                title: 'Longest substring without repeating characters',
                difficulty: 'Medium',
                status: 'completed',
              },
              {
                id: 3,
                title: 'Median of Two Sorted Arrays',
                difficulty: 'Hard',
                status: 'completed',
              },
            ]}
          />
          <MultiSelectFilter
            filterStateData={filterStateData}
            itemList={companyTags}
            className="md:w-1/4"
            placeholder="Search for tags..."
            title="Companies"
          />
        </div>
      </PageContainer>
    </>
  );
};
export default ProblemSet;
