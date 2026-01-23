
import React from 'react'
import { Link } from "react-router-dom"
//import images
import JesusChristAndTheProphet from "../assets/images/JesusChristAndTheProphet.png"
import JesusChrist from  "../assets/images/JesusChrist.jpg"
//import icons
import { FaAnglesRight } from "react-icons/fa6";

const Whatwebelieve = () => {
  return (

    <div className="wwb wrapper !py-3  mt-10 ">   
        <div className="wwbContent">
        <div className='w-full flex content-center right px-3'>
            <img className="wwb-TheLordJesusAndTheProphet w-full wwbImg" src={JesusChristAndTheProphet} alt="The Prophet" />
            <img className = 'wwb-TheLordJesus' src ={JesusChrist} />
        </div>
        <div className='wwbtext mt-0'>
            <h2>What We Believe</h2>
            <h3>The Lord Jesus Christ is the LORD GOD ALMIGHTY</h3>
            
            <div className="underline">
                <p></p>
            </div>
            
            <p>
                The Lord Jesus Christ is the LORD GOD ALMIGHTY and Saviour of all mankind from whom all things have been created and consist. God is currently establishing His Eternal Kingdom here on earth through the preaching of the Infallible Word of God by which whosoever believes and is baptized in Name of Jesus Christ and receives the baptism of the Holy Spirit is born again into the Body of Christ becomes the Bride of Christ.
            </p>
            &nbsp;
            <Link to="/what-we-believe"><button className="btn"><span>Read More </span> <FaAnglesRight /> </button></Link>
        </div>
        </div>
    </div>
  )
}

export default Whatwebelieve