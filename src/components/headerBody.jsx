import React from 'react';

const HeaderBody = () => {
  return (
    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-end w-[93%] md:w-full">
        <div className="h-[22px] md:h-[26px] mb-1 md:mt-0 mt-2 relative w-1/4 md:w-full">
          <h1 className="m-auto text-gray-600_01 text-lg font-lato font-semibold">
            Edit Training “Working At Height”
          </h1>
        </div>
        <p className="md:ml-[0] ml-[625px] md:mt-0 my-[9px] text-[13px] text-gray-400_03 font-lato font-bold">
          Cancel
        </p>
        <button className="cursor-pointer font-bold leading-[normal] w-[147px] h-[35px] ml-[25px] text-center text-sm bg-yellow-900 text-white-A700 rounded-[5px]">
          Update & Save
        </button>
      </div>
    </div>
  );
};

export default HeaderBody;
