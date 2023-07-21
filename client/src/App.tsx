import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Gigs, Profile, Login, RegisterDeveloper, ChooseProfile, RegisterRecruiter, MessagesList } from "./pages";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path="/chooseProfile" element={<ChooseProfile />} />
          <Route path="/registerDeveloper" element={<RegisterDeveloper />} />
          <Route path="/registerRecruiter" element={<RegisterRecruiter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/gigs/category=backend" element={<Gigs />} /> 
          <Route
            path="/gigs/category=backend/:id"
            element={<Profile />}
          />
          <Route path="/messagesList" element={<MessagesList />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

// Y3HGeaB45YF
export default App;
