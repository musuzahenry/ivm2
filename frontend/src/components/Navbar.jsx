import React, { useState } from 'react' //import react
import { Link, useNavigate } from 'react-router-dom';

//inport images
import Logo from "../assets/images/logo.png";

//import icons
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {

//initiate navigaion variables
const navigate = useNavigate();

//display navigation menu or not
const [displayMenu, setDisplayMenu] = useState(false)
const [displaySubMenu, setDisplaySubMenu] = useState(false)
/*
This navmenu constant contains the main menu for our website
Sub menunus are added are objects inside objects
*/
  
  const links = [
    {
      "label":"Home",
       "link":""
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
      "label":"Evangelism",
       "link":"",
       "sublinks":[
            {
          "label":"Radio Programs",
          "link":"radio-programs"
            },
            {
          "label":"The Missionary Field",
          "link":"missionary-field"
            },

       ]
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
              "label":"Our Music",
              "link":"our-music"
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

            <div className="logoDiv">
      
              <Link to="/" 
                    onClick = { (e) =>{
                     e.preventDefault()
                     //check whether these are true before you navigate
                     displaySubMenu && setDisplaySubMenu(!displaySubMenu)
                     displayMenu && setDisplayMenu(!displayMenu) 
                      navigate("/") 
                    }   
                  } 
                >
                   <img src={Logo} alt="logo" />
               </Link>
              
              <GiHamburgerMenu className="menuIcon"                      
                 onClick = { (e) =>{
                  setDisplaySubMenu(!displaySubMenu)
                  setDisplayMenu(!displayMenu)
                  e.preventDefault()               
                 }   
                } 
              />
              </div>

      <ul className="mainMenu wideSreecmenu">

        {
          links.map((element, key)=>(
         
           <li key={key}>

            <Link     
              onClick = { (e) =>{
                setDisplaySubMenu(!displaySubMenu)
                element.sublinks && element.sublinks.length>0 &&  e.preventDefault()               
              }     
            }   

              to={"/"+element.link}><span>{element.label}</span>
            </Link>

            {// display sumenu only if displaysubmene us true onclick
            displaySubMenu && element.sublinks && element.sublinks.length>0 &&(
             <ul className="Subment">
              {
                element.sublinks.map((subelement, subkey)=>(
                  
                   <li key ={subkey} >
                    <Link onClick = {() =>{
                        setDisplaySubMenu(!displaySubMenu);
                      }
                    }
                     
                     to={"/"+subelement.link}>
                    <span>{subelement.label}</span>
                    </Link>
                    </li>
                ))
              }
              
              </ul>

           )}
           </li>
           
          ))
        }

      </ul>


      <ul className="mainMenu mobileMenu" style={{display:  displayMenu ? `block` : `none` }}>

        {
          links.map((element, key)=>(
           <li key={key}>
            <Link   
                onClick = {(e) =>{
                setDisplaySubMenu(!displaySubMenu);     
                element.sublinks && element.sublinks.length>0 ?  
                        e.preventDefault() : setDisplayMenu(!displayMenu);
                }
            }
              to={"/"+element.link}><span>{element.label}</span>
            </Link>
           {// display sumenu only if displaysubmene us true onclick
           displaySubMenu && element.sublinks && element.sublinks.length>0 &&(
             <ul className="Subment">
              {
                element.sublinks.map((subelement, subkey)=>(
                   <li key ={subkey} >
                    <Link 
                        onClick = {() =>{
                        // when click sub menu, do the followinf
                        setDisplaySubMenu(!displaySubMenu); //hide subment
                        setDisplayMenu(!displayMenu); //then hide main menu
                      }
                    }  
                       //then do the routing to the desired link
                       key={subkey+subelement.link} to={"/"+subelement.link}>
                       <span>{subelement.label}</span>
                    </Link>
                    </li>
                ))
              }
              
              </ul>

           )}
           </li>
          ))
        }

      </ul>
      </>
    </div>
  )
}

export default Navbar


