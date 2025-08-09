
import React from 'react'

//import images
import JesusChrist from "../assets/images/JesusChrist.jpg"

//import icons
import { FaAnglesRight } from "react-icons/fa6";

const Whatwebelieve = () => {
  return (

    
    <div className="wwb wrapper">   
        <div className="wwbContent">
        <div className='wwbImg'>
            <img src={JesusChrist} alt="What We Believe" />
        </div>
        <div className='wwbtext'>
            <h2>What We Believe</h2>
            <h3>The Lord Jesus Christ is the LORD GOD ALMIGHTY</h3>
            
            <div className="underline">
                <p></p>
            </div>
            
            <p>
                The Lord Jesus Christ is the LORD GOD ALMIGHTY and Saviour of all mankind from whom all things have been created and consist. God is currently establishing His Eternal Kingdom here on earth through the preaching of the Infallible Word of God by which whosoever believes and is baptized in Name of Jesus Christ and receives the baptism of the Holy Spirit is born again into the Body of Christ becomes the Bride of Christ.
            </p>
            &nbsp;
            <a><button><span>Read More </span> <FaAnglesRight /> </button></a>
        </div>
        </div>
    </div>
  )
}

export default Whatwebelieve