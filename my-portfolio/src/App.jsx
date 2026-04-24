import { useEffect } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Experience from './components/sections/Experience.jsx'
import Contact from './components/sections/Contact.jsx'
import { initEmailJS } from './utils/emailService.js'
import useTheme from './hooks/useTheme.js'

const globalAnimations = `
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
}

@keyframes scrollDot {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
}
`

function App() {
  const [dark, toggleDark] = useTheme()

  useEffect(() => {
    initEmailJS()
  }, [])

  return (
    <div
      style={{
        background: dark ? '#0a0a14' : '#efefef',
        minHeight: '100vh',
        color: dark ? '#eef0ff' : '#111427',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <style>{globalAnimations}</style>

      <Navbar dark={dark} toggleDark={toggleDark} />
      <Hero dark={dark} />
      <About dark={dark} />
      <Skills dark={dark} />
      <Projects dark={dark} />
      <Experience dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  )
}

export default App
