import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry } from '../src/store/action';
import Nav from '../src/components/Nav';

const CountryPage = () => {
  const country = useSelector((state) => state.country, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  return (
    <>
      <Nav>Country</Nav>
      <div>
        <div className="flex p-5 bg-[#FC5193] items-center">
          <img
            src={country.image}
            alt="Country flag"
            className="w-40 h-40 rounded-full ml-8"
          />
          <h3 className="text-3xl text-white ml-10 font-mono font-bold">
            {country.name}
          </h3>
        </div>

        <div className="text-white bg-[#DF4782]">
          <p className="ml-10">Country Information</p>
        </div>

        <div>
          <div className=" py-10 px-10 bg-[#E94987] text-white flex justify-between items-center">
            <p className="text-2xl font-semibold font-mono">Capital:</p>
            <p>{country.capital}</p>
          </div>
          <div className=" py-10 px-10 bg-[#CE4176] text-white flex justify-between items-center">
            <p className="text-2xl font-semibold font-mono">Population:</p>
            <p>{country.population}</p>
          </div>
          <div className=" py-10 px-10 bg-[#E94987] text-white flex justify-between items-center">
            <p className="text-2xl font-semibold font-mono">Timezone:</p>
            <p>{country.timezone}</p>
          </div>
          <div className=" py-10 px-10 bg-[#CE4176] text-white flex justify-between items-center">
            <p className="text-2xl font-semibold font-mono">Subregion</p>
            <p>{country.subregion}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
