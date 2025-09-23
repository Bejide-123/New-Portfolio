import React from 'react'
import './index.css'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import FadeInSection from './Components/FadeInSection'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div>
      <Home />
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
    </div>
  )
}

export default App
