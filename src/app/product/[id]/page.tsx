import Image from "next/image";
import React from "react";

const singleProduct = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row">
      {/* Image Continer */}
      <div className="relative">
        <Image src="" fill alt="" className="object-contain"></Image>
      </div>
    </div>
  );
};

export default singleProduct;
