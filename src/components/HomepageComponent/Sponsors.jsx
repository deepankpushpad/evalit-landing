import React from 'react';
import  images  from '../../constants/imageConstant';
const Sponsors = () => {
  const { Zomato, Pepsi, GroupOn, Acko, BuyHatke } = images;
  const SponsorsData = [
    {
      id: 1,
      image: Zomato,
      className: 'w-32',
    },
    {
      id: 2,
      image: Pepsi,
      className: 'w-16',
    },
    {
      id: 3,
      image: GroupOn,
      className: 'w-32',
    },
    {
      id: 4,
      image: Acko,
      className: 'w-32',
    },
    {
      id: 5,
      image: BuyHatke,
      className: 'w-32',
    },
  ];

  return (
    <div className="flex justify-center items-center  flex-col gap-10">
      <div className='text-center'>
        <h1 className="text-lg text-gray-55 font-bold font-karma tracking-wider">
          Helping
          <span className="font-bold text-black"> 100+ </span>
          organisations with faster hiring.
        </h1>
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:ap-10 xs:grid-cols-2  gap-4">
        {SponsorsData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-center items-center w-full "
            >
              <img
                src={item.image}
                alt="sponsors"
                className={`aspect-auto  p-2  ${item.className}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsors;
