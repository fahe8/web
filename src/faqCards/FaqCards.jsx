import React from "react";

const FaqCards = () => {
  const cards = [
    {
      title:
        "How do I report my departure if I have an electronic I-94 and depart via land or ferry?",
      subtitle:
        "If you have a paper Form I-94 and depart by land or ferry, you can turn the form into t...",
    },
    {
      title:
        "What information must I provide in order to obtain my most recent I-94, travel history, or compliance check, or to apply for a provisional I-94?",
      subtitle:
        "To retrieve your most recent I-94 form, your travel history, or apply online for a new ...",
    },
    {
      title:
        "What travel records can I access?",
      subtitle:
        "CBP maintains records of arrivals to and departures from the United States. The “...",
    },
    {
      title:
        "Can I obtain travel records for previous or expired passports?",
      subtitle:
        "Yes. The website will provide travel history going back ten years from...",
    },
  ];
  return (
    <>
      {cards.map((card, index) => (
        <div
          key={index + "a"}
          className={`text-gray-700 text-[1.1em] h-[320px] p-[28px] px-[23px] pb-[25px] text-center border-solid border-[3px] border-[#d3c6ab] flex flex-col cursor-pointer ${index == 1 || index == 3 ? "bg-[#fefaf1]" : "bg-white"} ${index < cards.length - 1 ? "border-r-0" : ""} hover:bg-[#fdf4e3]`}
        >
          <span className="w-full text-[1.125em] font-bold text-[#624f32]">{card.title}</span>
          <span className="  my-[18px] mb-[20px] border-b border-[#d3c6ab] text-center relative flex justify-center items-center">
            <i className={`fa fa-comments-o absolute text-[18px] font-bold t  px-2 ${index == 1 || index == 3 ? "bg-[#fefaf1]" : "bg-white"}`}></i>
          </span>
          <span className="text-[1.1em] font-semibold text-[#333]">{card.subtitle}</span>
        </div>
      ))}
    </>
  );
};

export default FaqCards;
