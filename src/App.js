import React,{useEffect} from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Homepage from './Pages/Homepage';
import Footer from './components/common/Footer/Footer';
import Aos from 'aos';
const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
};

export default App;
