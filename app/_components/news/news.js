import React from "react";

const News = ({ title, description, image }) => {
  return (
    <div className="max-w-sm bg-transparent border dark:border-black border-white border-opacity-70 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight dark:text-black text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal dark:text-black text-white opacity-65">
          {description}
        </p>
        <button
          type="button"
          className="mt-7 select-none rounded-lg border dark:text-black dark:border-black border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <div className="opacity-50 hover:opacity-100">Read More</div>
        </button>
      </div>
    </div>
  );
};

export default News;
