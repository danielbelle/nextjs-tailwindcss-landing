import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";

const navLinks = [
  { name: "Features", link: "/#features" },
  { name: "FAQ", link: "/#faq" },
  { name: "Pricing", link: "/#pricing" },
  { name: "Buy", link: "/#cta" },
];

const date = new Date();
const year = date.getFullYear();

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Image src={Logo} alt="Logo" />
        <p className="font-bold text-[#36485C] text-[17px]">Monitor</p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        {navLinks.map((item, index) => (
          <li
            className="text-[#36485C] font-medium cursor-pointer hover:text-stone-400"
            key={index}
          >
            <Link href={item.link} scroll={true}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        Copyright &#169; {year}. Daniel Henrique Bellé. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Image src={Facebook} alt="Facebook" className="cursor-pointer" />
        <Image src={Feed} alt="Feed" className="cursor-pointer" />
        <Image src={Twitter} alt="Twitter" className="cursor-pointer" />
      </div>
    </div>
  );
}
