import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types";
import { LuClock3, LuFlame, LuStar } from "react-icons/lu";

type WorkoutCardProps = {
    workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link href={`/workout/${workout.id}`}>
            <div className="bg-[#15171D] border border-[#222630] rounded-xl overflow-hidden">
                <div className="relative h-48">
                    <Image src={workout.image} alt={workout.name} fill className="object-cover"/>
                </div>
                <div className="p-5">
                    <div className="flex gap-2 mb-4">
                        {workout.muscleGroups.map((muscle) => (
                            <span key={muscle} className="bg-[#C2F800] text-black text-[11px] font-bold px-2.5 py-1 rounded-full">
                                {muscle}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-[#FFFFFF] font-bold text-lg">
                        {workout.name}
                    </h3>

                    <p className="text-[#9CA3AF] text-xs mt-2">
                        {workout.equipment}
                    </p>

                    <div className="border-t border-[#222630] mt-4 pt-3 flex items-center gap-4 text-[#9CA3AF] text-xs">
                        <span className="flex items-center gap-1">
                            <LuClock3 />
                            {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <LuFlame />
                            {workout.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <LuStar />
                            {workout.rating}
                        </span>
                    </div>

                </div>

            </div>
        </Link>
    );
};

export default WorkoutCard;