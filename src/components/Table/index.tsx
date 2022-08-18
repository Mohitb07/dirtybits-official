import { Pagination } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import TickIcon from '@/SVG';

type TableProps = {};

const Table: React.FC<TableProps> = () => {
  const router = useRouter();
  return (
    <div className="w-full lg:w-2/3">
      <div className="mb-10 overflow-x-scroll rounded-md bg-slate-800 shadow-md scrollbar-hide">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="table-heading">Problem title</th>
              <th className="table-heading">Difficulty</th>
              <th className="table-heading">Status</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="table-data border-b border-slate-800 text-white">
                <Link href="/">
                  <a className="tracking-wide text-stone-200 no-underline transition-all duration-200 ease-in hover:text-indigo-400 md:text-sm">
                    1. Two Sum
                  </a>
                </Link>
              </td>
              <td className="table-data border-b border-slate-800 py-4 px-6">
                <p
                  className={`rounded py-1 px-3 text-xs font-light tracking-wider text-yellow-400`}
                >
                  Easy
                </p>
              </td>
              <td className="table-data cursor-default border-b border-slate-800 text-lg">
                <span
                  className={`px-3  font-light tracking-wider text-yellow-400`}
                >
                  <TickIcon />
                </span>
              </td>
            </tr>
            <tr className="text-ellipsis">
              <td className="table-data max-w-[302px] border-b border-slate-800 text-white">
                <div className="overflow-hidden">
                  <div className="flex items-center">
                    <div className="overflow-hidden truncate">
                      <Link href="/">
                        <a className=" tracking-wide text-stone-200 no-underline transition-all duration-200 ease-in hover:text-indigo-400 md:text-sm">
                          2. Longest substring without repeating characters
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </td>
              <td className="table-data border-b border-slate-800 py-4 px-6">
                <p
                  className={`rounded py-1 px-3 text-xs font-light tracking-wider text-yellow-400`}
                >
                  Easy
                </p>
              </td>
              <td className="table-data cursor-default border-b border-slate-800 text-lg">
                <span
                  className={`px-3  font-light tracking-wider text-yellow-400`}
                >
                  <TickIcon />
                </span>
              </td>
            </tr>

            <tr className="text-ellipsis">
              <td className="table-data max-w-[302px] border-b border-slate-800 text-white">
                <div className="overflow-hidden">
                  <div className="flex items-center">
                    <div className="overflow-hidden truncate">
                      <Link href="/">
                        <a className=" tracking-wide text-stone-200 no-underline transition-all duration-200 ease-in hover:text-indigo-400 md:text-sm">
                          2. Longest substring without repeating characters
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </td>
              <td className="table-data border-b border-slate-800 py-4 px-6">
                <p
                  className={`rounded py-1 px-3 text-xs font-light tracking-wider text-yellow-400`}
                >
                  Easy
                </p>
              </td>
              <td className="table-data cursor-default border-b border-slate-800 text-lg">
                <span
                  className={`px-3  font-light tracking-wider text-yellow-400`}
                >
                  <TickIcon />
                </span>
              </td>
            </tr>

            <tr className="text-ellipsis">
              <td className="table-data max-w-[302px] border-b border-slate-800 text-white">
                <div className="overflow-hidden">
                  <div className="flex items-center">
                    <div className="overflow-hidden truncate">
                      <Link href="/">
                        <a className=" tracking-wide text-stone-200 no-underline transition-all duration-200 ease-in hover:text-indigo-400 md:text-sm">
                          2. Longest substring without repeating characters
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </td>
              <td className="table-data border-b border-slate-800 py-4 px-6">
                <p
                  className={`rounded py-1 px-3 text-xs font-light tracking-wider text-yellow-400`}
                >
                  Easy
                </p>
              </td>
              <td className="table-data cursor-default border-b border-slate-800 text-lg">
                <span
                  className={`px-3  font-light tracking-wider text-yellow-400`}
                >
                  <TickIcon />
                </span>
              </td>
            </tr>

            <tr className="text-ellipsis">
              <td className="table-data max-w-[302px] border-b border-slate-800 text-white">
                <div className="overflow-hidden">
                  <div className="flex items-center">
                    <div className="overflow-hidden truncate">
                      <Link href="/">
                        <a className=" tracking-wide text-stone-200 no-underline transition-all duration-200 ease-in hover:text-indigo-400 md:text-sm">
                          2. Longest substring without repeating characters
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </td>
              <td className="table-data border-b border-slate-800 py-4 px-6">
                <p
                  className={`rounded py-1 px-3 text-xs font-light tracking-wider text-yellow-400`}
                >
                  Easy
                </p>
              </td>
              <td className="table-data cursor-default border-b border-slate-800 text-lg">
                <span className={`px-3  font-light tracking-wider`}>
                  <TickIcon />
                </span>
              </td>
            </tr>
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
