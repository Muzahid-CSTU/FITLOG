"use client";

import { Workout } from "@/types";
import { usePlan } from "@/context/PlanContext";
import toast from "react-hot-toast";

type WorkoutActionsProps = {
    workout: Workout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
    const { plan, saved, addToPlan, addToSaved } = usePlan();

    const handleAddToPlan = () => {
        const alreadyAdded = plan.some((item) => item.id === workout.id);

        if (alreadyAdded) {
            toast.error("Already added to today's plan");
            return;
        }

        if (plan.length >= 5) {
            toast.error("Today's plan is full");
            return;
        }

        addToPlan(workout);
        toast.success("Added to today's plan");
    };

    const handleSave = () => {
        const alreadySaved = saved.some((item) => item.id === workout.id);

        if (alreadySaved) {
            toast.error("Already saved");
            return;
        }

        addToSaved(workout);
        toast.success("Saved for later");
    };

    return (
        <div className="flex gap-2 mt-5">

            <button
                onClick={handleAddToPlan}
                className="btn bg-[#C2F800] hover:bg-[#C2F800] text-black border-none rounded-md h-7 min-h-7 px-3 text-[8px]"
            >
                Add to today's plan
            </button>

            <button
                onClick={handleSave}
                className="btn bg-transparent hover:bg-[#15171D] text-gray-400 border border-[#222630] rounded-md h-7 min-h-7 px-3 text-[8px]"
            >
                Save for later
            </button>

        </div>
    );
};

export default WorkoutActions;