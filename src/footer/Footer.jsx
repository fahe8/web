import React from "react";

const Footer = () => {
  return (
    <div className="container lg:w-full md:w-[790px] ">
      <ul className="grid grid-cols-1 md:grid-cols-6 *:gap-1 md:text-center">
        <div className="">
          <li className="mb-[19px]">
            <a href="">CBP Info Center's FAQ about I-94</a>
          </li>
        </div>
        <div className="">
          <li className="mb-[19px]">
            <a href="">Contact CBP</a>
          </li>
        </div>
        <div className="">
          <li className="mb-[19px]">
            <a href="">About CBP</a>
          </li>
        </div>
        <div className="">
          <li className="mb-[19px]">
            <a href="">Vulnerability Disclosure</a>
          </li>
        </div>
        <div className="">
          <li className="mb-[19px]">
            <a href="">Accessibility</a>
          </li>
        </div>
        <div className="">
          <li className="mb-[19px]">
            <a href="">Privacy Policy</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
