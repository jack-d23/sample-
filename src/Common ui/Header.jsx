import { Button } from "@/components/ui/button";
import { Ghost, LogOut, UserCircle, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex border-b justify-between items-center px-5 py-3">
        <img src="/main_logo.avif" width={200} className="h-fit" alt="" />
        <div className="flex items-center gap-5 ">
          <button
            className={
              "p-1 hover:bg-gray-100 transition-all active:scale-75 rounded-full"
            }
          >
            <img src="/user.png" width={30} alt="" />
          </button>
          <Link
            to={"/"}
            className={
              "p-2 hover:bg-gray-100 transition-all active:scale-75 rounded-full"
            }
          >
            <img src="/logout.png" width={25} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
