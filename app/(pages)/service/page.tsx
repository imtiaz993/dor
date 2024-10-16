"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Faqs from "./components/Faqs";
import TopSection from "./components/TopSection";
import { useState } from "react";
import ResolveQuery from "./components/ResolveQuery";
import SelfHelpVideos from "./components/SelfHelpVideos";

const Service = () => {
  const [activeTab, setActiveTab] = useState("DOR");
  return (
    <>
      <Navbar />
      <TopSection activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "DOR" && <SelfHelpVideos />}
      <Faqs />
      {activeTab === "DORPlay" && <ResolveQuery />}
      <Footer />
    </>
  );
};

export default Service;
