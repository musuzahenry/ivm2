import React, { useEffect, useState } from 'react'
import newsLettersImg from "../assets/images/newsleter.jpg"
import { apiFetch } from '../apiFetch'
import { Link } from 'react-router-dom'



const NewsLetter = () => {

  const [newsLetters, setNewsLetters] = useState([])



  useEffect(function(){
     getNewsLetters()
  },[])


  async function getNewsLetters(){
    try{
       const letters = await apiFetch("/newsletters/newsletters")
       console.log(letters)
       setNewsLetters(letters)
    }catch(error){
      console.log(error.message)
    }finally{

    }
  }



  return (
    <>
    <div className="w-100 PageHeading" style={{ backgroundImage: `url(${newsLettersImg})` }} >
        <div class="OverLay">
           <h1>News Letters</h1>
        </div>   
    </div>


      <div className='wrapper'>
        {newsLetters && newsLetters.map((letter)=>(
          <div className='letterview'>
            <div>
              <div className='letterThumb'>
                  <img  className="letterThumbImg" src = {letter.thumb_nail} alt={letter.title} />
              </div>

              <div className='letterContent'>
                <div className='letterTitle'>
                  <h4>{letter.title}</h4>
                </div>                
                <div className='letterExcerpt'><p>{letter.excerpt}</p></div>
                <div className='letterDate'><p>Date: <b>{letter.record_date}</b> Preacher: <b>{letter.author.preacherName}</b></p></div>
                <div>
                  <Link className='letterLink' to ={letter.file } target = "_blank" ><button className='btn'>Download File</button></Link>
                </div>     
              </div>
          </div>
        </div>
        )
        )}

      </div>
    </>
  )
}

export default NewsLetter