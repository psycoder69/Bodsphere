export const Features = () => {
    const featureCards = [
        {
            title: "Yoga Teacher Trainings",
            subtitle: "Become certified Yoga Teachers and transform your practice with World's most accessible and affordable programs."
        },
        {
            title: "Yoga Classes",
            subtitle: "Join revitalizing Yoga classes of Yin, Hatha, Ashtanga, Vinyasa and a lot more to enhance your well-being."
        },
        {
            title: "Calm Music",
            subtitle: "Experience tranquility with our calming music, perfect for relaxation and mindfulness."
        },
        {
            title: "Pranayama and Meditation",
            subtitle: "Explore the power of breath and enhance your self-awareness and inner-peace."
        },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center gap-16 px-16">
            <div className="w-full flex flex-col items-center justify-start gap-1">
                <h1 className="text-3xl text-gray-800 font-bold text-center">
                    Discover Your Yogic Path
                </h1>

                <p className="text-sm text-gray-800 text-center">
                    Join our community and transform your yoga practice today.
                </p>
            </div>

            <div className="w-full flex items-stretch justify-center gap-8 flex-wrap">
                {
                    featureCards.map((card, index) => (
                        <div key={index} className="max-w-80 flex flex-1 flex-col items-center justify-start gap-2 flex-grow rounded-2xl bg-slate-100 shadow-lg shadow-gray-300 px-8 py-4">
                            <p className="text-sm font-bold text-center">
                                {card.title}
                            </p>

                            <p className="text-xs font-light text-center">
                                {card.subtitle}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};