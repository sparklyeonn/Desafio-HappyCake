import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Contacto from './views/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;