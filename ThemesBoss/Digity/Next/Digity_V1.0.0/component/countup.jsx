"use client"
import React from 'react'
import { useState, useEffect } from 'react';

//import countup
import CountUp from "react-countup";

export default function Countup() {

  //count up Start
  const [startCounter, setStartCounter] = useState(false);
  useEffect(() => {
    const isInViewport = (el) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    const startCountAnimation = () => {
      if (isInViewport(document.getElementById("counter")) && !startCounter) {
        setStartCounter(true);
      }
    };
    window.addEventListener("scroll", startCountAnimation);
    return () => {
      window.removeEventListener("scroll", startCountAnimation);
    };
  }, [startCounter]);
  //count up End

  return (

    <>

       
          <div className="flex items-center text-left gap-4">
            <h2 className="text-[56px] leading-[72px] font-semibold text-green p-0" data-count={13}>

              {/* Countup start  */}
              {startCounter && (
                <CountUp
                  start={0}
                  end={13}
                  delay={1}
                  time={3000}
                  format="{}"
                  useEasing={true}
                  useGrouping={true}
                />
              )}
              {/* Countup End  */}

            </h2>
            <p className="md:text-[15px] md:leading-[22px] text-lg">
              Years in business
            </p>
          </div>
          <div className="flex items-center text-left gap-4">
            <h2 className="text-[56px] leading-[72px] font-semibold text-green p-0">
              {/* Countup start  */}
              {startCounter && (
                <CountUp
                  start={0}
                  end={28}
                  delay={1}
                  time={3000}
                  format="{}"
                  useEasing={true}
                  useGrouping={true}
                />
              )}
              {/* Countup End  */}
            </h2>
            <p className="md:text-[15px] md:leading-[22px] text-lg">
              Designers &amp; developers
            </p>
          </div>

    </>

  )
}
