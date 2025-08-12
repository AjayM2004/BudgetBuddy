"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-28 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-8 md:pb-12 gradient-title">
          Manage Your Budgets <br /> with Intelligence
        </h1>
        <p className="mb-8 md:mb-12 text-lg md:text-xl">
          An AI-Powered Finance Platform for Smart Budgeting, analyze and
          optimize your spending with real-time insights.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
          <Link href="/dashboard">
            <Button size="lg" className="px-10 py-4" variant={"outline"}>
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" className="px-10 py-4">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div>
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              alt="Dashboard Preview"
              width={1280}
              height={720}
              className="rounded-lg shadow-2xl border mx-auto mt-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
