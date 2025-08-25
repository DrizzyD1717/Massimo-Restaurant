"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "HomePage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/menu" },
  { id: 4, title: "Contact", url: "/menu" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false; //temporary user

  return (
    <div>
      {!open ? (
        <Image
          width={20}
          height={20}
          src="/open.png"
          alt="image"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          width={20}
          height={20}
          src="/close.png"
          alt="image"
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex justify-center items-center text-3xl flex-col gap-8 z-10">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders onClick={() => setOpen(false)}">Orders</Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
