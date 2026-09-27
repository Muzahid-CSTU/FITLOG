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
                            <span className="text-[#FFFFFF] text-lg font-black">
                                FITLOG
                            </span>
                        </Link>
                    </div>

                    <div className="navbar-center hidden sm:flex">
                        <ul className="flex items-center gap-2">
                            <li>
                                <Link href="/" className={pathname === "/" ? "bg-[#172500] text-[#C2F800] px-4 py-1.5 text-xs font-semibold rounded-full" : "text-gray-400 px-4 py-1.5 text-xs font-medium"}>
                                    Workouts
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-plan" className={pathname === "/my-plan" ? "bg-[#172500] text-[#c8ff00] px-4 py-1.5 text-xs font-semibold rounded-full" : "text-gray-400 px-4 py-1.5 text-xs font-medium"}>
                                    My Plan
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-3 sm:gap-5">
                        <Link href="/my-plan" className="flex items-center gap-2 text-xs font-medium text-[#D1D5DB]">
                            Plan
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C2F800] text-[11px] font-medium text-black">
                                {plan.length}
                            </span>
                        </Link>
                        <Link href="/my-plan" className="flex items-center gap-2 text-xs font-medium text-[#D1D5DB]">
                            Saved
                            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#2D313B] text-[11px] font-medium text-[#D1D5DB]">
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