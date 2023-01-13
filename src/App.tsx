import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import {About , Home, Store, Nav} from './pages/index';
function App() {

  return (
    <Container className="mb-4"> 
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Container>
  );
};


export default App;
