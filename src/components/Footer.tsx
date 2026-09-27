import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#0d0f12] border-t border-[#1d2025] mt-16">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 min-h-20 py-4 sm:py-0">
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="FitLog" className="w-4 h-4" />
                        <span className="text-white text-sm font-bold">
                            FITLOG
                        </span>
                    </div>
                    <p className="text-[#6B7280] text-xs text-center">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;