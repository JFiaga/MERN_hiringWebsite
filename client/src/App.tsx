import { Navbar } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Main/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
