import Image from "next/image";
import { getWorkout } from "@/utils/api";
import WorkoutActions from "@/components/WorkoutActions";

type WorkoutDetailsProps = {params: Promise<{id: string;}>;};

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
    const { id } = await params;
    const workout = await getWorkout(id);

    return (
        <div className="container mx-auto max-w-[800px] px-6 py-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

                <div className="relative h-[475px] rounded-xl overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>

                    <h1 className="text-[#FFFFFF] text-4xl font-bold">
                        {workout.name}
                    </h1>

                    <p className="text-[#9CA3AF] text-base mt-2 leading-relaxed">
                        {workout.description}
                    </p>

                    <div className="flex gap-2 mt-4">
                        {workout.muscleGroups.map((muscle: string) => (
                            <span
                                key={muscle}
                                className="bg-[#C2F800] text-black text-xs font-semibold px-2.5 py-1 rounded-full"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="bg-[#15171D] border border-[#222630] rounded-lg mt-5 overflow-hidden">

                        <div className="flex items-center justify-between px-5 py-3 border-b border-[#222630]">
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                EQUIPMENT
                            </span>
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3 border-b border-[#222630]">
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                DIFFICULTY
                            </span>
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3 border-b border-[#222630]">
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                SETS
                            </span>
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3 border-b border-[#222630]">
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                REPS
                            </span>
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3 border-b border-[#222630]">
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                DURATION
                            </span>
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3 border-b border-[#222630]">
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                CALORIES
                            </span>
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3">
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                RATING
                            </span>
                            <span className="text-[#9CA3AF] text-xs font-bold">
                                {workout.rating}
                            </span>
                        </div>

                    </div>

                    <div className="mt-5">

                        <h2 className="text-[#FFFFFF] text-base font-extrabold">
                            INSTRUCTIONS
                        </h2>

                        <div className="mt-3 space-y-2">
                            {workout.instructions.map(
                                (instruction: string, index: number) => (
                                    <p
                                        key={index}
                                        className="text-[#D1D5DB] text-sm"
                                    >
                                        {index + 1}. {instruction}
                                    </p>
                                )
                            )}
                        </div>

                    </div>

                    <WorkoutActions workout={workout} />

                </div>

            </div>

        </div>
    );
};

export default WorkoutDetails;