import { Button, Group, Input, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import PageContainer from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  return (
    <>
      <Meta
        title="DirtyBits - SignUp"
        description="It's an online coding platform for skill enhancement and students preparing for technical interviews."
      />
      <PageContainer className="flex items-center justify-center">
        <div className="space-y-5 bg-gray-900  p-5 md:w-1/3">
          <h1>Sign Up</h1>
          <Input.Wrapper label="Username" required>
            <Input placeholder="Username" />
          </Input.Wrapper>
          <Input.Wrapper label="Firstname" required>
            <Input placeholder="Firstname" />
          </Input.Wrapper>
          <Input.Wrapper label="Lastname" required>
            <Input placeholder="Lastname" />
          </Input.Wrapper>
          <Input.Wrapper label="Email" required>
            <Input placeholder="E-mail address" />
          </Input.Wrapper>
          <Input.Wrapper label="Password" required>
            <Input placeholder="Password" />
          </Input.Wrapper>
          <Input.Wrapper label="Confirm Password" required>
            <Input placeholder="Confirm Password" />
          </Input.Wrapper>
          <Button loading={false} fullWidth>
            Sign Up
          </Button>

          <Group position="center">
            <Text align="center" size="xs">
              Already have an account?
            </Text>
            <Link href="/auth/login" passHref>
              <Text
                size="xs"
                color="primary.3"
                weight="bold"
                className="cursor-pointer"
              >
                Sign In
              </Text>
            </Link>
          </Group>
        </div>
      </PageContainer>
    </>
  );
};
export default SignUp;
