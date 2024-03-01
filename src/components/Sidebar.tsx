"use client";
import gsap, { Power3 } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import { HiOutlineHomeModern, HiOutlineNewspaper } from "react-icons/hi2"
import { RiGalleryLine } from "react-icons/ri";
const Sidebar = () => {
  // Animation Using Gsap
  const comp: any = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.to(".sidebar", { opacity: 100 })
        .from(".logo", { x: -150, duration: 0.6, ease: Power3.easeOut }, "-=.4")
        .from(
          ".page",
          {
            x: -200,
            y: -60,
            stagger: 0.15,
            ease: Power3.easeOut,
            duration: 0.7,
          },
          "-=.4"
        )
        .from(
          ".github",
          {
            x: -200,
            y: -60,
            ease: Power3.easeOut,
            duration: 0.4,
          },
          "-=.2"
        );
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={comp}
      className="h-full w-full py-6 relative border-gray-700 border-r"
    >
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
            <div
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              className={` flex flex-col items-center p-2 text-blue-400 duration-200 cursor-pointer hover:text-3xl`}
            >
              <HiOutlineHomeModern />
              <h1 className="text-xs text-center">Home</h1>
            </div>
          </div>
          <div className="page">
            <Link href="/blog">
              <div className={` flex flex-col items-center p-2 duration-200 text-[#81318F] cursor-pointer hover:text-3xl`}>
                <HiOutlineNewspaper />
                <h1 className="text-xs text-center">Blog</h1>
              </div>
            </Link>
          </div>
          <div className="page">
            <Link href="/picturesque">
              <div className={`flex flex-col items-center p-2 duration-200 cursor-pointer text-[#F1377B] hover:text-3xl`}>
                <RiGalleryLine />
                <h1 className="text-xs text-center">≒</h1>
              </div>
            </Link>
          </div>
        </div>
        {/* Github Repo Link */}
        <Link
          href={"https://github.com/developers-sky/technojam-x"}
          target="_blank"
          className="w-full absolute bottom-6 left-0 duration-300 hover:bottom-9"
        >
          <Image
            src="/github.png"
            width={100}
            height={100}
            alt="github"
            className="w-[50px] mx-auto github"
          ></Image>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
