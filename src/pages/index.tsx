import { useState, useEffect } from "react";

import Categories from "@/components/Categories/Categories";
import ExclusiveBundles from "@/components/ExclusiveBundles/ExclusiveBundles";
import Footer from "@/components/Footer/Footer";
import GiftCards from "@/components/GiftCards/GiftCards";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Hero/Navbar/Navbar";
import PopularCourses from "@/components/sections/PopularCourses/PopularCourses";
import Benefits from "@/components/sections/Benefits/Benefits";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  }, [navbarOpen]);

  return (
    <main className="bg-white flex min-h-screen overflow-x-hidden">
      <div className="w-full relative">
        <Navbar open={navbarOpen} setOpen={setNavbarOpen} />
        <Hero />
        <PopularCourses />
        <Categories />
        <Benefits />
        <GiftCards />
        <ExclusiveBundles />
        <Footer />
      </div>
    </main>
  );
}
