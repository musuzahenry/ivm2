import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const programs = [
    {
      "title":"Sunday Program",
       "items":[
        {"title":"Sunday School","time":"10:00AM - 11:00AM"},
        {"title":"Morning Service", "time":"11:00AM - 1:00PM"},
        {"title":"Evening Service", "time":"3:00PM - 5:00PM"},
       ]
    }, 
    {
      "title":"Wednesday Program",
       "items":[
        {"title":"Every Wednesday","time":"5:00PM - 6:00PM"},
       ]
    },
    {
      "title":"Special Programs",
       "items":[
         {"title":"The Lord's Supper & Foot Washing", "desccription":"Every First Sunday Of The Month", "time":"5:00PM - 7:00PM"},
        {"title":"Youth Meetings", "desccription":"Every Second Sunday Of The Month", "time":"3:00PM - 5:00PM"},
        {"title":"Marriage Meetings", "desccription":"Every Last Sunday Of The Month", "time":"3:00PM - 5:00PM"},
        {"title":"Over Nights", "desccription":"Every Last Friday Of The Month", "time":"9:00PM - 5:00AM"},
       ]
    },

    {
      "title":"Radio Programs",
       "items":[
        {
          "title": "Baba FM 87.7", 
          "subitems":[
          {"title":"Friday Program",  "time":"7:30PM - 9:00PM"},
          {"title":"Sunday", "time":"8:20AM - 9:00AM"},
        ]
        },      
        {
          "title": "Busoga One FM 90.6", 
          "subitems":[
          {"title":"Tuesday Program",  "time":"7:15PM - 8:00PM"},
          {"title":"Saturday", "time":"6:00AM - 7:00AM"},
          {"title":"Sunday", "time":"9:15AM - 10:00AM"},
        ]
        } 

       ]
    },
]




export const ChurchPropgram = () => {
  return (
    <div className="wrapper bg-gray-100 !py-4">
    <h2>Church Program</h2>
    <h3>Below is our weekly prohram</h3>      
    <div className="underline">
      <p></p>
    </div>

    <p className="programP">
      We have the weekly sunday program, wednesday program, over nights, youth meetings, marriage meetings, and 
      prayer and fasting meetings
    </p>


    <div className='flex progDiv'>
              {programs.map((program, key)=>(
              <div key = {key} className='flex !my-3  p-5'>
                  <h3 className='w-full !mt-2'>{program.title}</h3>
                  
                  {program.items.map((item, subkey)=>
                  
                   <div className='py-2 !mt-1' key={subkey}>
                    <div className='bg-gray-200 py-2'>     
                    <p className='px-1'><b>{item.title}</b></p>
                  </div>

                  { item.desccription && (
                  <div className='px-1 bg-blue-100 py-2'>
                      <span className='block'><i> {item.desccription} </i></span>
                  </div>
                  )}

                  <div className='px-1 border-bottom'>
                    <p>{item.time}</p>
                  </div>

                    {item.subitems && (
                      
                     item.subitems.map((subitem, subitemkey) =>(
                      <div key={subitemkey}>
                           <p className='block px-1 bg-blue-100 py-2'><i>{subitem.title}</i></p>
                           
                           <p className='!px-1'>{subitem.time}</p>
                      </div>
                      
                     ))
                    )}

                     <div className='mb-4 block border-b  py-2'></div>
                  
                  </div>

                 
   
                  )}                
                
              </div>
              ))
            }
    </div>

    </div>
  )
}

export default ChurchPropgram





