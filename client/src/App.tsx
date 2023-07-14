import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Gigs, Profile, Login, Register } from "./pages";
import Messages from "./pages/Messages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
            path={`gigs/category=backend/:id`}
            element={<Profile />}
          />
          <Route path="message" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

// Y3HGeaB45YF
export default App;
