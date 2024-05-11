import React from "react";

const News = () => {
  return (
    <div class="max-w-sm bg-transparent border border-white border-opacity-70 rounded-lg shadow ">
      <a href="#">
        <img class="rounded-t-lg" src="/assests/services/Services.png" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white ">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-white opacity-65">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button
          type="button"
          className="mt-7 select-none rounded-lg border border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <div className="opacity-50 hover:opacity-100">Read More</div>
        </button>
      </div>
    </div>
  );
};

export default News;
