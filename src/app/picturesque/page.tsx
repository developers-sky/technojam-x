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
import { ParallaxScroll } from "../../components/ui/parallax-scroll";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";
const images = [
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/odupmyfwo3blymj5tncq",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/rijyqxeor6f3ifojp6jy",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/lx9m6cnx8cvgkreiimdg",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/g1dv6yyvx4awyowit5ck",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/xlqo6cogouic7kk5g6q0",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/lnk2vzazw05afvo25tbz",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/nry43silaurv2q5x3krb",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/qfhqa3x6dqzczzqghxf9",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/w0a5cqcj9zg5qyj4pf42",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/lzuabjphzqjw4iewmtxq",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/aktdk66twhogvq0mdnfm",
    "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/wg5p3yr7c2jiudfcqluv",
];

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
                                    renderImageBuffer={40}
                                    rotationRange={15}
                                    images={[
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/odupmyfwo3blymj5tncq",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/rijyqxeor6f3ifojp6jy",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/lx9m6cnx8cvgkreiimdg",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/g1dv6yyvx4awyowit5ck",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/xlqo6cogouic7kk5g6q0",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/lnk2vzazw05afvo25tbz",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/nry43silaurv2q5x3krb",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/qfhqa3x6dqzczzqghxf9",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/w0a5cqcj9zg5qyj4pf42",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/lzuabjphzqjw4iewmtxq",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/aktdk66twhogvq0mdnfm",
                                        "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/wg5p3yr7c2jiudfcqluv",
                                    ].filter(Boolean)}
                                >
                                    <section className="grid h-screen w-full place-content-center rounded-2xl pt-10 pb-10 pl-10 pr-10 bg-gray-900">
                                        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-pink-">
                                            <img src="https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/Technojam/slstruuwf3wdwsezrwl1" alt="TechnoJam" className="flex items-center gap-2 text-3xl font-bold uppercase text-pink-" style={{ width: "775px", height: "auto" }} />
                                        </p>
                                    </section>
                                </MouseImageTrail>
                                <ParallaxScroll images={images} />;
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
