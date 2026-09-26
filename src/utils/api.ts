export const getWorkouts = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return response.json();
};

export const getWorkout = async (id: string) => {
    const response = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch workout");
    }

    return response.json();
};