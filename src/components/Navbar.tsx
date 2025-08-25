import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40 ">
      {/* Left Links */}

      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="text-xl font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu></Menu>
      </div>

      {/* Right Links */}

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:absolute top-3 right-2 lg:static">
          <Image src="/phone.png" alt="" width={20} height={20}></Image>
          <span>123 456 789</span>
        </div>
        {user ? (
          <Link href="/login">login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon></CartIcon>
      </div>
    </div>
  );
};

export default Navbar;
