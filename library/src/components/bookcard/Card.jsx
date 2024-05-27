import React from "react";
import { Buttons } from "../buttons/Buttons";

export const Card = ({ cardItems }) => {
  return (
    <div className="m-2 flex flex-wrap justify-center ">
      {cardItems?.length ? (
        cardItems.map((item) => (
          <div
            key={item?.id}
            className="flex flex-col w-full m-1 md:max-w-sm xl:max-w-xs bg-gray border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-50"
          >
            <a href="#">
              <img className="p-8 rounded-t-lg" src="" alt="bookimg" />
            </a>
            <div>
              <a href="#">
                <h5 className="m-2 text-xl font-semibold tracking-tigt text-gray-900 dark:text-white md:text-3xl md:mt-2 mb-1">
                  Title: {item?.title}
                </h5>
              </a>
            </div>
            <div className="m-2 flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                Author : {item?.author}
              </span>
            </div>
            <div className="flex items-center justify-between p-3">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {item?.price}$
              </span>
              <Buttons bookDetails={item} />
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
