import { Button } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

import CodeEditor from '@/components/CodeEditor';
import { languageOptions } from '@/constants/languageOptions';
import { defineTheme } from '@/utils/defineTheme';

import LanguageDropdown from './Language';
import ThemeDropdown from './Theme';
import Utility from './Utilities';

type RightPaneProps = {};

export interface IEditorTheme {
  value: string;
  label: string;
}

const RightPane: React.FC<RightPaneProps> = () => {
  const [theme, setTheme] = React.useState<IEditorTheme>({
    value: '',
    label: '',
  });
  const codeValue = useRef('');

  const onEditorChange = (code: any) => {
    codeValue.current = code;
  };

  const [language, setLanguage] = useState(languageOptions[0]);

  const onSelectChange = (lang: any) => {
    console.log('selected Option...', lang);
    setLanguage(lang);
  };

  useEffect(() => {
    defineTheme('night-owl').then((_) =>
      setTheme({ value: 'night-owl', label: 'night-owl' })
    );
  }, []);

  const themeChangeHandler = (e: any) => {
    defineTheme(e).then((_) => {
      setTheme({ value: e, label: e });
    });
  };

  return (
    <div className="h-[100vh] p-5">
      <div className="mb-10 flex flex-wrap items-center justify-center gap-5 md:gap-10">
        <LanguageDropdown onSelectChange={onSelectChange} />
        <ThemeDropdown onThemeChange={themeChangeHandler} theme={theme.value} />
        <Utility />
      </div>
      <CodeEditor
        theme={theme.value}
        language={language?.value!}
        onEditorChange={onEditorChange}
        code={codeValue}
      />
      <div className="my-10 flex items-center justify-end space-x-3">
        <div className="btnRing p-1">
          <Button variant="white" className=" text-black" radius="xl" size="md">
            Run
          </Button>
        </div>
        <div className="btnRing p-1">
          <Button variant="white" className=" text-black" radius="xl" size="md">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default RightPane;
