import { Loader } from '@mantine/core';
import React from 'react';

const Editor = React.lazy(() => import('@monaco-editor/react'));

type CodeEditorProps = {
  theme: string;
  language: string;
  onEditorChange: (code: string) => void;
  code: {
    current: string;
  };
};

const CodeEditor: React.FC<CodeEditorProps> = ({
  theme,
  language,
  onEditorChange,
  code,
}) => {
  const handleEditorValueChange = (e: any) => {
    onEditorChange(e);
  };
  return (
    <React.Suspense fallback={<Loader size="xl" />}>
      <Editor
        height="50%"
        width="100%"
        defaultLanguage={language || 'javascript'}
        defaultValue="// Language Construct here"
        theme={theme}
        value={code.current}
        onChange={handleEditorValueChange}
      />
    </React.Suspense>
  );
};
export default CodeEditor;
