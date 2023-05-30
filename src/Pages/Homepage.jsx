import React from 'react'
import HeroSection from '../components/HomepageComponent/HeroSection'
import Sponsors from '../components/HomepageComponent/Sponsors'
import HowDoesItWork from '../components/HomepageComponent/HowDoesItWork'
import FAQs from '../components/HomepageComponent/FAQs'
import Superpowers from '../components/HomepageComponent/Superpowers'
const Homepage = () => {
  return (
    <>

        <HeroSection />
        <Sponsors />
        <div  id="how-does-it-work"></div>
        <HowDoesItWork />
        <div id="superpowers" className='lg:mb-0 mb-24 '></div>
        <Superpowers />
        <div id="faqs" className='lg:mb-0 mb-24'></div>
        <FAQs />
    </>
  )
}

export default Homepage