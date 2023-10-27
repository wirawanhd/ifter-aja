"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const [nis, setNisn] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!nis || !password) {
      console.error("NISN and password are required");
      return;
    }
    const dataBody = { nis, password };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        dataBody,
        {
          withCredentials: true,
        }
      );

      const userData = response.data;

      console.log("Login successful: ", response.status);
      setNisn("");
      setPassword("");

      // Check if there are cookies in the response headers
      const cookies = response.headers["set-cookie"];
      console.log(response.headers);
      console.log("cookie: ", cookies);

      if (cookies && cookies.length > 0) {
        // Loop through and set each cookie in document.cookie
        cookies.forEach(function(cookie) {
            document.cookie = cookie;
        });
    }
    

      if (
        userData.role === 2 ||
        userData.authentication ||
        userData.authentication.sessionToken
      ) {
        router.push("/user/home");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setNisn("");
      setPassword("");
    }
  };

  // // Function to parse and set cookies
  // function parseCookies(cookies: string[]): string {
  //   const parsedCookies: string = cookies.reduce((acc: string, cookie: string) => {
  //     const [cookieName, cookieValue] = cookie.split(';')[0].split('=');
  //     acc += `${cookieName}=${cookieValue}; `;
  //     return acc;
  //   }, '');

  //   return parsedCookies;
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-6">
        <h2 className="text-3xl font-bold text-center">Login Page</h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              className="w-full border rounded-lg py-2 px-3"
              placeholder="NIS"
              value={nis}
              onChange={(e) => setNisn(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full border rounded-lg py-2 px-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white rounded-lg bg-blue-500 hover:bg-blue-700 focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
