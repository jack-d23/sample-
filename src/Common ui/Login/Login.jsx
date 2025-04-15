import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Login = () => {
  const [id, SetId] = useState("");
  const [pass, Setpass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === "admin" && pass === "1234") {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid ID or Password!!");
    }
  };

  return (
    <div className="w-full md:mt-0 mt-10 md:min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex px-[25px] py-[30px] flex-col  md:w-[300px] lg:w-[350px]  xl:w-[400px] bg-gray-50 border border-black/20 shadow-2xl  rounded-[8px] text-[14px] gap-10"
      >
        <div className="text-center">
          <h2 className="font-bold text-3xl ">Login</h2>
        </div>
        <div className="flex flex-col gap-5">
          <input
            className="outline-0 border border-[#c9c9c9] p-[10px] rounded-[4px]"
            type="text"
            placeholder="Your Email"
            value={id}
            onChange={(e) => SetId(e.target.value)}
            required
          />
          <input
            className="outline-0 border border-[#c9c9c9] p-[10px] rounded-[4px]"
            type="Password"
            value={pass}
            onChange={(e) => Setpass(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        {error && <div className=" text-red-500 text-sm">{error}</div>}

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-500"
        >
          Login
        </button>

        <div className="flex items-start gap-[8px] ">
          <input type="checkbox" required />
          <p className="-mt-[6px]">
            By continuing , i agree to the terms of use & privacy policy.
          </p>
        </div>
      </form>
      <Outlet />
    </div>
  );
};

export default Login;
