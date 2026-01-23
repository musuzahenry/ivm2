import React from 'react'
import { useLocation } from 'react-router-dom'

const Mission = () => {
    const location = useLocation()
    const mission = location.state.mission
    const banner = mission.banner_image
  return (
    <div>
        <div className="w-100  PageHeading"  style={ { backgroundImage: `url(${banner})` }} >
            <div class="OverLay">
               <h1>{mission.title}</h1>
            </div> 
        </div>

    <div className='wrapper'>
        <div className='mission-body'>
            <div className='mission-images'>
                { mission.image2 && (<img className='' src={mission.image2} />) }
                { mission.image3 && (<img className='' src={mission.image3} />) }
                { mission.image4 && (<img className='' src={mission.image4} />) }
            </div>
            <div className=''>
                {mission.description}
            </div>

            <div className='mission-footer'>
            <p>Location: <b>{mission.location}</b></p>
            <p>Start Date: <b>{mission.start_date_time}</b> End Date <b>{mission.end_date_time}</b></p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Mission