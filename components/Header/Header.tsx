"use client";

import Image from "next/image";
import Link from "next/link";
import { headerData1, headerData2 } from "@/utils/constant";
import HeaderLogo from "@/public/headerLogo.svg";
import { useState } from "react";
import "./header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  return (
    <header className="header relative">
      <div className="container py-5 flex justify-between items-center relative drop-shadow-[#0C0C0D0D]">
        <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-[35%] z-20">
          <Image
            src={HeaderLogo}
            alt="logo"
            width={144}
            height={144}
            className="object-contain logo"
          />
        </div>

        <div className="hidden md:flex py-[15px] gap-6">
          {headerData1.map((item) => (
            <Link
              href={`/${item.id}`}
              key={item.id}
              className="hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex py-[15px] gap-6">
          {headerData2.map((item) => (
            <Link
              href={`/${item.id}`}
              key={item.id}
              className="hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="md:hidden"></div>

        <button
          className="md:hidden z-20 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-black transition-all ${
              isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-black my-1.5 transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-black transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>

        <div
          className={`fixed inset-0 z-10 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className="absolute inset-0 bg-white/80 backdrop-blur-md"
            onClick={toggleMenu}
          />
          <div
            className={`absolute inset-x-0 top-0 h-auto w-full bg-white shadow-lg transform transition-transform duration-300 origin-top ${
              isMenuOpen ? "scale-y-100" : "scale-y-0"
            }`}
          >
            <div className="flex flex-col p-6 pt-[8rem]">
              {headerData1.map((item) => (
                <Link
                  href={`/${item.id}`}
                  key={item.id}
                  className="py-3 hover:text-primary transition-colors text-center"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              ))}
              {headerData2.map((item) => (
                <Link
                  href={`/${item.id}`}
                  key={item.id}
                  className="py-3 hover:text-primary transition-colors text-center"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
