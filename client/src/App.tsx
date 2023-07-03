import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Gigs } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/gigs/category=backend" element={<Gigs />} />
      </Routes>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
