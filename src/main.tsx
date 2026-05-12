import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './assets/css/themes.css'
import './assets/css/global.css'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cicles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import { Footer } from './components/Footer'

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
      <Container>
        <form action="" className='form'>
          <div className="formRow">
            <DefaultInput labelText='meu Input' type='number' id='meuInput' />
          </div>
          <div className="formRow">
            <Cicles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  </StrictMode>,
)