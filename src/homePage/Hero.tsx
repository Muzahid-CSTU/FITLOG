import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

const Hero = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="bg-[#15171D] border border-[#222630] rounded-xl px-12 py-12 flex items-center justify-between gap-10">

                    <div className="max-w-xl">
                        <p className="text-[#c8ff00] text-[10px] font-bold">
                            WORKOUT LIBRARY
                        </p>
                        <h1 className="text-6xl md:text-5xl font-extrabold mt-4 text-white">
                            TRAIN WITH INTENT. LOG EVERY SET.
                        </h1>
                        <p className="text-gray-400 text-sm mt-4 max-w-md">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                        </p>
                        <Link href="#library" className="inline-block mt-4 bg-[#c8ff00] text-black px-5 py-2.5 rounded-md text-xs font-bold">
                            BROWSE WORKOUTS
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <Image
                            src={banner}
                            alt="Workout"
                            className="w-87.5"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;