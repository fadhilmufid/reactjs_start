
import React from 'react';
import "./styles.css"


import { createReactEditorJS } from 'react-editor-js'

import { EDITOR_JS_TOOLS } from './constants'

const ReactEditorJS = createReactEditorJS()


function Editor() {
    return (
      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}  

      />
    )
  }


export default Editor;