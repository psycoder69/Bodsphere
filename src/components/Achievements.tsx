export const Achievements = () => {
    const achievements = [
        {
            title: "190+",
            subtitle: "Countries"
        },
        {
            title: "1,000+",
            subtitle: "On-demand Classes"
        },
        {
            title: "100K",
            subtitle: "Members"
        }
    ];

    return (
        <div className="w-full flex items-center justify-between border-b border-b-gray-200 px-16">
            {
                achievements.map((achievement, index) => (
                    <div className="flex flex-col gap-2 items-center px-16 py-8">
                        <span className="text-4xl text-gray-800 font-bold">
                            {achievement.title}
                        </span>

                        <span className="text-xs text-gray-500 font-light">
                            {achievement.subtitle}
                        </span>
                    </div>
                ))
            }
        </div>
    );
};