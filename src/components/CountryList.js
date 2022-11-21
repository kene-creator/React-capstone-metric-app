/* eslint-disable react/prop-types */
import React from 'react';

const CountryList = (props) => {
  const { data } = props;

  return (
    <ul className="flex flex-wrap">
      {data.map((countryData, i) => (
        <li
          key={countryData.id}
          className={`basis-2/4 flex justify-center items-center flex-col border-b border-white ${
            i % 2 === 0 ? 'bg-[#DC4782]' : ''
          } ${i % 2 !== 0 ? 'bg-[#CF4278] border-l border-white' : ''}`}
        >
          <div>
            <img
              src={countryData.image}
              alt="Country flag"
              className="w-16 h-16 rounded-full mt-4 drop-shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <h3 className="text-white mt-4 mb-2 font-semibold text-center">
              {countryData.name}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
