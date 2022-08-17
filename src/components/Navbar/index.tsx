import {
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  List,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import PageContainer from '@/layouts/Container';

// import logo from '@/public/logo.png';
type Props = {
  isHome?: boolean;
  activeNav?: string;
};

const Index: React.FC<Props> = ({ isHome = false, activeNav = '' }: Props) => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('nav');
      header?.classList.toggle('nav-scrolled', window.scrollY > 0);
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  const isActiveIndex =
    'underline decoration-[#6366F1] decoration-2 underline-offset-[40%]';

  return (
    <nav
      className={`${
        isHome && 'fixed'
      } top-0 z-50 flex h-[3.9rem] w-full items-center`}
    >
      <PageContainer className="hidden flex-1 md:block">
        <Group>
          <Link href="/" passHref>
            <Image
              className="cursor-pointer"
              height={40}
              width={120}
              src="/logo.png"
              alt="Logo"
            />
          </Link>
          <div className="mt-1 flex flex-1 items-center justify-between p-4">
            <List className="flex space-x-8 text-white ">
              <Link href="/problemset/all" passHref>
                <div
                  className={`group cursor-pointer tracking-wide ${
                    activeNav.includes('/problemset') && isActiveIndex
                  }`}
                >
                  <List.Item>Problems</List.Item>
                  <div className="hover-underline underline"></div>
                </div>
              </Link>
              <Link href="/compete" passHref>
                <div
                  className={`group cursor-pointer tracking-wide ${
                    activeNav.includes('/compete') && isActiveIndex
                  }`}
                >
                  <List.Item>Compete</List.Item>
                  <div className="hover-underline"></div>
                </div>
              </Link>
              <Link href="/dashboard" passHref>
                <div
                  className={`group cursor-pointer tracking-wide ${
                    activeNav.includes('/dashboard') && isActiveIndex
                  }`}
                >
                  <List.Item>Dashboard</List.Item>
                  <div className="hover-underline"></div>
                </div>
              </Link>
            </List>
            <div className="flex items-center space-x-3">
              <Button variant="subtle" radius="xl" size="sm">
                Sign Up
              </Button>
              <Divider
                orientation="vertical"
                color="gray"
                size="xs"
                className="mt-2 h-7"
              />
              <Button variant="white" radius="xl" size="sm">
                Log In
              </Button>
            </div>
          </div>
        </Group>
      </PageContainer>
      <Container className="flex-1 items-center md:hidden">
        <Group className="flex justify-between">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
          <Link href="/" passHref>
            <Image
              className="cursor-pointer"
              height={40}
              width={120}
              src="/logo.png"
              alt="Logo"
            />
          </Link>
          <Button variant="white" radius="xl" size="xs">
            Log In
          </Button>
        </Group>
      </Container>
      <Drawer
        aria-labelledby="nav-drawer"
        aria-describedby="drawer-item-list"
        closeButtonLabel="Close drawer"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Mohit Singh Bisht"
        padding="xl"
        size="md"
        overlayBlur={3}
      >
        <List className="mt-10 flex flex-col space-y-10 text-white">
          <Link href="/problemset/all" passHref>
            <div
              className={`group cursor-pointer tracking-wide ${
                activeNav.includes('/problemset') && isActiveIndex
              }`}
            >
              <List.Item>Problems</List.Item>
              <div className="hover-underline underline"></div>
            </div>
          </Link>
          <Link href="/compete" passHref>
            <div
              className={`group cursor-pointer tracking-wide ${
                activeNav.includes('/compete') && isActiveIndex
              }`}
            >
              <List.Item>Compete</List.Item>
              <div className="hover-underline"></div>
            </div>
          </Link>
          <Link href="/dashboard" passHref>
            <div
              className={`group cursor-pointer tracking-wide ${
                activeNav.includes('/dashboard') && isActiveIndex
              }`}
            >
              <List.Item>Dashboard</List.Item>
              <div className="hover-underline"></div>
            </div>
          </Link>
        </List>
      </Drawer>
    </nav>
  );
};
export default Index;
