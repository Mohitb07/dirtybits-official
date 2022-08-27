import { Burger, Button, Container, Drawer, Group, List } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type MobileNavbarProps = {
  activeNav?: string;
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({ activeNav = '' }) => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  const isActiveIndex =
    'underline decoration-[#6366F1] decoration-2 underline-offset-[40%]';

  return (
    <div>
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
              src={require('../../../../public/logo.png')}
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
    </div>
  );
};
export default MobileNavbar;
