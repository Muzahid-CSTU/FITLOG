"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { PlanWorkout, Workout } from "@/types";

type PlanContextType = {
    plan: PlanWorkout[];
    saved: Workout[];
    addToPlan: (workout: Workout) => void;
    addToSaved: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
    markAsDone: (id: number) => void;
    metrics: {
        exercises: number;
        minutes: number;
        calories: number;
    };
};

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
    const [plan, setPlan] = useState<PlanWorkout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);

    useEffect(() => {
        const savedPlan = localStorage.getItem("fitlog-plan");
        const savedWorkouts = localStorage.getItem("fitlog-saved");

        if (savedPlan) {
            setPlan(JSON.parse(savedPlan));
        }

        if (savedWorkouts) {
            setSaved(JSON.parse(savedWorkouts));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }, [plan]);

    useEffect(() => {
        localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }, [saved]);

    const addToPlan = (workout: Workout) => {
        if (plan.length >= 5) {
            return;
        }

        const alreadyAdded = plan.some((item) => item.id === workout.id);

        if (alreadyAdded) {
            return;
        }

        setPlan([...plan, { ...workout, isDone: false }]);
    };

    const addToSaved = (workout: Workout) => {
        const alreadySaved = saved.some((item) => item.id === workout.id);

        if (alreadySaved) {
            return;
        }

        setSaved([...saved, workout]);
    };

    const removeFromPlan = (id: number) => {
        setPlan(plan.filter((item) => item.id !== id));
    };

    const removeFromSaved = (id: number) => {
        setSaved(saved.filter((item) => item.id !== id));
    };

    const markAsDone = (id: number) => {
        setPlan(
            plan.map((item) =>
                item.id === id ? { ...item, isDone: true } : item
            )
        );
    };

    const metrics = {
        exercises: plan.length,
        minutes: plan.reduce((total, item) => total + item.duration, 0),
        calories: plan.reduce((total, item) => total + item.caloriesBurned, 0),
    };

    return (
        <PlanContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                addToSaved,
                removeFromPlan,
                removeFromSaved,
                markAsDone,
                metrics,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error("usePlan must be used inside PlanProvider");
    }

    return context;
};