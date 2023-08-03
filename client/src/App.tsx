import { Footer, Loading, Navbar } from "./components";
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
            <Suspense fallback={<Loading/>}>
              <ChooseProfile />
            </Suspense>
          ),
        },
        {
          path: "/registerDeveloper",
          element: (
            <Suspense fallback={<Loading/>}>
              <RegisterDeveloper />
            </Suspense>
          ),
        },
        {
          path: "/registerRecruiter",
          element: (
            <Suspense fallback={<Loading/>}>
              <RegisterRecruiter />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<Loading/>}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading/>}>
              <Main />
            </Suspense>
          ),
        },
        {
          path: "explore",
          element: (
            <Suspense fallback={<Loading/>}>
              <Explore />
            </Suspense>
          ),
        },
        {
          path: "/messagesList",
          element: (
            <Suspense fallback={<Loading/>}>
              <MessagesList />
            </Suspense>
          ),
        },
        {
          path: "/explore/:id",
          element: (
            <Suspense fallback={<Loading/>}>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "/profile/:id",
          element: (
            <Suspense fallback={<Loading/>}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "/myDashboard/:id",
          element: (
            <Suspense fallback={<Loading/>}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "/messagesList/:id",
          element: (
            <Suspense fallback={<Loading/>}>
              <MessageDiscussion />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense>
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
