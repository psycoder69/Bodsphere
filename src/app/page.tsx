import { Achievements } from "@/components/Achievements";
import { Community } from "@/components/Community";
import { Features } from "@/components/Features";
import { Instructors } from "@/components/Instructors";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Image src="/bodsphere-cover.webp" alt="cover-image" width={500} height={500} className="w-full h-[calc(100dvh-64px)] object-cover z-100" />

      <section className="flex flex-col items-center justify-center gap-16 pt-8 pb-16">
        <Achievements />

        <Features />

        <Community />

        <Instructors />
      </section>
    </div>
  );
}
