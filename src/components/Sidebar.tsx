"use client";
import gsap, { Power3 } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useLayoutEffect, useRef } from "react";
import { HiOutlineHomeModern,HiOutlineNewspaper } from "react-icons/hi2";
import { SiOpensourceinitiative } from "react-icons/si";

const Sidebar = () => {
  const comp:any = useRef();
  useLayoutEffect(() => {
    const ctx=gsap.context(()=>{
      const t1 = gsap.timeline();
      t1.to(".sidebar",{opacity:100})
      .from(".logo",{x: -150,duration:.6,ease:Power3.easeOut})
      .from(
        ".page",
        {
          x: -200,
          y: -60,
          opacity: 0,
          stagger: 0.15,
          ease: Power3.easeOut,
          duration: 0.7,
        },"-=.4"
      )
      .from(
        ".github",
        {
          x: -200,
          y: -60,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 0.7,
        },"-=.4"
      )
    })
    return () => ctx.revert();
  }, [])
  // To Get the pathname
  const router = usePathname();
  const path = router;
  return (
    <section ref={comp} className="h-full w-full py-6 relative border-gray-700 border-r">
      <div className="opacity-0 sidebar">
        {/* Technojam Logo */}
        <div className="logo">
          <Image
            alt="logo"
            width={100}
            height={100}
            src={"/TechnoJam.png"}
            className="w-[45px] mx-auto logo"
          ></Image>
        </div>
        {/* Page Navigation */}
        <div className="text-xl py-6 flex flex-col gap-4">
          <div className="page">
            <Link href={''}
              className={`${
                path === "/" ? "border-blue-400 border-l-2 text-blue-400":'hover:text-3xl'
              } flex flex-col items-center p-2 duration-200 cursor-pointer`}
            >
              <HiOutlineHomeModern />
              <h1 className="text-xs text-center">Home</h1>
            </Link>
          </div>
          <div className="page">
            <Link href={'/blog'}
              className={`${
                path === "/blog" ? "border-[#81318F] border-l-2 text-[#81318F]":'hover:text-3xl'
              } flex flex-col items-center p-2 duration-200 cursor-pointer`}
            >
              <HiOutlineNewspaper />
              <h1 className="text-xs text-center">Blog</h1>
            </Link>
          </div>
          <div className="page">
            <Link href={'/join'}
              className={`${
                path === "/join" ? "border-[#F1377B] border-l-2 text-[#F1377B]":'hover:text-3xl'
              } flex flex-col items-center p-2 duration-200 cursor-pointer`}
            >
              <SiOpensourceinitiative />
              <h1 className="text-xs text-center">Join</h1>
            </Link>
          </div>
        </div>
        {/* Github Repo Link */}
        <div className="github w-full absolute bottom-6 left-0">
          <Link href={'https://github.com/developers-sky/technojam-x'} target="_blank" className="duration-300 hover:bottom-9">
            <Image src='/github.png' width={100} height={100} alt="github" className="w-[50px] mx-auto"></Image>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
