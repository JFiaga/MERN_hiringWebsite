import { Footer, Navbar } from "./components";
import {
  BrowserRouter,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";

const Main = lazy(() => import("./pages/Main"));
const ChooseProfile = lazy(() => import("./pages/ChooseProfile"));
const RegisterDeveloper = lazy(() => import("./pages/RegisterDeveloper"));
const RegisterRecruiter = lazy(() => import("./pages/Main"));
const Login = lazy(() => import("./pages/Login"));
const Explore = lazy(() => import("./pages/Explore"));
const MessagesList = lazy(() => import("./pages/MessagesList"));
const Search = lazy(() => import("./pages/Search"));
const Profile = lazy(() => import("./pages/Profile"));
const MessageDiscussion = lazy(() => import("./pages/MessageDiscussion"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/chooseProfile",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <ChooseProfile />
            </Suspense>
          ),
        },
        {
          path: "/registerDeveloper",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <RegisterDeveloper />
            </Suspense>
          ),
        },
        {
          path: "/registerRecruiter",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <RegisterRecruiter />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <Main />
            </Suspense>
          ),
        },
        {
          path: "explore",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <Explore />
            </Suspense>
          ),
        },
        {
          path: "/messagesList",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <MessagesList />
            </Suspense>
          ),
        },
        {
          path: "/explore/:id",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "/profile/:id",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "/myDashboard/:id",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "/messagesList/:id",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <MessageDiscussion />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<div>Loading . .</div>}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
