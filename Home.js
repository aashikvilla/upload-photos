import React, { useState } from 'react'
import Choose from './Home/Choose';
import Preview from './Home/Preview/Preview'


export const Context = React.createContext();

function Home() {

  const [photos,setPhotos] =useState([]);
  
  const [videos,setVideos] =useState([]);

  context={
    Photos:[photos,setPhotos],
    Videos:[videos,setVideos]
  }

  return (
    <Context.Provider value={context}>
      <>
        <Header />
        <Choose/>
        <Preview />        
      </>
    </Context.Provider>
   
  )
}

export default Home