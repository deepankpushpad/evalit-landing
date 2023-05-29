import React from 'react';
import images from '../../../constants/imageConstant';
const EvalitTests = () => {
  return (
    <div className="flex justify-center -z-20 mt-10">
      <div className="flex justify-evenly w-full flex-col lg:flex-row overflow-hidden ">
        <div className="flex flex-col justify-center items-center lg:w-1/2   font-karma text-center" data-aos="flip-left"
          data-aos-duration="1000"
        >
          <div className="flex gap-10 flex-col items-center">
          <h1 className="lg:text-[2rem] text-2xl text-secondary font-bold font-karma  tracking-wider  lg:p-0 lg:w-2/3 leading-[50px]">
              Pre-configured tests designed by experienced developers
            </h1>
            <p className="text-gray-55 text-2xl tracking-wide w-3/4 font-medium leading-10">
              We have tests designed and updated by professional coders working
              in the industry.
            </p>
          </div>
          <div className="flex flex-col  justify-start w-2/3">
            <div className="w-1/2 flex p-2">
              <img src={images.amazon} alt="evalitTests1" className='w-36 aspect-auto '/>
              <img src={images.directi} alt="evalitTests2" className='w-36 aspect-auto '/>
              <div></div>
            </div>
            <div className="w-full flex justify-end p-2">

              <img src={images.walmart} alt="evalitTests3" className='w-36 aspect-auto '/>
              <img src={images.pwc} alt="evalitTests4" className='w-36 aspect-auto '/>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 lg:w-1/2 w-full font-karma " data-aos="flip-right">
          <div className="overflow-x-auto font-karam flex w-full justify-center">
            <table className="w-4/5 text-sm text-left mb-20">
              <thead className="text-md font-light bg-tertiary ">
                <tr>
                  <th scope="col" className="px-6 py-3 ">
                    Test names
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Questions
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Difficulty
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-72">
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold  whitespace-nowrap"
                  ></th>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold  whitespace-nowrap"
                  >
                    Advanced Data Structures
                  </th>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">Easy</td>
                </tr>


                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold  whitespace-nowrap "
                  >
                    Junior Frontend Developer
                  </th>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">Hard</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold  whitespace-nowrap "
                  >
                    Linear Data Structures
                  </th>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">Medium</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold  whitespace-nowrap "
                  >
                    Senior Backend Developer
                  </th>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">Easy</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold  whitespace-nowrap "
                  >
                    Complex reasoning questions
                  </th>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">Easy</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold  whitespace-nowrap "
                  >
                    Algorithm crunching tests
                  </th>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">Hard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvalitTests;
