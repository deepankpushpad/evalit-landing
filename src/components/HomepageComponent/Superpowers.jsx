import React from 'react';
import images from '../../constants/imageConstant';
const Superpowers = () => {
  const superpowersData = [
    {
      title: 'Copy - Paste Prohibition',
      image: images.clip,
    },
    {
      title: 'Randomised Questions',
      image: images.x,
    },
    {
      title: 'Browser switch alert',
      image: images.key,
    },
    {
      title: 'Shuffle question order',
      image: images.puzzle,
    },
    {
      title: 'Sudden photo proctoring',
      image: images.account,
    },
  ];

  return (
    <div>
      <div className='flex justify-center items-center lg:mt-40' >
        <h1 className="lg:text-4xl text-3xl text-primary font-bold font-roboto lg:p-0 p-2 tracking-widest text-center  leading-[50px]"  style={{
            textShadow: '0px 1px, 1px 0px, 1px 0px',
          }}>
          Robust invigilation checks
        </h1>
      </div>
      <div className="flex justify-around  lg:justify-center flex-wrap gap-4 mt-10 lg:mt-16">
        {superpowersData.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex justify-center flex-col items-center lg:p-4 "
            >
              <img src={item.image} alt={item.title} className="w-16 h-16" />
              <h1 className="text-md   font-karma text-center w-2/3">
                {item.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Superpowers;
