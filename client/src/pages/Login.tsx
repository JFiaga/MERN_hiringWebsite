import { AxiosError } from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { newRequest } from "../utils/newRequest";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string|null>(null);
  const [error, setError] = useState<any>(null);


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setErrorMsg("")
      const res = await newRequest.post("/auth/login", { email, password });
      localStorage.setItem("currentUserJhire", JSON.stringify(res.data));
      window.location.pathname = '/'
    } catch (err: any) {
      if (error instanceof AxiosError) {
        setError(err);
        console.log(error.response?.data);
        setTimeout(() => {
          setErrorMsg('Mauvais email ou mot de passe')
        }, 1000);
      } else {
        setError(err);
        console.log(err);
      }
    }

    console.log("submitted");
  }

  const currentUser = JSON.parse(localStorage.getItem("currentUserJhire") as string)

  return currentUser ? (
     <Navigate to="/" />
   ) : (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-primary-600/40 ring  ring-primary lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-primary underline  decoration-wavy">
          Welcome Back
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              id="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-primary/70 focus:ring-primary/70 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              id="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
           <div>
           <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-primary/70 focus:ring-primary/70 focus:outline-none focus:ring focus:ring-opacity-40"
            />
           </div>
          </div>
          {/* <a href="#d" className="text-xs text-primary hover:underline">
            Forget Password?
          </a> */}
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary focus:outline-none focus:bg-primary">
              Login
            </button>
          </div>
        </form>
          <span className="text-red-500 font-medium">{errorMsg}</span>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/chooseProfile"
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
