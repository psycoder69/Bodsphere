export const Instructors = () => {
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 3, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay speed
        responsive: [ // Responsive breakpoints
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const instructors = ["/preetika.png", "/samarthya.png", "/diana.png"];

    return (
        <div className="w-full flex flex-col items-center justify-start h-80 px-16 py-8">
            <h3 className="w-full text-2xl font-semibold text-center">
                Meet Your Instructors
            </h3>

            <p className="w-80 text-sm text-gray-900 font-light text-center mt-2">
                We work with the finest professionals to ensure you feel the best
            </p>
        </div>
    );
};