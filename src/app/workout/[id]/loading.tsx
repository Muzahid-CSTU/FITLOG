const Loading = () => {
    return (
        <div className="container mx-auto max-w-6xl px-6 py-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                <div className="h-[350px] md:h-[420px] bg-[#15171D] border border-[#222630] rounded-xl animate-pulse" />

                <div className="space-y-4">

                    <div className="h-4 w-20 bg-[#15171D] rounded animate-pulse" />

                    <div className="h-8 w-3/4 bg-[#15171D] rounded animate-pulse" />

                    <div className="h-16 w-full bg-[#15171D] rounded animate-pulse" />

                    <div className="h-48 w-full bg-[#15171D] border border-[#222630] rounded-lg animate-pulse" />

                    <div className="h-20 w-full bg-[#15171D] rounded animate-pulse" />

                </div>

            </div>

        </div>
    );
};

export default Loading;