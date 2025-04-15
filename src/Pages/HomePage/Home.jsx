import Header from "@/Common ui/Header";
import {
  Biohazard,
  Box,
  BoxIcon,
  ChevronRightIcon,
  HardHat,
  HeartPulse,
  Shield,
  User,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="p-6 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-4xl gap-10 mx-auto  p-8">
          <Link
            to={"/visitor/admin"}
            className="h-54 relative w-54 py-5 border group hover:bg-red-50 transition-all duration-500 rounded-xl cursor-pointer border-gray-300 flex flex-col items-center"
          >
            <div className="bg-gray-200 group-hover:bg-red-500 group-hover:text-white  transition-all duration-500  w-20 h-20 flex items-center rounded-xl justify-center">
              <User size={50} />
            </div>

            <div className="mt-5 px-5 flex flex-col items-center text-center">
              <p className="font-semibold">Visitors</p>
              <p className="text-xs text-gray-600 text-center">
                View and manage visitor entries as an admin.
              </p>
            </div>
          </Link>
          <Link
            to={"/material/admin"}
            className="h-54 relative w-54 py-5 border group hover:bg-red-50 transition-all duration-500 rounded-xl cursor-pointer border-gray-300 flex flex-col items-center"
          >
            <div className="bg-gray-200 group-hover:bg-red-500 group-hover:text-white  transition-all duration-500   w-20 h-20 flex items-center rounded-xl justify-center">
              <Box size={50} />
            </div>

            <div className="mt-5 px-5 flex flex-col items-center text-center">
              <p className="font-semibold">Materials</p>
              <p className="text-xs text-gray-600 text-center">
                Admin access to material inventory and records.
              </p>
            </div>
          </Link>
          <div className="h-54 relative w-54 py-5 border group hover:bg-red-50 transition-all duration-500 rounded-xl cursor-pointer border-gray-300 flex flex-col items-center">
            <div className="bg-gray-200 group-hover:bg-red-500 group-hover:text-white  transition-all duration-500   w-20 h-20 flex items-center rounded-xl justify-center">
              <Shield size={50} />
            </div>

            <div className="mt-5 px-5 flex flex-col items-center">
              <p className="font-semibold">Safety</p>
              <p className="text-xs text-gray-600 text-center">
                Monitor safety protocols and incident logs.
              </p>
            </div>
          </div>
          <div className="h-54 relative w-54 py-5 border group hover:bg-red-50 transition-all duration-500 rounded-xl cursor-pointer border-gray-300 flex flex-col items-center">
            <div className="bg-gray-200 group-hover:bg-red-500 group-hover:text-white  transition-all duration-500   w-20 h-20 flex items-center rounded-xl justify-center">
              <HeartPulse size={50} />
            </div>

            <div className="mt-5 px-5 flex flex-col items-center">
              <p className="font-semibold">Health</p>
              <p className="text-xs text-gray-600 text-center">
                Track workplace health status and reports.
              </p>
            </div>
          </div>
          <div className="h-54 relative w-54 py-5 border group hover:bg-red-50 transition-all duration-500 rounded-xl cursor-pointer border-gray-300 flex flex-col items-center">
            <div className="bg-gray-200 group-hover:bg-red-500 group-hover:text-white   transition-all duration-500  w-20 h-20 flex items-center rounded-xl justify-center">
              <Biohazard size={50} />
            </div>

            <div className="mt-5 px-5 flex flex-col items-center">
              <p className="font-semibold">Hazard</p>
              <p className="text-xs text-gray-600 text-center">
                Monitor and manage reported hazards efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
