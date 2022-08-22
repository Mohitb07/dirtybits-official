import Editor from '@monaco-editor/react';
import React from 'react';

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
  // const [code, setCode] = React.useState('');
  // const code = useRef(code);

  const handleEditorValueChange = (e: any) => {
    onEditorChange(e);
  };
  console.log('editor render');

  return (
    <Editor
      height="50%"
      width="100%"
      defaultLanguage={language || 'javascript'}
      defaultValue="// Language Construct here"
      theme={theme}
      value={code.current}
      onChange={handleEditorValueChange}
    />
  );
};
export default CodeEditor;
