import React, { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import useWindowSize from '../hooks/useWindowSize';
import AppContext from '../context/AppContext';

const CustomSwitch = ({ currOption, setOption, options = [] }) => {
  const { theme } = useContext(AppContext);
  const { isMobile } = useWindowSize();

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="rounded-full shadow-lg bg-white dark:bg-gray-700 dark:text-white flex items-center justify-center w-fit p-1 transition-all duration-300">
        {options.map((option) => {
          const isSelected = currOption === option;

          return (
            <div
              key={option}
              className={`transition-all duration-200 ease-in-out
                px-3 py-2 text-sm rounded-full flex items-center justify-center cursor-pointer
                ${isSelected ? 'bg-indigo-500 text-white shadow-md' : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600'}
              `}
              onClick={() => setOption(option)}
            >
              {option === 'dark' && <MdOutlineDarkMode className="text-lg" />}
              {option === 'light' && <MdOutlineLightMode className="text-lg" />}
              {option === 'C' && '°C'}
              {option === 'F' && '°F'}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSwitch;
