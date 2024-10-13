"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FaqsAccordion from "./FaqsAccordion";

import "react-tabs/style/react-tabs.css";

const Faqs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <h2 className="font-semibold text-sm sm:text-base md:text-lg lg:text-text-3xl xl:text-4xl text-center mb-6 sm:mb-8 md:mb-8 xl:mb-10">
          Frequently Asked Questions
        </h2>

        <>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className="border-none flex items-center flex-wrap gap-2 sm:gap-2.5 md:gap-3 xl:gap-4 mb-4">
              <Tab className="text-[10px] md:text-[12px] leading-[1.1] border border-white bg-transparent py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3.5 !rounded-[30px] cursor-pointer">
                Onboarding
              </Tab>
              <Tab className="text-[10px] md:text-[12px] leading-[1.1] border border-white bg-transparent py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3.5 !rounded-[30px] cursor-pointer">
                Subscription
              </Tab>
              <Tab className="text-[10px] md:text-[12px] leading-[1.1] border border-white bg-transparent py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3.5 !rounded-[30px] cursor-pointer">
                Billing & Pricing
              </Tab>
              <Tab className="text-[10px] md:text-[12px] leading-[1.1] border border-white bg-transparent py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3.5 !rounded-[30px] cursor-pointer">
                Account
              </Tab>
              <Tab className="text-[10px] md:text-[12px] leading-[1.1] border border-white bg-transparent py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3.5 !rounded-[30px] cursor-pointer">
                Streaming
              </Tab>
              <Tab className="text-[10px] md:text-[12px] leading-[1.1] border border-white bg-transparent py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3.5 !rounded-[30px] cursor-pointer">
                Warranty
              </Tab>
            </TabList>
            <TabPanel>
              <FaqsAccordion title="How to set up the DOR TV?" />
              <FaqsAccordion
                title="The TV is delivered, when will the technician visit?"
                description="After the delivery of your DOR TV, a technician will visit within 24-72 hours to assist with the installation and setup. You should receive a notification or call from the service provider to confirm the appointment details."
              />
              <FaqsAccordion title="Can I select the same technician for a subsequent visit?" />
              <FaqsAccordion title="A visit was scheduled, but the technician is still unavailable." />
              <FaqsAccordion title="How do I reschedule my appointment?" />
              <FaqsAccordion title="Are there any online tutorials or videos that can assist me with the installation process?" />
            </TabPanel>
            <TabPanel>
              <FaqsAccordion />
            </TabPanel>
            <TabPanel>
              <FaqsAccordion />
              <FaqsAccordion />
            </TabPanel>
            <TabPanel>
              <FaqsAccordion />
              <FaqsAccordion />
              <FaqsAccordion />
            </TabPanel>
            <TabPanel>
              <FaqsAccordion />
              <FaqsAccordion />
              <FaqsAccordion />
              <FaqsAccordion />
            </TabPanel>
            <TabPanel>
              <FaqsAccordion />
              <FaqsAccordion />
              <FaqsAccordion />
              <FaqsAccordion />
              <FaqsAccordion />
            </TabPanel>
          </Tabs>
        </>
        <Link
          href={"#"}
          className="text-[#F6443C] font-semibold text-[12px] sm:text-sm xl:text-base leading-[1.5] mt-4 pb-6 lg:pb-2 xl:pb-10 flex items-center"
        >
          See All
        </Link>
        <p className="text-[#CDCDCD] text-[12px] sm:text-sm xl:text-base leading-[1.3] mb-1 sm:mb-2 flex items-center justify-center sm:justify-start">
          Still have questions?
        </p>
        <Link
          href={"#"}
          className="text-[#F6443C] font-semibold text-[12px] sm:text-sm xl:text-base pb-6 lg:pb-8 xl:pb-10 flex items-center gap-x-1 justify-center sm:justify-start"
        >
          Visit the help centre
          <Image
            src="./assets/images/home/right-chev-red.svg"
            width="9"
            height="13"
            alt=""
            className="w-2.5 h-auto"
          />
        </Link>
      </div>
    </section>
  );
};

export default Faqs;
