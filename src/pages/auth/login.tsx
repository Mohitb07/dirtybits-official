import { Button, Checkbox, Group, Input, Text, TextInput } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import PageContainer from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  return (
    <>
      <Meta
        title="DirtyBits - Login"
        description="It's an online coding platform for skill enhancement and students preparing for technical interviews."
      />
      <PageContainer className="flex items-center justify-center">
        <div className="space-y-5 bg-gray-900  p-5 md:w-1/3">
          <h1>Login</h1>
          <Input.Wrapper label="Email" required error="">
            <TextInput
              placeholder="Enter your username or email"
              error={false}
            />
          </Input.Wrapper>
          <Input.Wrapper label="Password" required error="">
            <TextInput placeholder="Password" />
          </Input.Wrapper>
          <Group position="apart">
            <Checkbox label="Remember me" />
            <Link href="/forgot-password">
              <span className="text-sm text-white"> Forgot password?</span>
            </Link>
          </Group>
          <Button loading={false} fullWidth>
            Login
          </Button>
          <Group position="center">
            <Text align="center" size="xs">
              Don&apos; t have an account?
            </Text>
            <Link href="/auth/signup" passHref>
              <Text
                size="xs"
                color="primary.3"
                weight="bold"
                className="cursor-pointer"
              >
                Sign Up
              </Text>
            </Link>
          </Group>
        </div>
      </PageContainer>
    </>
  );
};
export default Login;
