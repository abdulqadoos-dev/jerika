'use client'
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function AnimatedHeading() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500); // Fast blinking effect
    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-2xl md:text-5xl font-bold text-secondary max-w-6xl mx-auto">
      Empower Your Business with Innovative IT Solutions: Seamless Integration, Robust Security, and{" "}

        <Typewriter
          words={["Unmatched Support", "Services", "SLA"]}
          loop={Infinity}
          typeSpeed={150}
          deleteSpeed={50}
          delaySpeed={500}
        />
        <span style={{ opacity: blink ? 1 : 0, transition: "opacity 0.2s" }}>_</span>

    </h2>
  );
}
