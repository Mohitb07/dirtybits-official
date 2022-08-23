import { ActionIcon, Tooltip } from '@mantine/core';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import { ImDownload } from 'react-icons/im';
import { TbPackgeImport } from 'react-icons/tb';

const Utility: React.FC = () => {
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

      <div className="">Dropdown</div>
    </div>
  );
};
export default Utility;
