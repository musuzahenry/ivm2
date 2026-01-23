import React from 'react'
import PrJames from "../../assets/images/PastorJamesAndWife.jpg"
import PrIbale from "../../assets/images/PastorIbaleAndWife.jpg"
import GroupPhoto from "../../assets/images/GroupPhoto.jpg"



const AboutUS = () => {
  return (
<>

        <div className="w-100 PageHeading" style={{ backgroundImage: `url(${GroupPhoto})` }} >

        <div class="OverLay">
            <h1>Who We Are</h1>
          </div>
        </div>

    
    <div className="wrapper">     
      <div className='py-3'>
        <h2>Introduction</h2>
        <div className="underline"><p></p></div>
        <p>We are a Faith based group of Believers whose lives are sold out to the cause of Jesus Christ. As the Gospel in the Holy Bible in MATTHEW 24:14 says “And this Gospel of the Kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come”, we are fully committed to preaching, believing and living the Life of Christ  at the same making disciples of the Kingdom of God.</p>
      </div>

      <h2>Our Pastors</h2>
      <div className="underline"><p></p></div>
      <div className='writeUp pastors'>
       <div>
        <p><img className="pastorImg" src={PrIbale} alt="Pastor Ibale And Wife" /></p>
        <p><b><em>Pastor Ibale Richard Stephen & Wife</em></b></p>
       </div>
        <div>
          <p><img  className="pastorImg" src={PrJames} alt="Pastor James And Wife" /></p>
          <p><b><em>Pastor James Hannington Katumba & Wife</em></b></p>
        </div>     
      </div>


      <div className='writeUp '>
      <h2>Our Story</h2>
       <div className="underline"><p></p></div>
      <p>
      Our fellowship was started by our Pastor Stephen Richard Ibale in 1986 starting as a home fellowship with only six family members in Jinja town. The fellowship has grown by God’s grace to thousands of believers who are scattered all over the country with dozens of churches established. The Ministry has also grown giving support to many churches all over the world.
      </p> 
      </div>


     <div className="spacer"></div>

    </div>
</>
    
  )
}

export default AboutUS