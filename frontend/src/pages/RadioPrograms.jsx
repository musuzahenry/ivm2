import React from 'react'

//import 
import radioImg from "../assets/images/radioProgram.jpg"

const programs = [
    {
      "title":"Baba FM 87.7",
       "items":[
        {
          "title": "Baba FM 87.7", 
          "subitems":[
          {"title":"Friday Program",  "time":"7:30PM - 9:00PM"},
          {"title":"Sunday", "time":"8:20AM - 9:00AM"},
        ]
        },      
       ]
    },

    {
      "title":"Busoga One FM 90.6",
       "items":[      
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





const RadioPrograms = () => {
  return (
    <>

  { 
  //add background sermon
  // style={ /{ backgroundImage: `url(${SermonsImg})` }} 
  }
    <div className="w-100 PageHeading"  style={ { backgroundImage: `url(${radioImg})` }} >
        <div class="OverLay">
              <h1>Radio Programs</h1>
        </div> 
   </div>

     <div className="wrapper my-8">
      <div className='py-4'>
        <p>
          The Radio Ministry has greatly sowed the Faith that we have received broadcasting wide and far to invisible audience. 
          Many have believed the Message of the Hour through the Radio Ministry and many churches opened up or converted to the Message.
          The Radio Ministry has greatly sowed the Faith that we have received broadcasting wide and far to invisible audience. Many have 
          believed the Message of the Hour through the Radio Ministry and many churches opened up or converted to the Message.
        </p>
        <p>
          The radio programs have also been possible to continue with support from friends and church members. 
        </p>
     </div>
    

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
                           <p className='px-1'>{subitem.time}</p>
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

    </>
  )
}

export default RadioPrograms