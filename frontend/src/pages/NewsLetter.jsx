import React from 'react'


//import images
import newsLettersImg from "../assets/images/newsLetters.jpg"

const NewsLetter = () => {
  return (
    <>
    <div className="w-100 PageHeading" style={{ backgroundImage: `url(${newsLettersImg})` }} >
        <div class="OverLay">
           <h1>News Letters</h1>
        </div>   
    </div>


      <div>NewsLetter</div>
    </>
  )
}

export default NewsLetter