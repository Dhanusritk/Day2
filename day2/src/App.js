import './App.css';
import pic from "../src/Images/logo.jpg";
import pic1 from "../src/Images/Car5.jpg";
import pic2 from "../src/Images/Car6.jpg"
import Armors from './pages/Guns';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <section id="header">
    <nav>
        <a href=""><img src={pic}/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">About</a></li>
                    <li><a href="#header3">Purchase</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>Mercedes Benz</h1><br/>
    <p>
      On land, on water and in the air
    </p><br/><br/><br/><br/>
    <a href="https://www.mercedes-benz.co.in/passengercars.html" target="_blank" >Learn more</a>
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
              Our Recommendations 
                </h2><br/>
                <div class="img2">
                    <img src={pic1} alt="" /><img src={pic1} alt="" /><br/><br/>
                    <img src={pic2} alt=""/> <img src={pic2 } alt=""/>
                </div>
                <h6>Buy your new Mercedes-Benz Online<br/>      
                </h6><br/>
          <h6> <i>Browse the Mercedes-Benz Online Showroom Today</i><br/><br/></h6> 
            <div>
                <a class="slots" href="https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/online-showroom-landingpage.html" target="_blank">Find Available Cars </a>
            </div> 
        </div>
    </nav>
</section>
    <Armors/>    
    <Contact/>
    </div>
  );
}

export default App;
