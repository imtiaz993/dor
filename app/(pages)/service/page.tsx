"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Faqs from "./components/Faqs";
import TopSection from "./components/TopSection";
import { useState } from "react";
import ResolveQuery from "./components/ResolveQuery";

const Service = () => {
  const [activeTab, setActiveTab] = useState("DOR");
  return (
    <>
      <Navbar />
      <TopSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <Faqs />
      {activeTab === "DORPlay" && <ResolveQuery />}
      <Footer />
    </>
  );
};

export default Service;
