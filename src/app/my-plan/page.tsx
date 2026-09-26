"use client";

import Link from "next/link";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import {
    LuClock3,
    LuFlame,
    LuTrash2,
    LuCheck,
} from "react-icons/lu";
import toast from "react-hot-toast";

const MyPlan = () => {
    const {
        plan,
        saved,
        metrics,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
    } = usePlan();

    const [activeTab, setActiveTab] = useState("today");
    const [sortBy, setSortBy] = useState("duration");

    const sortedPlan = [...plan].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        return a.rating - b.rating;
    });

    const sortedSaved = [...saved].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        return a.rating - b.rating;
    });

    return (
        <div className="container mx-auto max-w-6xl px-6 py-8">

            <div className="mb-6">
                <h1 className="text-white text-2xl font-extrabold">
                    MY PLAN
                </h1>

                <p className="text-gray-500 text-[10px] mt-1">
                    Your workouts for today and saved workouts.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-7">

                <div className="bg-[#15171D] border border-[#222630] rounded-lg p-4">
                    <p className="text-gray-500 text-[9px]">
                        EXERCISES
                    </p>

                    <h2 className="text-white text-xl font-extrabold mt-1">
                        {metrics.exercises}
                    </h2>
                </div>

                <div className="bg-[#15171D] border border-[#222630] rounded-lg p-4">
                    <p className="text-gray-500 text-[9px]">
                        MINUTES
                    </p>

                    <h2 className="text-white text-xl font-extrabold mt-1">
                        {metrics.minutes}
                    </h2>
                </div>

                <div className="bg-[#15171D] border border-[#222630] rounded-lg p-4">
                    <p className="text-gray-500 text-[9px]">
                        CALORIES
                    </p>

                    <h2 className="text-white text-xl font-extrabold mt-1">
                        {metrics.calories}
                    </h2>
                </div>

            </div>

            <div className="flex items-center justify-between mb-5">

                <div className="flex gap-2">

                    <button
                        onClick={() => setActiveTab("today")}
                        className={activeTab === "today"
                            ? "bg-[#C2F800] text-black px-4 py-2 rounded-md text-[9px] font-bold"
                            : "text-gray-400 border border-[#222630] px-4 py-2 rounded-md text-[9px]"
                        }
                    >
                        Today
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={activeTab === "saved"
                            ? "bg-[#C2F800] text-black px-4 py-2 rounded-md text-[9px] font-bold"
                            : "text-gray-400 border border-[#222630] px-4 py-2 rounded-md text-[9px]"
                        }
                    >
                        Saved
                    </button>

                </div>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#15171D] border border-[#222630] text-gray-400 text-[9px] rounded-md px-3 py-2"
                >
                    <option value="duration">
                        Sort by Duration
                    </option>

                    <option value="calories">
                        Sort by Calories
                    </option>

                    <option value="rating">
                        Sort by Rating
                    </option>
                </select>

            </div>

            {activeTab === "today" && (
                <div className="space-y-3">

                    {plan.length === 0 ? (

                        <div className="border border-dashed border-[#222630] rounded-xl min-h-[215px] flex flex-col items-center justify-center text-center">

                            <p className="text-white text-sm font-extrabold">
                                NOTHING HERE YET
                            </p>

                            <p className="text-gray-500 text-[10px] mt-2">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/"
                                className="inline-block mt-4 bg-[#C2F800] text-black px-5 py-2 rounded-full text-[9px] font-bold"
                            >
                                Go to workouts
                            </Link>

                        </div>

                    ) : (

                        sortedPlan.map((workout) => (

                            <div
                                key={workout.id}
                                className="bg-[#15171D] border border-[#222630] rounded-lg p-4 flex items-center justify-between"
                            >

                                <div>

                                    <h3 className="text-white text-sm font-bold">
                                        {workout.name}
                                    </h3>

                                    <div className="flex items-center gap-4 mt-2 text-gray-500 text-[9px]">

                                        <span className="flex items-center gap-1">
                                            <LuClock3 className="w-3 h-3" />
                                            {workout.duration} min
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <LuFlame className="w-3 h-3" />
                                            {workout.caloriesBurned} kcal
                                        </span>

                                    </div>

                                </div>

                                <div className="flex items-center gap-2">

                                    <Link
                                        href={`/workout/${workout.id}`}
                                        className="text-gray-400 border border-[#222630] px-3 py-2 rounded-md text-[8px]"
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        onClick={() => {
                                            markAsDone(workout.id);
                                            toast.success("Workout marked as done");
                                        }}
                                        className="text-black bg-[#C2F800] px-3 py-2 rounded-md text-[8px]"
                                    >
                                        <LuCheck className="inline w-3 h-3 mr-1" />
                                        {workout.isDone ? "Done" : "Mark as Done"}
                                    </button>

                                    <button
                                        onClick={() => {
                                            removeFromPlan(workout.id);
                                            toast.success("Removed from today's plan");
                                        }}
                                        className="text-gray-400 border border-[#222630] p-2 rounded-md"
                                    >
                                        <LuTrash2 className="w-3 h-3" />
                                    </button>

                                </div>

                            </div>

                        ))
                    )}

                </div>
            )}

            {activeTab === "saved" && (
                <div className="space-y-3">

                    {saved.length === 0 ? (

                        <div className="border border-dashed border-[#222630] rounded-xl min-h-[215px] flex flex-col items-center justify-center text-center">

                            <p className="text-white text-sm font-extrabold">
                                NOTHING HERE YET
                            </p>

                            <p className="text-gray-500 text-[10px] mt-2">
                                Browse the library and save a lift for later.
                            </p>

                            <Link
                                href="/"
                                className="inline-block mt-4 bg-[#C2F800] text-black px-5 py-2 rounded-full text-[9px] font-bold"
                            >
                                Go to workouts
                            </Link>

                        </div>

                    ) : (

                        sortedSaved.map((workout) => (

                            <div
                                key={workout.id}
                                className="bg-[#15171D] border border-[#222630] rounded-lg p-4 flex items-center justify-between"
                            >

                                <div>

                                    <h3 className="text-white text-sm font-bold">
                                        {workout.name}
                                    </h3>

                                    <p className="text-gray-500 text-[9px] mt-2">
                                        {workout.equipment}
                                    </p>

                                </div>

                                <div className="flex items-center gap-2">

                                    <Link
                                        href={`/workout/${workout.id}`}
                                        className="text-gray-400 border border-[#222630] px-3 py-2 rounded-md text-[8px]"
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        onClick={() => {
                                            removeFromSaved(workout.id);
                                            toast.success("Removed from saved");
                                        }}
                                        className="text-gray-400 border border-[#222630] p-2 rounded-md"
                                    >
                                        <LuTrash2 className="w-3 h-3" />
                                    </button>

                                </div>

                            </div>

                        ))
                    )}

                </div>
            )}

        </div>
    );
};

export default MyPlan;