import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import Select from 'react-select';

import { languageOptions } from '@/constants/languageOptions';
import { customStyles } from '@/utils/customStyle';

type LanguageDropdownProps = {
  onSelectChange: (lang: any) => void;
};

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  onSelectChange,
}) => {
  return (
    <div>
      <label className="text-sm font-semibold text-[#C1C2C0]">Language</label>
      <Select
        components={{
          DropdownIndicator: () => <HiChevronDown size={18} className="mr-2" />,
          IndicatorSeparator: () => null,
        }}
        placeholder="Language"
        options={languageOptions}
        styles={customStyles}
        defaultValue={languageOptions[0]}
        onChange={(selectedOption) => onSelectChange(selectedOption)}
      />
    </div>
  );
};
export default LanguageDropdown;
