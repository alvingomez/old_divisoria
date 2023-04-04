import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
// import data from './data';

function App() {   

  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/" >Divisoria</Link>
      </header>
      <main>
        {/* DEFINING ROUTES */}
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
  )
}

export default App
