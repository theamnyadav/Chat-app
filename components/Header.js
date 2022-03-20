import React from "react";
import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import dp from  '../assets/user.png'
import ChangeUsername from './ChangeUsername'

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-white shadow-sm border-b-2 border-black sticky top-0 z-50 p-5 bg-cyan-900">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center ">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image src={dp} layout="fill" objectFit="cover" />
        </div>
        <div className="text-left col-span-4 lg:text-center">
            <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                <Avatar logoutOnPress/>
            </div>
            <h1>Welcome to Aman's web3 world</h1>
            <h1 className="text-5xl font-bold truncate">Aman Yadav</h1>
            <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
