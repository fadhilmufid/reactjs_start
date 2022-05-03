
import React from 'react';
import "./styles.css"


import { createReactEditorJS } from 'react-editor-js'

import { EDITOR_JS_TOOLS } from './constants'

const ReactEditorJS = createReactEditorJS()


function Editor() {
    return (
      
    <div>
      <div className="main__title">
          <div className="main__greeting">
            <h1>Create File</h1>
            <p>Test File</p>
          </div>
        </div>
      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}   
      />
    </div>
    );
  }


export default Editor;