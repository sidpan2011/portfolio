"use client"
import React from "react";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX, 
    IconHome,
    IconBrandBluesky,
} from "@tabler/icons-react";
import { FaMedium } from "react-icons/fa6";
import { FloatingDock } from "./ui/floating-dock";
import { ModeToggle } from "./mode-toggle";
import { FileUser } from "lucide-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },
        {
            title: "Blogs",
            icon: (
                <FaMedium className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://medium.com/@sidhanthpandey",
        },
        // {
        //     title: "Resume",
        //     icon: (
        //         <FileUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        //     ),
        //     href: "https://drive.google.com/file/d/1s0umvKfCD3qyH24bE6qq_bGC5VdSrxoz/view?usp=sharing",
        // },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/sidhanthpandey/",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/sidhanthpande",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/sidpan2011",
        },
        {
            title: "Bluesky",
            icon: (
                <IconBrandBluesky className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://bsky.app/profile/sidhanth.bsky.social",
        },
        {
            title: "Mode",
            icon: (
                <ModeToggle />
            ),
            href: ""
        }
    ];
    return (
        (<div className="flex fixed w-full">
            <FloatingDock
                // only for demo, remove for production
                // mobileClassName="sm:block"
                items={links}
                className="left-1/2 transform -translate-x-1/2"
            />
        </div>)
    );
}
