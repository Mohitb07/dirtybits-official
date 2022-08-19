import { Pagination } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';

import TableHeading from './Heading';
import Row from './Row';

export interface Problem {
  id: number;
  title: string;
  difficulty: string;
  status: string;
}

type TableProps = {
  dataList: Problem[];
};

const Table: React.FC<TableProps> = ({ dataList }) => {
  const router = useRouter();
  return (
    <div className="w-full lg:w-2/3">
      <div className="mb-10 overflow-x-scroll rounded-md bg-slate-800 px-2 shadow-md scrollbar-hide md:px-0">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <TableHeading headingTitle="Problem title" />
              <TableHeading headingTitle="Difficulty" />
              <TableHeading headingTitle="Status" />
            </tr>
          </thead>
          <tbody>
            {dataList.map((problem) => (
              <Row
                difficulty={problem.difficulty}
                problemId={problem.id}
                problemTitle={problem.title}
                status={problem.status}
                key={problem.id}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="hidden justify-center md:flex">
        <Pagination
          total={2}
          radius="md"
          color="violet"
          onChange={(e) =>
            router.push(
              {
                pathname: '/problemset/all/',
                query: {
                  ...router.query,
                  page: e,
                },
              },
              undefined,
              {
                shallow: true,
              }
            )
          }
        />
      </div>
    </div>
  );
};
export default Table;
