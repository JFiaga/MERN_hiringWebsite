import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Gigs, Profile, Login, Register } from "./pages";
import Messages from "./pages/Messages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gigs/category=backend" element={<Gigs />} />
        <Route
          path="gigs/category=backend/profileId=123123123"
          element={<Profile />}
        />
        <Route path="message" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

// Y3HGeaB45YF
export default App;
