import React, { useState } from 'react' //import react
import { Link } from 'react-router-dom';

//inport images
import Logo from "../assets/images/logo.png";

//import icons
import { FaSearch } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhoneVolume } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {

//display navigation menu or not
const [displayMenu, setDisplayMenu] = useState(false)
/*
This navmenu constant contains the main menu for our website
Sub menunus are added are objects inside objects
*/
  
  const links = [
    {
      "label":"Home",
       "link":"/"
    }, 
    {
      "label":"Live Stream",
       "link":"live-stream"
    },
    
    {
      "label":"Who We Are",
       "link":"who-we-are"
    }, 

    {
      "label":"What We Believe",
       "link":"what-we-believe"
    },
    {
      "label":"Media",
       "link":"media",
       "sublinks":[
          {
          "label":"Sermons",
          "link":"sermons"
            },
            {
              "label":"Youth Music",
              "link":"youth-music"
            },
            {
              "label":"Daily Devotion",
              "link":"daily-devotion"
            },
            {
              "label":"News Letter",
              "link":"news-letter"
            },
       ]  
    },    
    {
      "label":"Contact Us",
       "link":"contact-us"
    },
]



  return (

    <div className="Header">

      <>
      <div className='topDiv'>
        <p className='email'>
          <MdEmail /> &nbsp;info@innerveilministries.org
          &nbsp; &nbsp; <FaPhoneVolume /> &nbsp;+256 772 882224
        </p>

        <form mehod='post'>
          <input type='text' name='search' placeholder='Search...' />
          <button type="submit"><FaSearch /></button>
        </form>
      </div>
      
      <div className="logoDiv">

        <Link to="/" ><img src={Logo} alt="logo" /></Link>
        
        <GiHamburgerMenu className="menuIcon" 
          onClick={()=> setDisplayMenu(!displayMenu)}
        />
        </div>
   
      <ul className="mainMenu wideSreecmenu">

        {
          links.map((element, key)=>(
            <>
           <li>
            <Link key={key} to={"/"+element.link}><span>{element.label}</span></Link>
           {element.sublinks && element.sublinks.length>0 &&(
             <ul className="Subment">
              {
                element.sublinks.map((subelement, subkey)=>(
                   <li key ={subkey} >
                    <Link key={subkey+subelement.link} to={"/"+subelement.link}>
                    <span>{subelement.label}</span>
                    </Link>
                    </li>
                ))
              }
              
              </ul>

           )}
           </li>
           </>
          ))
        }

      </ul>


      <ul className="mainMenu mobileMenu" style={{display:  displayMenu ? `block` : `none` }}>

        {
          links.map((element, key)=>(
            <>
           <li>
            <Link key={key} to={"/"+element.link}><span>{element.label}</span></Link>
           {element.sublinks && element.sublinks.length>0 &&(
             <ul className="Subment">
              {
                element.sublinks.map((subelement, subkey)=>(
                   <li key ={subkey} >
                    <Link key={subkey+subelement.link} to={"/"+subelement.link}>
                    <span>{subelement.label}</span>
                    </Link>
                    </li>
                ))
              }
              
              </ul>

           )}
           </li>
           </>
          ))
        }

      </ul>
      </>
    </div>
  )
}

export default Navbar


