import Link from 'next/link';
import React from 'react';

import { TickIcon } from '@/SVG';

type RowProps = {
  problemId: number;
  problemTitle: string;
  difficulty: string;
  status: string;
};

const Row: React.FC<RowProps> = ({
  problemId,
  problemTitle,
  difficulty,
  status,
}) => {
  let difficultyColor;
  let statusSVG;
  switch (status) {
    case 'completed':
      statusSVG = <TickIcon />;
      break;
    case 'attempted':
      statusSVG = <TickIcon />;
      break;
    case 'not attempted':
      statusSVG = <TickIcon />;
      break;
    default:
      throw new Error(`Unknown status: ${status}`);
  }
  switch (difficulty) {
    case 'Easy':
      difficultyColor = 'text-green-500';
      break;
    case 'Medium':
      difficultyColor = 'text-yellow-500';
      break;
    case 'Hard':
      difficultyColor = 'text-red-500';
      break;
    default:
      throw new Error(`Unknown status: ${status}`);
  }
  return (
    <tr>
      <td className="table-data border-b border-slate-800 text-white">
        <Link
          key={problemId}
          href={{
            pathname: `/problem/${problemId}/${problemTitle}`,
          }}
        >
          <a className="tracking-wide text-stone-200 no-underline transition-all duration-200 ease-in hover:text-indigo-400 md:text-sm">
            {problemId}. {problemTitle}
          </a>
        </Link>
      </td>
      <td className="table-data py-4 px-6">
        <p
          className={`rounded py-1 px-3 text-xs font-bold tracking-wider ${difficultyColor}`}
        >
          {difficulty}
        </p>
      </td>
      <td className="table-data cursor-default border-b border-slate-800 text-lg">
        <span className={`px-3  font-light tracking-wider`}>{statusSVG}</span>
      </td>
    </tr>
  );
};
export default Row;
