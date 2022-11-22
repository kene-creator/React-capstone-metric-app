/* eslint-disable react/prop-types */
import React from 'react';
import DataPage from '../src/pages/DataPage';

const CountryList = () => {
  const data = [
    {
      id: 23,
      image: 'https://flagcdn.com/w320/se.png',
      population: 234510,
      languages: 'English',
      capital: 'London',
      timezone: 'UTC +1',
      subregion: 'Central Europe',
    },
  ];

  return (
    <div className="flex flex-wrap">
      {data.map((countryData, i) => (
        <DataPage
          key={countryData.id}
          index={i}
          id={countryData.id}
          image={countryData.image}
          population={countryData.population}
          name={countryData.name}
          languages={countryData.languages}
          capital={countryData.capital}
          timezone={countryData.timezone}
          subregion={countryData.subregion}
        />
      ))}
    </div>
  );
};

export default CountryList;
