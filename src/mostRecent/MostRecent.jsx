import React from 'react'

const MostRecent = () => {
  return (
    <section>      <div className="text-center bg-white py-4">
    <div className="container lg:w-full md:w-[790px] flex justify-center">
      <div className="">
        <h1 className="text-[#1c3764] text-3xl font-light text-center ">
          Welcome to I94 Know your status
        </h1>
        <sub className=" color-[#1c3764] text-xl">
          <strong>For Land Border and Selected Ferry Ports</strong>
          (Not Air/Sea)
        </sub>
        <span className="  my-[18px] mb-[20px] border-b border-[#1c3764] text-center relative flex justify-center items-center">
          <img
            className="absolute bg-white pt-4 w-12"
            src="/public/car.png"
            alt=""
          />
          <i
            className={`fa fa-comments-o  text-[18px] font-bold t  px-2`}
          ></i>
        </span>

        <p className=" text-[#1c3764] italic">
          For air and sea travelers, you will still be issued an I-94 during
          the admission process at the port of entry.
        </p>
      </div>
    </div>
  </div></section>
  )
}

export default MostRecent