// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NoteDisplay  from './components/NoteDisplay'
import MarkdownInput from './components/MarkdownInput'

function App() {
  
  return (
    <>
    <Navbar/>
    <NoteDisplay/>
    <MarkdownInput/>
    </>
  )
}

export default App
