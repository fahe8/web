import React from "react";

const PanelCards = () => {
  const cards = [
    {
      image: "/public/car.png",
      title:
        "Visiting the U.S. & Arriving Via a Land Border or Selected Ferry?",
      text1:
        "A Form I-94 is needed by all visitors except: U.S. Citizens, returning resident aliens, aliens with immigrant visas, and most Canadian citizens visiting or in transit. Travelers will be issued an I-94 during the admission process at the port of entry. If you are traveling via a land border or by ferry from selected ports, you may apply for an I-94 in advance here, saving time while at the port of entry later.",
      text2:
        "Reference FAQs for specific ferry ports accepting I-94 Provisionals.",
      textButton: "Apply FOR new I-94",
      textButtonExtra: {
        one: "(Land Border/Selected Ferry",
        two: "Travelers Only",
      },
    },
    {
      image: "/public/doc.png",
      title: "Already Visiting & Need Proof of Visitor Status?",
      text1:
        "A traveler lawfully admitted (or paroled) into the U.S. may look up their most recent Form I-94 going back to 1983 for most classes of admission (or parole), and indefinitely for certain classes, such as diplomats and those admitted under the Compacts of Free Association. The corresponding Form I-94 may then be printed here. This is considered your lawful record of admission.",
      text2:
        "If someone requests your admission information, this is the form you would provide.",
      textButton: "get most recent I-94",
      textButtonExtra: {},
    },
    {
      image: "/public/bag.png",
      title: "Need A History Of Your Arrivals & Departures?",
      text1:
        "View your U.S. arrival and departure history for the past 10 years (certain types of travel history may not be provided). Please know, this travel history is a tool to assist you but not an official record for legal purposes",
      text2: "",
      textButton: "view travel history",
      textButtonExtra: {},
    },
    {
      image: "/public/red.png",
      title: "How Much Longer May I Remain in the U.S.?",
      text1:
        "View your compliance with the terms of your admission into the U.S. here. Please know, this tool is to assist you but is not an official record for legal purposes.",
      text2:
        "Only certain classes of Visa Waiver Program admissions are currently able to utilize this tool.",
      textButton: "view travel history",
      textButtonExtra: {},
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <div
          key={index}
          className="border-[10px] border-[rgb(255,255,255,0.5)] lg:h-[666px]"
        >
          <div className="flex flex-col lg:bg-white px-[26px] pb-[10px] pt-0 h-full">
            <div className="hidden lg:block">
              <div className=" flex justify-center p-8">
                <img src={card.image} alt="" />
              </div>
              <h2>{card.title}</h2>
              <span className="w-1/4 h-auto my-4 mx-auto border-b-[3px] border-gray-300"></span>
              <p className="  text-gray-700 text-[1.125em] h-[374px]">
                {card.text1}
                <br />
                <br />
                {card.text2 !== "" && card.text2}
              </p>
            </div>
            <button className=" text-white bg-[#0071bc] border-2 border-solid border-[#205493] px-[30px] py-[8px]">
              <span>
                <strong className=" text-[1.125em] uppercase">
                  {card.textButton}
                </strong>
                <br />
                {Object.keys(card.textButtonExtra).length !== 0 && (
                  <sub className="text-[10px]">
                    {card.textButtonExtra.one}
                    <br />
                    {card.textButtonExtra.two}
                  </sub>
                )}
              </span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PanelCards;
