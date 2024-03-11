'use client'
import Image from "next/image";
import { useState } from "react";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className={`${open ? 'h-[100vh] absolute' : 'h-[3.5rem] relative'} p-[1rem] my-auto ${open ? 'bg-[#111E28]' : ''} flex flex-col md:flex-row gap-5`}>
      <div className="flex justify-between">
        <div>
          <Image src="/assets/logo.png" width={140} height={24} alt="Logo" />
        </div>
        <div>
          <Image src="/assets/ic-burger.png" className={open ? 'hidden' : ''} onClick={() => setOpen(!open)} width={24} height={24} alt="Burger" />
          <Image src="/assets/ic-close.png" className={open ? '' : 'hidden'} onClick={() => setOpen(!open)} width={24} height={24} alt="Close" />
        </div>
      </div>
      <div className={`${open ? '' : 'hidden'} flex flex-col-reverse gap-5`}>
        <ul className="flex flex-col gap-2">
          <li className="bg-[#182632] p-[1.2rem] rounded-xl">Product</li>
          <li className="bg-[#182632] p-[1.2rem] rounded-xl">Use cases</li>
          <li className="bg-[#182632] p-[1.2rem] rounded-xl">Learn</li>
          <li className="bg-[#182632] p-[1.2rem] rounded-xl">About</li>
          <li className="bg-[#182632] p-[1.2rem] rounded-xl">Jobs</li>
        </ul>
        <a className="bg-[#414021] p-[1.2rem] rounded-xl text-[#ffc801]" href="#">Log in</a>
      </div>
      {open && <SocialIcons size={56} />}
    </nav>
  );
};
export default Navbar;