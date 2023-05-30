import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { Footer, HeaderContainer, Splash } from './components'
import GlobalContext from './context/GlobalContext'
import { MainLayoutStyle } from './styled-components'
import { Contact, Home } from './pages'

function App() {

  return (
    <BrowserRouter basename='/'>
      <GlobalContext>
        <HeaderContainer/>
        <MainLayoutStyle>
          <Splash/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </MainLayoutStyle>
        <Footer/>
      </GlobalContext>
    </BrowserRouter>
  )
}

export default App
