import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

const Hero = () => {
    return (
        <div className="pt-6 sm:pt-10 pb-5">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="bg-[#15171D] border border-[#222630] rounded-2xl flex flex-col md:flex-row justify-between items-center px-6 sm:px-8 md:px-14 py-8 md:py-9">
                    <div className="w-full md:w-[52%] flex flex-col gap-4">
                        <div className="text-[#C2F800] font-bold text-[11px]">
                            <p>WORKOUT LIBRARY</p>
                        </div>
                        <div className="text-[#FFFFFF] font-extrabold text-3xl sm:text-4xl md:text-[44px] leading-[0.95]">
                            <h1>
                                TRAIN WITH INTENT. LOG EVERY SET.
                            </h1>
                        </div>
                        <div className="font-normal text-xs sm:text-base text-[#9CA3AF] leading-relaxed max-w-[430px]">
                            <p>
                                FitLog is a dark, no-nonsense gym companion: pick a lift,
                                lock it into today's plan, and watch the week's work add up.
                            </p>
                        </div>
                        <div>
                            <Link href="#library" className="btn bg-[#C2F800] hover:bg-[#C2F800] text-black border-none rounded-md px-4 h-7 min-h-7 font-bold text-xs">
                                BROWSE WORKOUTS
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-6 md:mt-0">
                        <Image src={banner} alt="Banner image" className="w-40 h-40 sm:w-48 sm:h-48 md:w-55 md:h-55 object-contain transition duration-500 hover:scale-105"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;