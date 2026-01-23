import React from 'react'
import { Link } from 'react-router-dom';

//import icons
import { MdEmail } from 'react-icons/md';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

///import imagea 
import GoogleImg from "../assets/images/google.png"


export const Footer = () => {

  const d = new Date();
  let year = d.getUTCFullYear();

  return (
    <div className="footerDiv"> 

    <div className="FooterColumns">
      <div>
          <h2>Subscribe </h2>
          <p>Subscribe to receive daily devotions and news letters to your e-mail or WhatsApp</p>
          Enter Your Email
          <form className="SubbsribeForm">
            <input type="email"  placeholder="Enter Your Email" /> 
            <button type="submit" > <IoSend /> </button>
          </form>

          <h6 className="FooterOr">OR</h6>

          <div className="continueWithGoogle">
          
          <Link to = "/">
          <img src = {GoogleImg} alt="Google" /> Continue with Google
          </Link>
           </div>


          <h6 className="FooterOr">OR</h6>
           <form >
           <label>Link Your WhatsApp Number
          <div className="whatsAppInputDiv">
          <input type="text" placeholder="Enter Your WhatsApp Number"/>
           </div>
          </label>
          <button type="Submit" className="linkWhatsAppBtn">          
          <FaWhatsapp  /> &nbsp; Submit
          </button>
          </form>


      </div>

      <div>
         <h2>Send Us A Message</h2>
        <form className="ContactForm">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email"required  />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Your Message"></textarea>
          <button><IoSend />&nbsp; Submit</button>
        </form>
      </div>


      <div>
        <h2>Quick Links</h2>
        <ul className="QuickLinks" >
          <li><Link to="/sermons">Sermons</Link></li>
          <li><Link to="/daily-devotion">Daily Devotion</Link></li>
          <li><Link to="/our-music">Our Music</Link></li>
          <li><Link to="/news-letter">News Letters</Link></li>
        </ul>

        <h2>Follow Us / Contact Us</h2>
        <ul className="FollowUs">
          <li><Link to="/"> <MdEmail className="footer-icon" /> innerveilministries@gmail.com </Link></li>
          <li><Link to="/"><FaPhoneVolume className="footer-icon" /> +256 772 882224 </Link></li>
          <li><a href="http://www.facebook.com/innerveilministries"><FaSquareFacebook className="footer-icon" /> @innerveilministries</a></li>
          <li><a href="https://www.youtube.com/@innerveilministries"><FaYoutube className="footer-icon" /> @innerveilministries</a></li>
          <li><Link to="/"><FaGlobeAfrica className="footer-icon" /> www.innerveilministries.org </Link> </li>
        </ul>


      </div>  

    </div>

    <div className="Copyright">
      <p>Copyright {year} &copy; Inner Veil Ministries, Proudly Deisgned & Hosted By Msooza Tech. Ltd +256 775-301941</p> 
    </div>

    </div>
  )
  
}


export default Footer