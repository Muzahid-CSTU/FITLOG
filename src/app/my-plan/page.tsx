"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import {LuClock3, LuFlame, LuStar, LuCheck, LuX,} from "react-icons/lu";
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
                <h1 className="text-[#FFFFFF] text-3xl font-bold">
                    MY PLAN
                </h1>
                <p className="text-[#8A92A0] text-sm mt-1">
                    Your workouts for today and saved workouts.
                </p>
            </div>

            <div className="bg-[#15171D] border border-[#222630] rounded-lg p-5 mb-7">
                <div className="grid grid-cols-3">
                    <div className="px-2">
                        <p className="text-[#8A92A0] text-xs">
                            Exercises
                        </p>
                        <p className="text-[#C2F800] text-4xl font-bold mt-2">
                            {metrics.exercises}
                        </p>
                    </div>
                    <div className="px-6 border-l border-[#222630]">
                        <p className="text-[#8A92A0] text-xs">
                            Minutes
                        </p>
                        <p className="text-white text-4xl font-bold mt-2">
                            {metrics.minutes}
                        </p>
                    </div>
                    <div className="px-6 border-l border-[#222630]">
                        <p className="text-[#8A92A0] text-xs">
                            Calories
                        </p>
                        <p className="text-white text-4xl font-bold mt-2">
                            {metrics.calories}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mb-5">

                <div className="flex items-center gap-1 bg-[#15171D] border border-[#222630] rounded-lg p-1">

                    <button
                        onClick={() => setActiveTab("today")}
                        className={
                            activeTab === "today"
                                ? "bg-[#222630] text-white px-4 py-2 rounded-md text-xs font-bold"
                                : "text-[#8A92A0] px-4 py-2 rounded-md text-xs font-normal"
                        }
                    >
                        Today's Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={
                            activeTab === "saved"
                                ? "bg-[#222630] text-white px-4 py-2 rounded-md text-xs font-bold"
                                : "text-[#8A92A0] px-4 py-2 rounded-md text-xs font-normal"
                        }
                    >
                        Saved
                    </button>

                </div>

                <div className="flex items-center gap-2">

                    <span className="text-[#8A92A0] text-xs">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-[#15171D] border border-[#222630] text-[#FFFFFF] text-xs rounded-lg px-3 py-2 outline-none"
                    >
                        <option value="duration" className="bg-[#15171D] text-white">
                            Duration
                        </option>

                        <option value="calories" className="bg-[#15171D] text-white">
                            Calories
                        </option>

                        <option value="rating" className="bg-[#15171D] text-white">
                            Rating
                        </option>
                    </select>

                </div>

            </div>

            {activeTab === "today" && (
                <div className="space-y-3">

                    {plan.length === 0 ? (
                        <div className="border border-dashed border-[#222630] rounded-lg text-center py-20">
                            <h2 className="text-white text-xl font-bold">
                                NOTHING HERE YET
                            </h2>
                            <p className="text-[#A1A1AA] text-xs mt-2">
                                Browse the library and add a lift to get today moving.
                            </p>
                            <Link href="/"
                                className="inline-block mt-5 bg-[#C2F800] text-black px-5 py-2 rounded-full text-xs font-semibold"
                            >
                                Go to workouts
                            </Link>
                        </div>
                    ) : (
                        sortedPlan.map((workout) => (
                            <div key={workout.id}
                                className="bg-[#15171D] border border-[#222630] rounded-lg p-4 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="relative w-32 h-16 rounded-lg overflow-hidden">
                                        <Image src={workout.image} alt={workout.name} fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-base font-bold">
                                            {workout.name}
                                        </h3>

                                        <p className="text-[#8A92A0] text-xs font-semibold mt-1">
                                            {workout.equipment}
                                        </p>

                                        <div className="flex items-center gap-4 mt-2 text-[#D1D5DB] text-xs">

                                            <span className="flex items-center gap-1">
                                                <LuClock3 className="w-3 h-3 text-[#C2F800]" />
                                                {workout.duration} min
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <LuFlame className="w-3 h-3 text-[#C2F800]" />
                                                {workout.caloriesBurned} kcal
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <LuStar className="w-3 h-3 text-[#C2F800]" />
                                                {workout.rating}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                <div className="flex items-center gap-2">

                                    <Link
                                        href={`/workout/${workout.id}`}
                                        className="text-[#FFFFFF] border border-[#334155] px-3 py-2 rounded-full text-xs"
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        onClick={() => {
                                            markAsDone(workout.id);
                                            toast.success("Workout marked as done");
                                        }}
                                        className="flex items-center gap-1 text-black bg-[#C2F800] px-3 py-2 rounded-full text-xs font-semibold"
                                    >
                                        <LuCheck className="w-3 h-3" />
                                        {workout.isDone ? "Done" : "Mark as Done"}
                                    </button>

                                    <button
                                        onClick={() => {
                                            removeFromPlan(workout.id);
                                            toast.success("Removed from today's plan");
                                        }}
                                        className="text-[#6B7280] p-2"
                                    >
                                        <LuX className="w-3 h-3" />
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

                        <div className="border border-dashed border-[#222630] rounded-lg text-center py-20">

                            <h2 className="text-white text-xl font-bold">
                                NOTHING HERE YET
                            </h2>

                            <p className="text-[#A1A1AA] text-xs mt-2">
                                Browse the library and save a workout for later.
                            </p>

                            <Link
                                href="/"
                                className="inline-block mt-5 bg-[#C2F800] text-black px-5 py-2 rounded-full text-xs font-semibold"
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

                                <div className="flex items-center gap-3">

                                    <div className="relative w-32 h-16 rounded-lg overflow-hidden">
                                        <Image
                                            src={workout.image}
                                            alt={workout.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>

                                        <h3 className="text-white text-base font-bold">
                                            {workout.name}
                                        </h3>

                                        <p className="text-[#8A92A0] text-xs font-semibold mt-1">
                                            {workout.equipment}
                                        </p>

                                        <div className="flex items-center gap-4 mt-2 text-[#D1D5DB] text-xs">

                                            <span className="flex items-center gap-1">
                                                <LuClock3 className="w-3 h-3 text-[#C2F800]" />
                                                {workout.duration} min
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <LuFlame className="w-3 h-3 text-[#C2F800]" />
                                                {workout.caloriesBurned} kcal
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <LuStar className="w-3 h-3 text-[#C2F800]" />
                                                {workout.rating}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                <div className="flex items-center gap-2">

                                    <Link
                                        href={`/workout/${workout.id}`}
                                        className="text-gray-300 border border-[#334155] px-3 py-2 rounded-full text-xs"
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        onClick={() => {
                                            removeFromSaved(workout.id);
                                            toast.success("Removed from saved");
                                        }}
                                        className="text-gray-500 p-2"
                                    >
                                        <LuX className="w-4 h-4" />
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