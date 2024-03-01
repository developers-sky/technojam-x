"use client";

import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState, useRef } from "react";
import React from "react";
import ReactNode from "react";
import MouseImageTrail from "@/components/ui/mouse-image-trail";

import { MouseEventHandler } from "react";

import { useAnimate } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";


import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";


export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [isLoaded]);


    return (
        <>
            {isLoaded ? (
                <div className="flex">
                    <div className="w-[4.5vw] h-screen sticky top-0 left-0 bg-[#131E2C]">
                        <Sidebar />
                    </div>
                    <ContextMenu>
                        <ContextMenuTrigger>
                            <div className="w-[95.5vw] min-h-screen   bg-gray-800">

                                <MouseImageTrail
                                    renderImageBuffer={50}
                                    rotationRange={10}
                                    images={[
                                        "/active/2.jpg",
                                        "/active/3.jpg",
                                        "/active/4.jpg",
                                        "/active/5.jpg",
                                        "/active/6.jpg",
                                        "/active/7.jpg",
                                        "/active/8.jpg",
                                        "/active/9.jpg",
                                        "/active/10.jpg",
                                        "/active/11.jpg",
                                        "/active/12.jpg",
                                        "/active/13.jpg",
                                        "/active/14.png",
                                           
                                           
                                    ]}
                                >
                                    <section className="grid h-screen w-full place-content-center bg-gray-800">
                                        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-pink-">
                                            <img src="/tj.png" alt="TechnoJam" className="flex items-center gap-2 text-3xl font-bold uppercase text-pink-" style={{ width: "775px", height: "auto" }} />
                                        </p>
                                    </section>
                                </MouseImageTrail>




                                <div>
                                </div>

                                <ContextMenuContent>
                                    <ContextMenuItem>Home</ContextMenuItem>
                                    <ContextMenuItem>Join</ContextMenuItem>
                                    <ContextMenuItem>Events</ContextMenuItem>
                                    <ContextMenuItem>Picturesque</ContextMenuItem>
                                </ContextMenuContent>
                            </div>

                        </ContextMenuTrigger>
                    </ContextMenu>
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
}
