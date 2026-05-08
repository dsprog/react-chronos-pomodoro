import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './assets/css/themes.css'
import './assets/css/global.css'
import { CountDown } from './components/CountDown'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
    </>
  </StrictMode>,
)