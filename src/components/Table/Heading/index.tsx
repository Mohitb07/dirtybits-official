import React from 'react';

type TableHeadingProps = {
  headingTitle: string;
};

const TableHeading: React.FC<TableHeadingProps> = ({ headingTitle }) => (
  <th className="table-heading">{headingTitle}</th>
);

export default TableHeading;
