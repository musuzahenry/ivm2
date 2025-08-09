import React from 'react'


//import images

import TheProphetImg from "../../assets/images/TheProphet.jpg"

const TheProphet = () => {
  return (
    <div className="wrapper">
              <div className="wwbContent ReverseFlex">      
                <div className='wwbImg'>
                    <img src={TheProphetImg} alt="What We Believe" />
                </div>
      
                <div className='wwbtext'>
                    <h2>The Prophet</h2>
                    <h3>William Marrion Branham</h3>
                    
                    <div className="underline">
                        <p></p>
                    </div>
                    <p>
                        We are living at the end of the world wherein the great day of the LORD is fast approaching. Before the destruction of this world, Jesus Christ has to come again to take away His Bride through translation. To prepare Christ’s Bride, God has sent Elijah the Prophet according to the fulfilment of the Holy Scriptures; MALACHI 4:5-6, MATTHEW17:11, REVELATION 3:14-22 and REVELATION 10:7.
We believe that the Ministry of Br William Marrion Branham from 1933 to 1965 is the fulfilment of this divine promise of God. In this Ministry, all the Mysteries of God have been supernaturally revealed with many infallible proofs. The Holy Bible is now an Open Book through the Message of the Hour.

                    </p>        
                </div>
      
            </div>
  </div>
  )
}

export default TheProphet