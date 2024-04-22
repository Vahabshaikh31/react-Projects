
import Navbar from './Components/Navbar'
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="homepage">
     <Navbar/>
     <Section1/>
      {/* <Section2/> */}
     

    </div>
  );
};

export default Homepage;
