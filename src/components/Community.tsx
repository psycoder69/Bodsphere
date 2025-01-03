import Image from "next/image";

export const Community = () => {
    return (
        <div className="w-full flex items-center justify-center px-16">
            <div className="flex flex-1 flex-col items-start justify-center pl-36">
                <h3 className="text-2xl font-semibold">
                    Get Internationally Accredited by Bodsphere,
                </h3>

                <h3 className="text-2xl font-semibold text-left">
                    from the comfort of your home
                </h3>

                <p className="w-[500px] text-sm leading-[24px] text-gray-900 font-light mt-8">
                    Join the Bodsphere Community and take the first step towards joining the World's Biggest Community of Yoga Schools and Teachers that represent high quality, safe, affordable, accessible and equitable Yoga.
                </p>

                <button type="button" className="text-xs font-bold border border-gray-500 hover:text-white hover:bg-gray-800 rounded-full px-4 py-2 my-16">
                    Get Accredited
                </button>
            </div>

            <Image src="/bodsphere-community.webp" alt="bodsphere-community" width={480} height={480} className="w-[480px] h-[480px]" />
        </div>
    );
};