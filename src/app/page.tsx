import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Image from "next/image";

export default function Home() {
  return (
   <div className="profileView">
    <Navbar/>
    <Profile/>
   </div>
  );
}
