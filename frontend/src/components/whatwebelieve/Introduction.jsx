import React from 'react'

//import images
import JesusChrist from "../../assets/images/JesusChrist.jpg"
//import LogCabin from "../../assets/images/LogCabin.jpg"
import BelieveImg from "../../assets/images/WhatWeBelieve.jpg"




const Introduction = () => {
  return (
      <>
        <div className="w-100 PageHeading" style={{ backgroundImage: `url(${BelieveImg})` }} >

          <div className="OverLay">
            <h1>What We Believe</h1>
          </div>
  
        </div>

        <div className='wrapper my-20'>
        <div className="wwbContent flex justify-center">      
          <div className='wwbImg'>
              <img src={JesusChrist} alt="What We Believe" />
          </div>

          <div className='wwbtexts theLordtext'>
              <h2>The Lord Jesus Christ</h2>
              <h3>The Lord Jesus Christ is the LORD GOD ALMIGHTY</h3>
              
              <div className="underline">
                  <p></p>
              </div>
              <p>
                  The Lord Jesus Christ is the LORD GOD ALMIGHTY and Saviour of all mankind from whom all things have been created and consist. God is currently establishing His Eternal Kingdom here on earth through the preaching of the Infallible Word of God by which whosoever believes and is baptized in Name of Jesus Christ and receives the baptism of the Holy Spirit is born again into the Body of Christ becomes the Bride of Christ.
              </p>        
          </div>

      </div>
      </div>
      </>
  )
}

export default Introduction