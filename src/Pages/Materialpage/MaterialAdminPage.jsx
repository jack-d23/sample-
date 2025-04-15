import React, { useState } from "react";
import MaterialDetails from "./MaterialDetails";
import {
  Box,
  BoxesIcon,
  ChevronFirst,
  ChevronLast,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MaterialAdminPage = () => {
  const [active, setActive] = useState("visitors");
  const [open, setOpen] = useState(true);
  const click = (name) => {
    setActive(name);
  };
  return (
    <div className="flex justify-between md:pr-5 xl:pr-32 custom-1208-div lg:pr-5">
      <div className="transition-all shadow-sm">
        <div className="pb-2 flex relative justify-between  items-center">
          {open ? (
            <img
              src="/main_logo_2.jpg"
              className={`overflow-hidden my-5 mx-5 transform transition-all duration-300 ease-in-out ${
                open ? "w-6" : "w-0"
              }`}
            />
          ) : (
            <img
              src="/main_logo.avif"
              className={`overflow-hidden my-5 mx-5 transform transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-32 "
              }`}
            />
          )}

          <Button
            variant={"ghost"}
            size="icon"
            onClick={() => {
              setOpen((c) => !c);
            }}
            className={`transition-all duration-300   ${
              open ? "absolute -bottom-4 left-3 ease-in-out" : "relative left-0"
            }`}
          >
            {open ? <ChevronLast /> : <ChevronFirst />}
          </Button>
        </div>

        <div className="my-5 font-semibold text-sm">
          <div
            className={`${
              active === "visitors" ? "bg-[#dd2034] text-white" : ""
            } cursor-pointer flex items-center gap-5 py-3 px-3 m-2 rounded-sm`}
            onClick={() => click("visitors")}
          >
            <Box />
            <p
              className={`transform transition-all duration-300 ease-in-out ${
                open ? "hidden" : ""
              }`}
            >
              Materials
            </p>
          </div>

          <div
            className={`${
              active === "dashboard" ? "bg-[#dd2034] text-white" : ""
            } cursor-pointer flex items-center gap-5 m-2 py-3 px-3 rounded-sm`}
            onClick={() => click("dashboard")}
          >
            <LayoutDashboard />
            <p
              className={`transform transition-all duration-300 ease-in-out ${
                open ? "hidden" : " w-auto"
              }`}
            >
              Dashboard
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 py-3">
        <MaterialDetails />
      </div>
    </div>
  );
};

export default MaterialAdminPage;
