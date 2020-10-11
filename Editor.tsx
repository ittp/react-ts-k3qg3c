import React, {Component} from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header"
import Paragraph from "@editorjs/paragraph"
import List from '@editorjs/list'; 
import Table from '@editorjs/table';
import Personality from "@editorjs/personality"



export default class Editor extends Component {
  render() {
    return editor
  }
}
 


const editor = new EditorJS({ 
  /** 
   * Id of Element that should contain the Editor 
   */ 
  holder: 'editorjs', 
  
  /** 
   * Available Tools list. 
   * Pass Tool's class or Settings object for each Tool you want to use 
   */ 
  tools: { 
    header: Header, 
    list: List,
    table: Table,
    personality: Personality
  }, 
})