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
            try {
                const data = await getWorkouts();
                setWorkouts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadWorkouts();
    }, []);

    if (loading) {
        return (
            <section
                id="library"
                className="container mx-auto max-w-6xl px-6 py-8"
            >
                <p className="text-gray-400 text-sm">
                    Loading workouts...
                </p>
            </section>
        );
    }

    if (workouts.length === 0) {
        return (
            <section
                id="library"
                className="container mx-auto max-w-6xl px-6 py-8"
            >
                <p className="text-gray-400 text-sm">
                    Failed to load workouts.
                </p>
            </section>
        );
    }

    return (
        <section
            id="library"
            className="container mx-auto max-w-6xl px-6 pt-6 pb-10"
        >
            <div className="mb-5">
                <h2 className="text-white text-2xl font-extrabold">
                    THE LIBRARY
                </h2>

                <p className="text-gray-500 text-[10px] mt-1">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </section>
    );
};

export default LibrarySection;