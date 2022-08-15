import { Container } from '@mantine/core';
import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const PageContainer: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <Container size="xl" className={className}>
      {children}
    </Container>
  );
};
export default PageContainer;
