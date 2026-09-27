"use client";

import { Workout } from "@/types";
import { usePlan } from "@/context/PlanContext";
import toast from "react-hot-toast";
import { LuCalendarPlus, LuBookmark } from "react-icons/lu";

type WorkoutActionsProps = {
    workout: Workout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
    const { plan, saved, addToPlan, addToSaved } = usePlan();

    const handleAddToPlan = () => {
        toast.dismiss();
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
        toast.dismiss();
        const alreadySaved = saved.some((item) => item.id === workout.id);
        if (alreadySaved) {
            toast.error("Already saved");
            return;
        }
        addToSaved(workout);
        toast.success("Saved for later");
    };

    return (
        <div className="flex flex-wrap gap-3 mt-6">

            <button onClick={handleAddToPlan}
                className="btn bg-[#C2F800] hover:bg-[#C2F800] text-black border-none rounded-lg h-9 min-h-9 px-4 text-[9px] font-medium">
                <LuCalendarPlus className="w-3.5 h-3.5" />
                Add to today's plan
            </button>
            <button onClick={handleSave}
                className="btn bg-transparent hover:bg-[#15171D] text-gray-300 border border-[#222630] rounded-lg h-9 min-h-9 px-4 text-[9px] font-medium"
            >
                <LuBookmark className="w-3.5 h-3.5" />
                Save for later
            </button>
        </div>
    );
};

export default WorkoutActions;