import React from 'react'

const Audiosermons = () => {
  return (
    <div>


      <div className="wrapper"> 
        <h2>Audio Sermons</h2>
        <h3>Sermons from previous years to the most recently preached sermons</h3>           
        <div className="underline">
                  <p></p>
        </div>
        <p>To download a sermon, click on it and you will be redirected to a page where you can download or listen online</p>    
      </div>


      <iframe className="googleDrive" src="https://drive.google.com/embeddedfolderview?id=16b2sUtjq9BFvsjN4-x9oM_C9E_tg7vo6#grid">
     </iframe>
    </div>
  )
}

export default Audiosermons