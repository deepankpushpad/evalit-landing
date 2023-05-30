import React,{useEffect} from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Homepage from './Pages/Homepage';
import Footer from './components/common/Footer/Footer';
import Aos from 'aos';
import Loader from './UI/Loader/Loader';
const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  //show until page loads
  const [showLoader, setShowLoader] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (showLoader) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
};

export default App;
