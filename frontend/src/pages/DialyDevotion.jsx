import React from 'react'


//import images
import dailyDevotionImg from "../assets/images/dailyDevotion.jpg"

const DialyDevotion = () => {
  return (
    <>

    <div className="w-100 PageHeading" style={{ backgroundImage: `url(${ dailyDevotionImg })` }} >
    
      <div class="OverLay">
         <h1>Daily Devoton</h1>
      </div>
      
    </div>

    <div>DialyDevotion</div>
    </>
  )
}

export default DialyDevotion