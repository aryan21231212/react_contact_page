import React from 'react'
import Nav from './components/navigation/Nav'
import Contact from './components/navigation/ContactHeader/Contact'
import { Button } from './components/navigation/button/Button'
import Section from './components/navigation/section/Section'


const App = () => {
  
  return (
    <>
    <Nav></Nav>
    <Contact></Contact>
    <Section></Section>
    </>
  )
}

export default App