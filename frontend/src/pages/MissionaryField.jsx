import React, { useEffect, useState } from 'react'
import { apiFetch, API_BASE_URL } from '../apiFetch'
import { Link, useNavigate } from 'react-router-dom'
import MissionImg from "../assets/images/MissionFields.jpg"

const MissionaryField = () => {

    const [missions, setMissions] = useState([])
    const [mission, setMission] = useState({})
    const navigate = useNavigate()

    useEffect(function(){     
         getMissions()
    },[])



async function getMissions(){
    try{
        const missions = await apiFetch("/mission/mission")
        setMissions(missions)
        }catch(error){
            console.log(error.message)
        }finally{
         
        }
    }

    function goToMission(mission){
        navigate("/mission", {state:{"mission":mission}})
    }
    
  return (
    <>
    <div className="w-100  PageHeading"  style={ { backgroundImage: `url(${MissionImg})` }} >
        <div class="OverLay">
            <h1>Missionary Field</h1>
    </div> 
    </div>

    <div className='wrapper my-10'>
        <div className='middion-grid gap-2'> 
            {
                missions && (missions.map((mission) =>(
                    <div>
                        <img src={`${mission.banner_image}`} alt="banner" />
                        <div className='w-full p-2 flex'>
                        <h3 class='mission-t'>{mission.title} </h3>
                        <p class='mission-p'>{mission.description && (mission.description.slice(0,100)) } </p>
                        <button 
                           onClick={()=> setMission(mission, goToMission(mission))}
                           className='mission-btn'>
                            See More
                        </button>
                        </div>

                    </div>
                    
                )))
            }
        </div>
        
    </div>
    </>
  )
}

export default MissionaryField