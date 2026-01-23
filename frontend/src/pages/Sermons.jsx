import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Audiosermons from '../components/Audiosermons'
import YoutubeGrid from '../components/YoutubeGrid'
import { apiFetch } from '../apiFetch'
//import images
import SermonsImg from "../assets/images/Sermons.jpg"
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { FaMagnifyingGlass } from "react-icons/fa6";



const Sermons = () => {

  const [sermons, setSermons] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [nextPageToken, setNextPageToken] =useState(null)
  const [prevPageToken, setPrevPageToken] = useState(null);
  const [searchQuery, setSearchQuery] = useState("")
  const [seachRsTitle, setReachRsTitle] = useState("")

  useEffect(function(){
    console.log(sermons)
    fetchVideos();
  }, [])

  const fetchVideos = async (token='') =>{      
        setLoading(true)
        try{
            setReachRsTitle("")
            const data = await apiFetch(`youtube/video-list?maxResults=12&token=${token}`)
            setSermons(data.videos)
            console.log(data.videos)
            setNextPageToken(data.nextPageToken);
            setPrevPageToken(data.prevPageToken);

        }catch(error){
          setError(error.message)
          console.error("Failded fo fetch video list", error.message)
        }finally{
          setLoading(false)
        }
 
  }


  const lookUpVideos = async(e) =>{
    e.preventDefault();
    try{
       const data = await apiFetch(`youtube/search-videos?maxResults=6&q=${searchQuery}`)        
        setSermons(data.videos)
        setNextPageToken(data.nextPageToken);
        setPrevPageToken(data.prevPageToken);
        setReachRsTitle("Search Results...")
    }catch(error){
       console.log("Failed to search with error", error.message)
    }finally{
       setSearchQuery("")
    }
  }

   

  return (
    <>
    <div className="w-100 PageHeading" style={{ backgroundImage: `url(${SermonsImg})` }} >
             <div className="OverLay">
                  <h1>Sermons</h1>
             </div> 
    </div>


    <div className="wrapper">
      <div className='py-1 my-5 border border-blue-600'>
      <form onSubmit={lookUpVideos} className='w-full flex justify-center'>
          <input  
              className='w-[85%] sm-w-[65%]'
              value = {searchQuery}
              onChange = {(e)=>setSearchQuery(e.target.value)}
              type='text' 
              placeholder="Search for a sermon using title or preacher's name " 
          /> 
          <button className='ml-1 p-2' type="Submit"><FaMagnifyingGlass /></button>
       </form>
      </div>


      { 
      seachRsTitle && 
        <div className='py-2'>
             <h2 className='text-center pt-4'>{seachRsTitle}</h2>
             <button onClick={() => fetchVideos('')}> <GrFormPreviousLink /> Back To Sermons</button>
        </div>
      }


        <YoutubeGrid sermons = {sermons} loading = {loading} />

        <div className="pagination-controls w-full mt-10">

             <p className="flex justify-center w-full text-center my-2">
                    
                <button  className='w-40 m-5 flex justify-center !bg-orange-800 !border-orange-800  hover:!shadow-md hover:!shadow-stone-700/40'
                      disabled={!prevPageToken} 
                      onClick={() => fetchVideos(prevPageToken)}
                    >
                    <GrFormPreviousLink />
                   Previous
                   </button>
                 
                  <button className='w-40 flex  m-5 flex justify-center !bg-orange-800 !border-orange-800 hover:!shadow-md hover:!shadow-stone-700/40'
                    disabled={!nextPageToken} 
                    onClick={() => fetchVideos(nextPageToken)}
                  >
                    <GrFormNextLink />
                  Next
                   </button>
               </p>


        </div>
        <Audiosermons />
   
    </div>
    </>
  )
}

export default Sermons