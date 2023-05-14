import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Footer, HeaderContainer } from './components'

function App() {

  return (
    <BrowserRouter basename='/'>
      <HeaderContainer/>
      <main className='main'>
        <Routes>
          <Route />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
