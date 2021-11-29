import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2-react-17";

export default function Editor({ language, displayName, value, onChange }) {
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor-container ${!open && "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen((prevopen) => !prevopen)}>o/c</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          mode: language,
          lint: true,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}
