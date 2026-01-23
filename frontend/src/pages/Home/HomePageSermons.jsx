import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import YoutubeGrid from '../../components/YoutubeGrid'
import { apiFetch } from '../../apiFetch'
import { FaLink } from "react-icons/fa6";


const HomePageSermons = () => {

  const [sermons, setSermons] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
 

  useEffect(function(){
    fetchVideos();
  }, [])

  const fetchVideos = async (token='') =>{      
        setLoading(true)
        try{
            const data = await apiFetch(`youtube/video-list?maxResults=3&token=${token}`)
            setSermons(data.videos)
            console.log(data.videos)

        }catch(error){
          setError(error.message)
          console.error("Failded fo fetch video list", error.message)
        }finally{
          setLoading(false)
        }
 
  }
   

  return (
    <>
    <div className="wrapper">

      <h2>Most Recent Sermons</h2>

        <YoutubeGrid sermons = {sermons} loading = {loading} /> 

        <p className='flex w-full my-10 justify-center'>
          <Link 
            to="/sermons">
            <button className='w-70 flex justify-center btn-crimson leading-10'>
              <FaLink /> &nbsp; See All Sermons
            </button>
          </Link>
        </p>
        

    </div>
    </>
  )
}

export default HomePageSermons