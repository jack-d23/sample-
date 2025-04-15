import React from "react";
import Login from "../Common ui/Login/Login";
import { Outlet } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex  md:flex-row flex-col items-center w-full gap-0 md:gap-20 px-[1rem] md:px-[1rem] lg:px-[8rem] xl:px-[20rem]">
      <div className="md:h-fit min-w-[200px] md:mt-0 mt-20 ">
        <img src="/main_logo.avif" width={300} alt="" />
      </div>
      <div className="h-[500px] md:block lg:block hidden bg-gray-400 w-[1px]"></div>
      {/* <div className="h-[500px] absolute md:block hidden sm:left-[20rem]  md:left-[20rem] lg:left-[30rem] xl:left-[40rem] bg-gray-400 w-[1px]"></div> */}
      <div>
        <Login />
      </div>
      <Outlet />
    </div>
  );
};

export default LoginPage;
