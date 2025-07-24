import React from 'react'

//import icons
import { MdEmail } from 'react-icons/md';
import { FaPhoneVolume } from "react-icons/fa6";


export const Footer = () => {

  const d = new Date();
  let year = d.getUTCFullYear();

  return (
    <div className="footerDiv">
    <p > Email: info@innerveilministries.org Contact: +256 772 882224 </p>
      <p>Copyright {year} &copy; Inner Veil Ministries</p>     
    </div>
  )
  
}


export default Footer