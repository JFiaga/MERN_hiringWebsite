import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { newRequest } from "../utils/newRequest";

type Props = {};

const Login = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<any>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const res = await newRequest.post(
        "auth/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

    } catch (error:any) {
      setError(error);
      console.log(error.response.data);

      //type that
    }
    console.log("submitted");
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-primary-600/40 ring  ring-primary lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-primary underline uppercase decoration-wavy">
          Sign in
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
              onChange={(e) => setUsername(e.target.value)}
              type="text"
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
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-primary/70 focus:ring-primary/70 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#d" className="text-xs text-primary hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary focus:outline-none focus:bg-primary">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/register"
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
