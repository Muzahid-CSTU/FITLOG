"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { usePlan } from "@/context/PlanContext";

const Navbar = () => {
    const pathname = usePathname();
    const { plan, saved } = usePlan();

    return (
        <div className="bg-[#0d0f12] border-b border-[#1d2025]">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="navbar min-h-14 px-0">

                    <div className="navbar-start">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src={logo} alt="FitLog" className="w-5 h-5" />
                            <span className="text-white text-xs font-bold">
                                FITLOG
                            </span>
                        </Link>
                    </div>

                    <div className="navbar-center hidden sm:flex">
                        <ul className="flex items-center gap-2">

                            <li>
                                <Link href="/" className={pathname === "/" ? "bg-[#172500] text-[#c8ff00] px-4 py-1.5 text-[10px] rounded-full" : "text-gray-400 px-4 py-1.5 text-[10px]"}>
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link href="/my-plan" className={pathname === "/my-plan" ? "bg-[#172500] text-[#c8ff00] px-4 py-1.5 text-[10px] rounded-full" : "text-gray-400 px-4 py-1.5 text-[10px]"}>
                                    My Plan
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="navbar-end gap-3 sm:gap-5">

                        <Link href="/my-plan" className="flex items-center gap-2 text-[10px] text-gray-400">
                            Plan

                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#c8ff00] text-[9px] text-black">
                                {plan.length}
                            </span>
                        </Link>

                        <Link href="/my-plan" className="flex items-center gap-2 text-[10px] text-gray-400">
                            Saved

                            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-600 text-[9px] text-gray-300">
                                {saved.length}
                            </span>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;