import { Button, Container, Divider, Group, List } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

// import logo from '@/public/logo.png';

const Index: React.FC = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('nav');
      header?.classList.toggle('nav-scrolled', window.scrollY > 0);
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex h-[3.9rem] items-center">
      <Container size="xl" className="flex-1">
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
              <div className="group cursor-pointer tracking-wide">
                <List.Item>Problems</List.Item>
                <div className="hover-underline"></div>
              </div>
              <div className="group cursor-pointer tracking-wide">
                <List.Item>Compete</List.Item>
                <div className="hover-underline"></div>
              </div>
              <div className="group cursor-pointer tracking-wide">
                <List.Item>Dashboard</List.Item>
                <div className="hover-underline"></div>
              </div>
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
      </Container>
    </nav>
  );
};
export default Index;
