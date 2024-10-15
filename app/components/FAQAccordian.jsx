"use client";
import { useState } from "react";
import Image from "next/image";

import OuterAccordian from "../(pages)/faqs/components/OuterAccordian";

const FAQAccordian = () => {
  const [activeOuterAccordion, setActiveOuterAccordion] = useState(0);

  const faqData = [
    {
      category: "Onboarding",
      questions: [
        "How to set up the DOR TV?",
        "The TV is delivered, when will the technician visit?",
        "Can I select the same technician for a subsequent visit?",
        "A visit was scheduled, but the technician is still unavailable",
        "How do I reschedule my appointment?",
        "Are there any online tutorials or videos that can assist me with the installation process?",
        "How can I provide feedback about my installation experience or the service overall?",
        "How do I pair the remote icon showing in my app with the TV?",
        "How to stream DOR subscriptions on your computer, mobile phone, tablet, and TV?",
        "How many concurrent logins can be done?",
        "Can I play the same content on a companion app and TV simultaneously?",
        "Can I download the content on my companion app?",
        "How frequently do I need to update this app?",
        "If I make any change on the app, such as adding shows to my favorites, or an edited watchlist, will it also reflect the same on TV?",
        "Can I renew my plan through the companion app?",
        "Do you have a child lock feature?",
      ],
    },
    {
      category: "Subscription",
      questions: [
        "What are the plans available and where can I see it?",
        "How can I cancel the subscription?",
        "Do you have the auto-renew option?",
        "How will I resubscribe, if I have already canceled the subscription? What is the threshold for the activation of the subscription?",
        "If I cancel the subscription, when will I receive the deposit amount?",
        "I have made the deposit amount of Rs. XXX/-. I want to cancel the plan. Will I get a refund of the complete deposit amount?",
        "2 days back I paid for my subscription, but now I need to cancel the plan. Will I get a refund for the same?",
      ],
    },
    {
      category: "Billing & Pricing",
      questions: [
        "How do subscription billing cycles work?",
        "How to find which subscriptions are billed?",
        "How to review my subscriptions and other charges?",
        "Can I have multiple accounts with the same mobile number? If yes, how will I manage my bills?",
        "How to view my purchase history and charges on my account?",
        "How will I upgrade my subscription from Plan A to Plan B?",
        "I want to downgrade from 55” TV to 43” TV from next month. What is the procedure? I need a refund amount for the difference in deposit.",
        "I want to make a 1 shot payment for 12 months. Is that possible? If yes, how much do I need to pay?",
      ],
    },
    {
      category: "Account",
      questions: [
        "What is a DOR account?",
        "How to create an account? How do I log in to TV?",
        "How do I secure the account?",
        "Why can't I receive an email with a verification code?",
        "Why is the verification code I received unusable?",
        "How will I close the account?",
      ],
    },
    {
      category: "OTT Platform",
      questions: [
        "Can you recommend some popular shows and movies currently available on your platform?",
        "How can I find content that suits my preferences or is similar to what I've enjoyed in the past?",
        "Are there any new releases or upcoming content additions that I should look out for?",
        "How often do you update your content library, and how can I stay informed about these updates?",
        "What exclusive or original content does your platform offer, and how can I access it?",
        "How can I customize my content recommendations or manage different viewing profiles?",
        "Can I set up parental controls or content restrictions for children's profiles?",
        "Are there any interactive features or additional content, example, behind-the-scenes or director's commentary?",
        "How can I access subtitles, different audio tracks, or dubbing options for content on your platform?",
        "Can I download content for offline viewing, and if so, how does it work?",
      ],
    },
    {
      category: "Assurance",
      questions: ["What is the warranty Policy?"],
    },
  ];

  return (
    <div>
      {faqData.map((item, index) => {
        return (
          <div className="mt-10" key={index} id={item.category}>
            <OuterAccordian
              category={item.category}
              questions={item.questions}
              setActiveOuterAccordion={setActiveOuterAccordion}
              activeOuterAccordion={activeOuterAccordion}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordian;
