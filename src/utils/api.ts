export const getWorkouts = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return response.json();
};