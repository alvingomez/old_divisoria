import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'
// import data from './data';

function App() {   

  return (
    <BrowserRouter>
    <div className='d-flex flex-column site-container' >
      <header>
        {/* Using React Bootstrap component to create navbar in the header */}
        <Navbar>
          {/* Used to center on page or add one within to center contents of 
              of a fixed or static top navbar  */}
          <Container>
              {/* This is a react-router-bootstrap component.
                  Install separately from react-bootstrap */}
              <LinkContainer to="/" >
                <Navbar.Brand>Amazon</Navbar.Brand>
              </LinkContainer>
          </Container>          
        </Navbar>        
        <Link to="/" >Divisoria</Link>
      </header>
      <main>   

        {/* DEFINING ROUTES */}
        <Routes>          
          <Route path='/product/:slug' element={<ProductScreen/>} />
          <Route path='/' element={<HomeScreen />} />
        </Routes>

      </main>

      <footer>
          <div className="text-center">All rights reserved</div>
      </footer>

    </div>
  </BrowserRouter>
  )
}

export default App
