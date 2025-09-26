import React from 'react'
import Maplocation from '../components/Maplocation'


//import images
import contactImg from "../assets/images/contactUs.jpg"

const ContactUs = () => {
  return (

    <>

        <div className="w-100 PageHeading" style={{ backgroundImage: `url(${ contactImg })` }} >
          <div class="OverLay">
             <h1>Contact Us</h1>
          </div>        
        </div>


    <div className="wrapper contactUs">
    <table>

       <tr>
            <td className="contactLeft"> Phone: </td> 
            <td className="contactRight"> +256 772 882224</td>
        </tr>

        <tr>
            <td className="contactLeft">Email: </td> 
            <td className="contactRight">  innerveilministries@gmail.org</td>
        </tr>

        <tr>
            <td className="contactLeft"> FaceBook</td> 
            <td className="contactRight"> @innerveilministries</td>
        </tr>
          
        <tr>
            <td className="contactLeft">YouTube: </td> 
            <td className="contactRight"> @innerveilministries</td>
        </tr>

    </table>


   <p className="contactLocation"> <b><i>Mailo Mbili Opposite Hass Petro Station along Jinja-Kampala Highway</i></b></p>

    </div>
    <Maplocation />
    </>

  )
}

export default ContactUs