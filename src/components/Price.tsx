"use client";

import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (price + (options ? options[selected].additionalPrice : price))
    );
  }, [quantity, selected, price, options]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* Options Container  */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            className="p-2 ring-1 ring-red-500 rounded-md min-w-[6rem]"
            key={option.title}
            style={{
              backgroundColor:
                selected === index ? "rgb(248, 113, 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity and  Add Button Conatiner  */}
      <div className="flex justify-between items-center">
        {/* Quantity  */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="gap-4 flex items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* Cart Button  */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
