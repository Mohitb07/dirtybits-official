import { Button } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineBars,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { VscCollapseAll } from 'react-icons/vsc';

type ProblemTabProps = {
  problemName: string;
};

const ProblemTab: React.FC<ProblemTabProps> = ({ problemName = '' }) => {
  return (
    <div className="space-y-5 tracking-wider transition-all ease-in-out">
      <div className="group  inline-flex items-center gap-2">
        <Link href="/problemset/all" passHref>
          <Button
            className="text-black"
            variant="white"
            radius="xl"
            leftIcon={<AiOutlineBars />}
          >
            Problem Set
          </Button>
        </Link>
      </div>

      <div className="text-lg font-medium text-[#a1acc0]">
        <div className="flex items-center space-x-3">
          <span>1. </span>
          <div>{problemName}</div>
          {/* BOOKMARK */}
          <div
            onClick={() => {}}
            className={`${true ? 'mt-1 block cursor-pointer' : 'hidden'} `}
          >
            {true ? <BsFillBookmarkFill /> : <BsBookmark />}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <p
          className={`inline rounded-xl bg-yellow-600 px-3 py-1 text-sm text-white`}
        >
          Medium
        </p>

        <div
          onClick={() => {}}
          className="flex cursor-pointer items-center space-x-1"
        >
          <p>{true ? <AiFillLike /> : <AiOutlineLike />}</p>
          <p className="text-xs">20</p>
        </div>

        <div
          onClick={() => {}}
          className="flex cursor-pointer items-center space-x-1"
        >
          <p>{true ? <AiFillDislike /> : <AiOutlineDislike />}</p>
          <p className="text-xs">10</p>
        </div>

        <div className="flex items-center space-x-1">
          <p>
            <BiTrendingUp />
          </p>
          <p className="text-xs">Accuracy. 90%</p>
        </div>

        <div className="flex items-center space-x-1">
          <p>
            <VscCollapseAll />
          </p>
          <p className="text-xs">Total Submissions. 20</p>
        </div>
      </div>

      <div>problem statments</div>

      <p>Note: any note</p>
      <h2 className="text-white">Input Format</h2>
      <pre>inputformat</pre>
      <h2 className="text-white">Output Format</h2>
      <pre>output</pre>
      <h2 className="text-white">Constraints:</h2>
      <pre className="pl-5">Contraints</pre>
      <pre>Memory Limit: 30 KB</pre>
      <pre>Time Limit: 1s</pre>
    </div>
  );
};
export default ProblemTab;
