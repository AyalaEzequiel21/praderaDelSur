import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Footer, HeaderContainer } from './components'
import GlobalContext from './context/GlobalContext'

function App() {

  return (
    <BrowserRouter basename='/'>
      <GlobalContext>
        <HeaderContainer/>
        <main className='main'>
          <Routes>
            <Route />
          </Routes>
        </main>
        <Footer/>
      </GlobalContext>
    </BrowserRouter>
  )
}

export default App
