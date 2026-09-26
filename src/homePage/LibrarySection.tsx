"use client";

import { useEffect, useState } from "react";
import { getWorkouts } from "@/utils/api";
import { Workout } from "@/types";
import WorkoutCard from "@/components/WorkoutCard";

const LibrarySection = () => {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadWorkouts = async () => {
            const data = await getWorkouts();
            setWorkouts(data);
            setLoading(false);
        };

        loadWorkouts();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto max-w-6xl px-6 py-10">
                <p className="text-gray-400 text-sm">Loading workouts...</p>
            </div>
        );
    }

    return (
        <section id="library" className="container mx-auto max-w-6xl px-6 py-10">
            <h2 className="text-white text-xl font-bold mb-6">
                Workout Library
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {workouts.map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
                ))}
            </div>
        </section>
    );
};

export default LibrarySection;