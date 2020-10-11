import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Table from '@editorjs/table';
import Personality from '@editorjs/personality'
import { Table } from "@buffetjs/core"

import './style.scss';

function EditorTools() {
  
}
const myTool = {

}

interface AppProps { 
  prop1: 123
}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    const Editor = new EditorJS({
      autofocus: true,
      holder: 'editorjs',
      tools: {
        header: Header,
        paragraph: Paragraph,
        table: Table,
        personality: Personality
      }
    })
    return (
      <div>
          <div id="editorjs" className="editorjs" >     
        </div>
        
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
