"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { name: "Features", link: "/#features" },
  { name: "FAQ", link: "/#faq" },
  { name: "Pricing", link: "/#pricing" },
  { name: "Buy", link: "/#cta" },
];

export function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="cursor-pointer" />
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p
              className="text-[#36485C] font-medium cursor-pointer hover:text-stone-400"
              key={index}
            >
              <Link href={item.link} scroll={true}>
                {item.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px] cursor-pointer hover:text-stone-400">
          Open an Account
        </p>
        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" className="cursor-pointer" />
          <span className="hidden font-medium text-[#36485C] lg:block cursor-pointer">
            Sign in
          </span>
        </div>
        <div onClick={() => setNavbar(!navbar)} className="block lg:hidden">
          {navbar ? (
            <AiOutlineClose size={32} className="cursor-pointer" />
          ) : (
            <Image src={Menu} alt="Menu Buttom" className="cursor-pointer" />
          )}
        </div>
        <ul
          className={
            navbar
              ? "fixed z-10 left-0 top-0 w-[30%] h-full border-r border-r-gray-300 bg-[#FFF] ease-in-out duration-500 lg:hidden"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <div className="flex flex-col">
            <Image
              src={Logo}
              alt="Logo"
              className="cursor-pointer justify-center items-center mt-5 ml-[74px]"
            />
            <li className="lg:hidden pl-[74px]">
              {navLinks.map((item, index) => (
                <Link href={item.link} scroll={true} key={index}>
                  <p
                    className="text-[#36485C] mt-5 text-lg font-medium cursor-pointer hover:text-stone-400"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.name}
                  </p>
                </Link>
              ))}
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
