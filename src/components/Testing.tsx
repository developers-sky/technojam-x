"use client"
import React, { useLayoutEffect } from 'react'
// import { tektur } from '../app/fonts'
// import gsap from 'gsap'
const Testing = () => {
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const t2 = gsap.timeline();
  //     t2.from(myText.chars, { // <- selector text, scoped to this component!
  //       y: 200,
  //       ease: "back",
  //       duration: 1,
  //       stagger: 0.1
  //     });
  //   },);
  //   return () => ctx.revert();
  // }, []);
  return (
    <div className="container w-230 h-194">
      <div className="container_terminal"></div>
      <div className="terminal_toolbar flex h-30 items-center px-8 box-border rounded-tl-5 rounded-tr-5 bg-gradient-to-b from-gray-800 to-gray-600">
        <div className="butt flex items-center">
          <button className="btn btn-color"></button>
          <button className="btn"></button>
          <button className="btn"></button>
        </div>
        <p className="user text-gray-300 ml-6 text-sm leading-4">johndoe@admin: ~</p>
      </div>
      <div className="terminal_body bg-purple-900 h-calc-100-minus-30 pt-2 mt-minus-1 text-sm rounded-bl-5 rounded-br-5">
        <div className="terminal_promt flex">
          <span className="terminal_user text-green-500">johndoe@admin:</span>
          <span className="terminal_location text-blue-500 ml-4">$</span>
          <span className="terminal_cursor block h-14 w-5 ml-10 animation-curbl"></span>
        </div>
      </div>
    </div>
  )
}

export default Testing