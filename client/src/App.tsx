import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Gigs, Profile } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/gigs/category=backend" element={<Gigs />} />
        <Route path="gigs/category=backend/profileId=123123123" element={<Profile />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
