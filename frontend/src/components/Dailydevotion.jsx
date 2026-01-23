import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import icons
import { FaAnglesRight, FaAnglesDown } from "react-icons/fa6";
import quotes from  "../assets/images/quotes.png"
import devotion from "../assets/images/devotion.jpg"
import { apiFetch } from '../apiFetch';


const Dailydevotion = () => {
  
  const [audio, setAudio] = useState([])

  useEffect(function(){
    getAudio()
  }, [])


  //get the last daily devotion
  async function getAudio(){
    try{
      const audioData = await apiFetch('devotion/get-last-devotion')
      //console.log(audioData.audioID)
      setAudio(audioData)
      //console.log(video_linkObj)
    }catch(error){

    }finally{

    }
  }
  return (
    <div className="devotion" style={ { backgroundImage: `url(${devotion})` }}> 
        <div className='w-full flex'>
          <h2 className='devotion-title'>DAILY DEVOTION</h2>

            <div>
              <h4></h4>
                <p className='p-5 md:w-3/4 sm:w-full '>
                    <iframe 
                          src={`https://drive.google.com/file/d/${ audio&& (audio.audioID) }/preview`}
                          className='!w-full h-10'
                          width="400"
                          height="70"
                          allow="autoplay"
                    ></iframe>
                </p>

                { audio && (
                  audio.excerpt && (
                  <>
                      <p className='quote'>
                        <img className='w-2' src={quotes} />
                      </p>

                      <blockquote className='my-3'>
                        { audio.excerpt }
                      </blockquote>
                  </>
                ))}

                <p className='flex gap-1 devotion-btn'>

                   <a 
                      className='!my-3 block' href={ audio && (audio.link) } target='_blank'>
                      <button className='btn devotion-btn btn-crimson'>Download Audio&nbsp;<FaAnglesDown /></button>
                   </a>
                   <Link 
                       to="/daily-devotion" className='!my-3 block'> 
                       <button className='btn devotion-btn'>See All Devotions&nbsp;<FaAnglesRight /></button>  
                    </Link>
                </p>
              </div>
        
      </div>
    </div>
  )
}

export default Dailydevotion