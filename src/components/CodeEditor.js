import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function CodeEditor({
  content = '',
  mountID = '',
  onChange = f => f
}) {
  useEffect(() => {
    const elem = document.querySelector(`#${mountID}`);
    ReactDOM.render(
      <CodeMirror
        value={content}
        options={{
          theme: 'monokai',
          keyMap: 'sublime',
          mode: 'dockerfile',
        }}
        onChanges={instance => onChange(instance.getValue())}
      />,
      elem
    );
    return () => {
      ReactDOM.unmountComponentAtNode(elem);
    };
  }, [mountID, onChange]);
  return React.Fragment;
}