"use client";

import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2025-8-30");

const CountDown = () => {
  return (
    <Countdown
      className="font-bold text-amber-300 text-5xl"
      date={endingDate}
    ></Countdown>
  );
};

export default CountDown;
