import Image from "next/image";
import { CloudMoon, UserRound } from "lucide-react";

export const Navbar = () => {
    const navItems = ["Home", "Categories", "Notification", "AI Music", <CloudMoon key={4} />];

    return (
        <header className="w-full h-16 sticky top-0 flex items-center justify-between bg-white pl-8 pr-20 shadow">
            <Image src="/bodsphere-logo.webp" alt="bodsphere-logo" width={120} height={64} className="h-20" />

            <nav className="h-full flex items-center justify-center gap-20">
                {
                    navItems.map((item, index) => (
                        <button
                            type="button"
                            key={index}
                            className="text-slate-800 font-medium cursor-pointer"
                        >
                            {
                                item
                            }
                        </button>
                    ))
                }

                <button type="button" className="size-8 flex items-center justify-center border border-slate-800 rounded-full cursor-pointer">
                    <UserRound className="size-6 text-cyan-400 font-normal" />
                </button>
            </nav>
        </header>
    );
};