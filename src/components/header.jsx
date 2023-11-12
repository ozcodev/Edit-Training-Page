import React, { useState, useRef, useEffect } from 'react';
import { ProfileDropdown, LangDropdown } from './Dropdowns';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLangVisible, setLangVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    console.log('clicked');
  };

  const langeDropdown = () => {
    setLangVisible(!isLangVisible);
    console.log('clicked');
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
      setLangVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 shadow-bs w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[15px] mt-3 mx-auto w-[89%]">
        <div className="flex sm:flex-col flex-row sm:gap-[43px] items-center justify-between w-[49%] md:w-full">
          <img
            className="h-[45px] md:h-auto object-cover"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <input
            name="searchbox"
            placeholder="Quick search ..."
            className="placeholder:text-gray-400 leading-[normal] p-0 text-[13px] text-left w-[65%] rounded-[5px] h-[32px] bg-gray-200 text-black  pb-[13px] pt-[17px] px-[13px] pl-[35px] bg-cover"
            style={{
              backgroundImage: 'url(images/img_search.svg)',
              backgroundSize: '15px 15px ',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px center',
            }}
          />
        </div>
        <ul className="flex flex-row sm:hidden items-start justify-center md:ml-[0] ml-[31px] w-1/4 md:w-full common-row-list">
          <li>
            <a
              href="javascript:"
              className="hover:font-normal hover:text-blue-500 text-gray-400_02 text-sm"
            >
              <span className="text-lg">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:"
              className="hover:font-normal ml-[27px] text-blue-500 text-sm"
            >
              <span className="text-lg">Trainings</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:"
              className="hover:font-normal ml-7 hover:text-blue-500 text-gray-400_02 text-sm"
            >
              <span className="text-lg">Users</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:"
              className="hover:font-normal ml-7 hover:text-blue-500 text-gray-400_02 text-sm"
            >
              <span className="text-lg">More</span>
            </a>
          </li>
        </ul>

        <div
          className="flex flex-row gap-[27px] items-center justify-between md:ml-[0] ml-[99px] w-[18%] md:w-full"
          ref={dropdownRef}
        >
          <img
            className="h-[18px]"
            src="images/img_notification.svg"
            alt="notification"
          />
          <img
            className="h-[19px] w-[19px] cursor-pointer"
            src="images/img_minimize.svg"
            alt="minimize"
            onClick={langeDropdown}
          />
          {isLangVisible && (
            <div className="absolute top-10 right-36 bg-white-A700 border rounded shadow-md">
              <LangDropdown />
            </div>
          )}
          <div
            className="flex flex-row gap-1.5 items-center justify-between w-[96%] md:w-full"
            ref={dropdownRef}
          >
            <div className="flex flex-row gap-1.5 items-center justify-start">
              <img
                className="h-8 md:h-auto rounded-[50%] w-8 cursor-pointer"
                src="images/img_profile.png"
                alt="profile"
                onClick={toggleDropdown}
              />
              {isDropdownVisible && (
                <div className="absolute top-10 right-11 bg-white-A700 border rounded shadow-md">
                  <ProfileDropdown />
                </div>
              )}

              <div className="flex flex-col items-start justify-start">
                <h1 className="text-[13px] text-gray-600 font-semibold">
                  Blaise Defloo
                </h1>
                <p className="text-[11px] text-gray-500 font-[500]">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
