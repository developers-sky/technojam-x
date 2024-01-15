"use client";
// import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import Text3D from "@/components/Text3D";
import { useEffect, useState } from "react";
export default function Home(){
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  }, [isLoaded])
  return(
    <>
    {isLoaded?<div className="flex">
      <div className="w-[4.5vw] h-screen sticky top-0 left-0 bg-[#131E2C]"><Sidebar/></div>
      <div className="w-[95.5vw]">
        <Text3D/>
      </div>
    </div>:<Loader/>}
    </>  )
}