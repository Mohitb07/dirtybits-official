import { ActionIcon, Avatar, Menu, Tooltip } from '@mantine/core';
import React, { useContext } from 'react';
import { AiOutlineCloudUpload, AiOutlineCodeSandbox } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import { ImDownload } from 'react-icons/im';
import { MdLogout } from 'react-icons/md';
import { TbPackgeImport } from 'react-icons/tb';

import { AuthUserContext } from '@/context/authUser';

const Utility: React.FC = () => {
  const { authUser: user, loading } = useContext(AuthUserContext);
  return (
    <div className="mt-5 flex flex-1 items-center justify-center space-x-4 transition-all ease-in-out md:justify-end">
      <Tooltip label="Upload Code to cloud" color="primary.5">
        <ActionIcon>
          <AiOutlineCloudUpload size={20} />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Import File" color="primary.5">
        <ActionIcon>
          <label htmlFor="file-input">
            <TbPackgeImport size={20} className="cursor-pointer" />
          </label>
          <input
            type="file"
            accept=".cpp, .c, .py, .java"
            id="file-input"
            onChange={() => {}}
            className="hidden "
          />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Download Code" color="primary.5">
        <ActionIcon>
          <ImDownload size={20} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Reset Code" color="primary.5">
        <ActionIcon>
          <GiAnticlockwiseRotation size={20} />
        </ActionIcon>
      </Tooltip>

      {!loading && user && (
        <div className="hover:cursor-pointer">
          <Menu shadow="md" width={200} position="bottom-end">
            <Menu.Target>
              <Avatar
                radius="lg"
                size="lg"
                color="violet"
                src={user ? user.photoURL : ''}
              >
                {user && user.displayName && user.displayName[0]}
              </Avatar>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<BiUser size={16} />}>Profile</Menu.Item>
              <Menu.Item icon={<AiOutlineCodeSandbox size={16} />}>
                Add Problem
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item color="red" icon={<MdLogout size={16} />}>
                Log Out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      )}
    </div>
  );
};
export default Utility;
