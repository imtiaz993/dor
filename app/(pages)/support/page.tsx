"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Faqs from "./components/Faqs";
import TopSection from "./components/TopSection";
import { useState } from "react";
import ResolveQuery from "./components/ResolveQuery";
import SelfHelpVideos from "./components/SelfHelpVideos";
import SearchSection from "./components/SearchSection";

const Support = () => {
  const [activeTab, setActiveTab] = useState("DOR");
  return (
    <>
      <Navbar />
      <TopSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchSection />
      {activeTab === "DOR" && <SelfHelpVideos />}
      <Faqs />
      {activeTab === "DORPlay" && <ResolveQuery />}
      <Footer />
    </>
  );
};

export default Support;
