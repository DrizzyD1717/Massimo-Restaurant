import Image from "next/image";
import Link from "next/link";
import React from "react";

const loginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center ">
      {/* BOX  */}
      <div className="h-full md:h-[70%] md:w-full shadow-2xl rounded-md flex flex-col md:flex-row lg:w-[60%] 2xl:w-1/2">
        {/* Image Container  */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image
            src="/loginBg.png"
            alt=""
            fill
            className="object-cover"
          ></Image>
        </div>
        {/* Form Container  */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl  xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            ></Image>
            <span className="">Sign In With Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            ></Image>
            <span className="">Sign In With Google</span>
          </button>
          <p className="text-sm">
            Have a problem{" "}
            <Link className="underline" href="/">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
