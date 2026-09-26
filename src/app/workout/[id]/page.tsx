import Image from "next/image";
import { getWorkout } from "@/utils/api";

type WorkoutDetailsProps = {
    params: Promise<{
        id: string;
    }>;
};

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
    const { id } = await params;
    const workout = await getWorkout(id);

    return (
        <div className="container mx-auto max-w-6xl px-6 py-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                <div className="relative h-[350px] md:h-[420px] rounded-xl overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>

                    <div className="flex gap-2 mb-3">
                        {workout.muscleGroups.map((muscle: string) => (
                            <span
                                key={muscle}
                                className="bg-[#C2F800] text-black text-[8px] font-bold px-2.5 py-1 rounded-full"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-white text-2xl font-extrabold">
                        {workout.name}
                    </h1>

                    <p className="text-gray-500 text-[10px] mt-2 leading-relaxed">
                        {workout.description}
                    </p>

                    <div className="bg-[#15171D] border border-[#222630] rounded-lg mt-5 overflow-hidden">

                        <div className="flex justify-between px-4 py-2.5 border-b border-[#222630]">
                            <span className="text-gray-500 text-[8px]">EQUIPMENT</span>
                            <span className="text-gray-300 text-[8px]">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="flex justify-between px-4 py-2.5 border-b border-[#222630]">
                            <span className="text-gray-500 text-[8px]">DIFFICULTY</span>
                            <span className="text-gray-300 text-[8px]">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="flex justify-between px-4 py-2.5 border-b border-[#222630]">
                            <span className="text-gray-500 text-[8px]">SETS</span>
                            <span className="text-gray-300 text-[8px]">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="flex justify-between px-4 py-2.5 border-b border-[#222630]">
                            <span className="text-gray-500 text-[8px]">REPS</span>
                            <span className="text-gray-300 text-[8px]">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="flex justify-between px-4 py-2.5 border-b border-[#222630]">
                            <span className="text-gray-500 text-[8px]">DURATION</span>
                            <span className="text-gray-300 text-[8px]">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex justify-between px-4 py-2.5 border-b border-[#222630]">
                            <span className="text-gray-500 text-[8px]">CALORIES</span>
                            <span className="text-gray-300 text-[8px]">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex justify-between px-4 py-2.5">
                            <span className="text-gray-500 text-[8px]">RATING</span>
                            <span className="text-gray-300 text-[8px]">
                                {workout.rating}
                            </span>
                        </div>

                    </div>

                    <div className="mt-5">
                        <h2 className="text-white text-[10px] font-bold">
                            INSTRUCTIONS
                        </h2>

                        <div className="mt-3 space-y-2">
                            {workout.instructions.map(
                                (instruction: string, index: number) => (
                                    <p
                                        key={index}
                                        className="text-gray-500 text-[8px]"
                                    >
                                        {index + 1}. {instruction}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    <div className="flex gap-2 mt-5">

                        <button className="btn bg-[#C2F800] hover:bg-[#C2F800] text-black border-none rounded-md h-7 min-h-7 px-3 text-[8px]">
                            Add to today's plan
                        </button>

                        <button className="btn bg-transparent hover:bg-[#15171D] text-gray-400 border border-[#222630] rounded-md h-7 min-h-7 px-3 text-[8px]">
                            Save for later
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default WorkoutDetails;