"use client";

import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState, useRef } from "react";
import React from "react";
import ReactNode from "react";
import MouseImageTrail from "@/components/ui/mouse-image-trail";
import { SparklesCore } from "../../components/sparkles"; // Fixed import
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { createClient } from "next-sanity";
import { MouseEventHandler } from "react";
import { useAnimate } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";
import Link from "next/link";


export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);


    useEffect(() => {
        setIsLoaded(true);
    }, [isLoaded]);

    const client = createClient({ 
        projectId: 'sid5fht0',
        dataset: 'production',
        useCdn: true, 
    });


    const postQuery = `*[_type == "Post"]{
        title,
        shortDescription,
        author->{
            name
        }
    }`;// Replace with the actual value of postQuery

    useEffect(() => {
        client
            .fetch(postQuery)
            .then((data) => setPosts(data))
            .catch(console.error);
    }, []);

    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    );

    const items = posts.length > 0 ? posts.map((post) => ({
        title: post.title,
        description: post.shortDescription,
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    })) : [];

    return (
        <>
            {isLoaded ? (
                <div className="flex justify-center"> {/* Added justify-center */}
                    <div className="w-[4.5vw] h-screen sticky top-0 left-0 bg-[#131E2C]">
                        <Sidebar />
                    </div>
                    <ContextMenu>
                        <ContextMenuTrigger>
                            <div className="w-[95.5vw]   bg-gray-800">
                                <h1 className="md:text-7xl text-3xl lg:text-8xl pb-0 pt-5 font-bold text-center text-white relative z-20">
                                    The Blog.
                                </h1>
                                <div className="w-[40rem] h-40 mx-auto justify pt-0 relative flex-inline">
                                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                                    <SparklesCore
                                        background="transparent"
                                        minSize={0.4}
                                        maxSize={1.5}
                                        speed={5}
                                        particleDensity={1900}
                                        className="w-full h-full"
                                        particleColor="#FFFFFF"
                                    /> <div className="absolute inset-0 w-full h-full bg-gray-800 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                                </div>
                                <BentoGrid className="max-w-4xl pb-10 mx-auto">
                                    {items.map((item, i) => (
                                        <BentoGridItem
                                            key={i}
                                            title={item.title}
                                            description={item.description}
                                            header={item.header}
                                            icon={item.icon}
                                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                                        />
                                    ))}
                                </BentoGrid>
                                <ContextMenuContent>
                                    <ContextMenuItem ><Link href={"/"}>Home</Link></ContextMenuItem>
                                    <ContextMenuItem>Join</ContextMenuItem>
                                    <ContextMenuItem>Events</ContextMenuItem>
                                    <ContextMenuItem>Picturesque</ContextMenuItem>
                                </ContextMenuContent>
                            </div>

                        </ContextMenuTrigger>
                    </ContextMenu>
                </div >
            ) : (
                <Loader />
            )
            }
        </>
    );
}

