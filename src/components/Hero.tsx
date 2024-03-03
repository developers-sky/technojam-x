"use client";
import gsap, { Expo } from "gsap";
import { tektur } from "../app/fonts";
import React, { useLayoutEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import SplitType from "split-type";
const Hero = () => {
  const hero: any = useRef();
  useLayoutEffect(() => {
    const myText = SplitType.create("#text", { types: "chars" });
    const ctx = gsap.context(() => {
      const t2 = gsap.timeline({ delay: 0.4 });
      t2.to(".hero", { opacity: 100 })
        .from(".typewriter", {
          x: 300,
          opacity: 0,
          ease: Expo.easeInOut,
          duration: 1,
        })
        .from(
          ".terminal",
          { x: -300, opacity: 0, duration: 1, ease: Expo.easeInOut },
          "-=1"
        )
        .from(myText.chars, { opacity: 0, stagger: 0.15, duration: 0.6 })
        .to(".terminalOut", { display: "block", stagger: 0.2, duration: 0.6 })
        .from(".card", {
          y: 300,
          opacity: 0,
          ease: Expo.easeInOut,
          duration: 1,
        }, "-=.5")
    }, hero);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={hero}
      className={`${tektur.className} w-full h-screen bg-[#0F141D]`}
    >
      <div className="hero opacity-0">
        {/* typewriter Animation */}
        <h1 className="text-[#BEC6D2] max-w-fit mx-auto pt-28 text-3xl font-medium tracking-widest typewriter">
          <TypeAnimation
            sequence={[
              "Technojam🚀👨‍💻",
              1200,
              "Throttle To Learn",
              1200,
              "<Code/> To Win",
              1200,
            ]}
            wrapper="span"
            speed={20}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        {/* Terminal Animation */}
        <div className="w-1/3 h-20 mx-auto mt-16 border border-gray-700 rounded terminal">
          <div className="container_terminal"></div>
          <div className="flex h-7 gap-2 items-center px-2 bg-[#383838]">
            <div className="flex items-center gap-1">
              <button className="btn hover:cursor-pointer btn-color"></button>
              <button className="btn hover:cursor-pointer"></button>
              <button className="btn hover:cursor-pointer"></button>
            </div>
            <p className="text-[#d5d0ce] text-sm">Admin@Technojam: ~</p>
          </div>
          <div className="p-[2px] bg-[#002B36] h-[calc(100%-28px)] text-xs">
            <div className="flex gap-1">
              <span className="text-[#7eda28]">Admin@Technojam:</span>
              <span className="text-[#4878c0]">~</span>
              <span className="text-[#dddddd]">$</span>
              <h1 id="text" className="text-white">
                ./kickStart.sh
              </h1>
            </div>
            <div className="flex gap-1">
              <span className="text-[#7eda28] hidden terminalOut">
                Admin@Technojam:
              </span>
              <span className="text-[#4878c0] hidden terminalOut">~</span>
              <span className="text-[#dddddd] hidden terminalOut">$</span>
              <span className="text-white">Hello guys🔈!! let&apos;s start contributing 🚀👉🏻</span>
            </div>
          </div>
        </div>
        {/* Debit Card */}
        <div className="card mx-auto mt-10 relative">
          <div className="card__side card__side_front bg-[#48256F]">
            <div className="flex w-full h-full justify-between flex-col">
              <p className="card__side__name-bank">Technojam</p>
              <div className="card__side__chip"></div>
              <p className="card__side__name-person">Admin</p>
            </div>
          </div>
          <div className="card__side card__side_back bg-[#48256F]">
            <div className="card__side__black"></div>
            <p className="card__side__number">9195 9815 7259 2021</p>
            <div className="flex w-full h-1/2">
              <p className="card__side__other-numbers card__side__other-numbers_1">2025</p>
              <p className="card__side__other-numbers card__side__other-numbers_2">911</p>
              <div className="card__side__photo">your-photo</div>
              <div className="card__side__debit">debit</div>
            </div>
            {/* <p className="card__side__other-info text-center text-[#635c77] text-[8px]">
               Paisa hai to badi badi badi badi baate
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
