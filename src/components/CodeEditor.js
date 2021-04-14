import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function CodeEditor({
  content = '',
  mountID = '',
  onChange = f => f,
  readonly = false,
  mode = 'dockerfile'
}) {
  useEffect(() => {
    const elem = document.querySelector(`#${mountID}`);
    ReactDOM.render(
      <CodeMirror
        value={content}
        options={{
          theme: 'monokai',
          keyMap: 'sublime',
          mode,
          readonly
        }}
        
        onChanges={instance => onChange(instance.getValue())}
      />,
      elem
    );
    return () => {
      ReactDOM.unmountComponentAtNode(elem);
    };
  }, [mountID, onChange, readonly, mode]);
  return React.Fragment;
}