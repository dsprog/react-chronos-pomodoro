import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './assets/css/themes.css'
import './assets/css/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Container>
        <Header />
        <App />
        <Footer />
      </Container>
      <Container>dsdas</Container>
    </>
  </StrictMode>,
)