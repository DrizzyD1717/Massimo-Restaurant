import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          className={`w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50`}
          key={item.id}
        >
          {/* Image Container */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                fill
                alt=""
                className="object-contain"
              ></Image>
            </div>
          )}
          {/* Text Container */}
          <div className="flex items-center justify-between font-bold ">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl ">${item.price}</h2>
            <button className=" hidden uppercase bg-red-500 text-white p-2 rounded-md group-hover:block">
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default categoryPage;
