import * as React from 'react';
const { ipcRenderer } = window.require('electron');

import './App.less';

import { Main } from './views'

export default function App() {
  
  return (
    <>
      <div className="App">
        <TitleBar />
      </div>
      <Main />
    </>
  )
}

function TitleBar() {
  const handleMinimize = () => ipcRenderer.send('handleMinimize', [])
  const handleMaximize = () => ipcRenderer.send('handleMaximize', [])
  const handleClose = () => ipcRenderer.send('handleClose', [])

  return (
    <>
      <div className="TitleBar">
        <svg onClick={() => handleMinimize()}xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="white" width="48px" height="48px"><g><rect fill="none" fillRule="evenodd" height="24" width="24"/><g><rect fillRule="evenodd" height="2" width="16" x="4" y="11"/></g></g></svg>
        <svg onClick={() => handleMaximize()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4H4v16h16V4zm-2 14H6V6h12v12z"/></svg>
        <svg onClick={() => handleClose()} className="exit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </div>
    </>
  )
}

