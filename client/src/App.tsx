import { Footer, Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Profile, Login, RegisterDeveloper, ChooseProfile, RegisterRecruiter, MessagesList, MessageDiscussion, Search, Explore, NotFound } from "./pages";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {
  const queryClient = new QueryClient();

  return (
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter >
        <Navbar />
          <Routes>
          <Route path="/chooseProfile" element={<ChooseProfile />} />
          <Route path="/registerDeveloper" element={<RegisterDeveloper />} />
          <Route path="/registerRecruiter" element={<RegisterRecruiter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/explore/:id" element={<Search />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/myDashboard/:id" element={<Profile />} />
          <Route path="/messagesList" element={<MessagesList />} />
          <Route path="/messagesList/:id" element={<MessageDiscussion />} />
          <Route path={'*'} element={<NotFound />} />
          
        </Routes>
      <Footer/>
      </BrowserRouter>
    </QueryClientProvider>
  </>
  );
}

// Y3HGeaB45YF
export default App;
