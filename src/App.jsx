import "./App.css";

import NavBar from "./header/NavBar";
import AnnoucementBody from "./announcementBody/AnnoucementBody";
import PanelCards from "./panelCards/PanelCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Instructionpdf from "./instructionpdf/Instructionpdf";
import FaqCards from "./faqCards/FaqCards";

function App() {
  return (
    <>
      <header className="">
        <div className="us-official">
          <div className="container lg:w-full md:w-[790px]">
            {" "}
            Official Website of the Department of Homeland Security{" "}
          </div>
        </div>
        {/* LOGOS NAVBAR */}
        <NavBar />
        <AnnoucementBody />

        <Instructionpdf />

        <section>
          <div className="home-wrapper">
            <div className="container lg:w-full md:w-[790px] text-center ">
              <div className=" pb-[40px]">
                <div className=" mx-auto py-[24px] lg:py-[60px]  w-[80%] ">
                  <div className="bg-[rgba(22,57,99,0.85)] py-6 w-full">
                    <h1 className="text-[1.5em] lg:text-[2.15em] font-extralight m-0 w-[80%] mx-auto px-[24px] text-white">
                      Official Site for Travelers Visiting the United States:
                      Apply for or Retrieve Form I-94, Request Travel History
                      and Check Travel Compliance
                    </h1>
                    <p className="text-[0.85em] lg:text-[1.4em] w-[98%] m-0 mx-auto mt-5 text-white">
                      International travelers visiting the United States can
                      apply for or retrieve their I-94 admission number/record
                      (which is proof of legal visitor status) as well as
                      retrieve a limited travel history of their U.S. arrivals
                      and departures.
                    </p>
                  </div>
                </div>

                <div className="w-full grid xl:grid-cols-4 lg:grid-cols-2 lg:gap-4 sm:grid-cols-7">
                  <PanelCards />
                </div>
              </div>
            </div>

            <div className=" hidden lg:block bg-white text-center pt-6 pb-14">
              <h3 className="">
                Frequently Asked Questions
                <br />
                <span>related to this page</span>
              </h3>
              <div className="bg-[#ede7dc] p-[10px] grid grid-cols-4 container lg:w-full md:w-[790px] my-6">
                <FaqCards />
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default App;
