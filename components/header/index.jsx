"use client";

import Logo from "./Logo";
import Link from "next/link";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import siteMetadata from "@/utils/siteMetaData";
import { useThemeSwitch } from "../hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [toggled, setToggled] = useState(false);
  
  const handleToggle = () => {
    setToggled(!toggled);
  };
  return (
    <header className="flex items-center justify-between w-full p-6 px-5 sm:px-10">
      <Logo />

      <button className="z-50 p-2 rounded-full hover:bg-gray/10 dark:hover:bg-light/10 sm:hidden" onClick={handleToggle}>
        <div className="flex flex-col justify-center w-6 h-6 transition-all duration-300 cursor-pointer ease">
          <div className="flex flex-col justify-between h-4">
            <span style={{ transform: toggled ? 'rotate(-45deg) translate(-5px, 5px)' : ''}} className="w-full transition-all duration-200 rounded h-0.5 bg-dark dark:bg-light ease" />
            <span style={{ opacity: toggled ? 0 : 1}} className="w-full transition-all duration-200 rounded h-0.5 bg-dark dark:bg-light ease" />
            <span style={{ transform: toggled ? 'rotate(45deg) translate(-5px, -5px)' : ''}} className="w-full transition-all duration-200 rounded h-0.5 bg-dark dark:bg-light ease" />
          </div>
        </div>
      </button>

      <nav style={{ top: toggled ? '1.5rem' : '-4rem'}} className="sm:hidden flex min-w-[220px] text-sm fixed z-30 items-center justify-center gap-2 px-6 py-3 font-medium capitalize translate-x-1/2 border border-solid rounded-full border-dark top-6 right-1/2 bg-light/80 backdrop-blur-sm transition-all ease duration-200">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
        <button
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light");
            console.log(mode);
          }}
        >
          <SunIcon className='w-6 h-6' />
        </button>
      </nav>

      <nav className="fixed z-30 items-center justify-center hidden gap-4 px-8 py-3 font-medium capitalize translate-x-1/2 border border-solid rounded-full sm:flex border-dark top-6 right-1/2 bg-light/80 backdrop-blur-sm">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
        <button
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light");
            console.log(mode);
          }}
        >
          <SunIcon />
        </button>
      </nav>
      <div className="items-center hidden gap-2 sm:flex">
        <a href={siteMetadata.github} className="w-6 h-6 dark:fill-light">
          <GithubIcon className="transition-all duration-200 ease-in-out hover:scale-125" />
        </a>
        <a href={siteMetadata.twitter} className="w-6 h-6">
          <TwitterIcon className="transition-all duration-200 ease-in-out hover:scale-125" />
        </a>
        <a href={siteMetadata.dribble} className="w-6 h-6">
          <DribbbleIcon className="transition-all duration-200 ease-in-out hover:scale-125" />
        </a>
        <a href={siteMetadata.linkedin} className="w-6 h-6">
          <LinkedinIcon className="transition-all duration-200 ease-in-out hover:scale-125" />
        </a>
      </div>
    </header>
  );
};

export default Header;
