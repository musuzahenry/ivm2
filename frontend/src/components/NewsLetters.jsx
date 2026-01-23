import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { apiFetch, API_BASE_URL } from '../apiFetch'

const NewsLetters = () => {

  const [letter, setLetter] = useState(null)

  useEffect(function(){
    getLastLetter()
  },[])

  async function getLastLetter(){
    try{
       const lastLetter = await apiFetch("newsletters/last-letter")
       setLetter(lastLetter)
    }catch(error){
      console.log(error.message)
    }finally{

    }

  }



  const news_letter_title =""
  return (
    <div className='newsletter  wrapper py-10' id="newsletter">

            <div className='letterTitleDiv'>
              { letter && <h3 className='letterH3Home'>{letter.title}</h3> }
            </div>
            <div  className='letterButtonDiv'>
             {
               letter && (
              <>              
              <Link to={`${API_BASE_URL}${letter.file}`} target = "_blank"><button className='btn btn-crimson'>Download News Letter</button></Link>
              </>
              )
             }
            </div>
  
    </div>
  )
}

export default NewsLetters