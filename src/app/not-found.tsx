import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="text-center">

                <p className="text-[#C2F800] text-xs font-bold">
                    404
                </p>

                <h1 className="text-white text-3xl font-extrabold mt-2">
                    PAGE NOT FOUND
                </h1>

                <p className="text-gray-500 text-xs mt-2">
                    The page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-5 bg-[#C2F800] text-black px-4 py-2 rounded-md text-[9px] font-bold"
                >
                    GO TO WORKOUTS
                </Link>

            </div>
        </div>
    );
};

export default NotFound;