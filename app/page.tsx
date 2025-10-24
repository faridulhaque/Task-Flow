import Navbar from "@/components/Navbar";
import TodayTask from "@/components/TodayTask";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col">
      <Navbar />
      <TodayTask></TodayTask>
    </div>
  );
}
