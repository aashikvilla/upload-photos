import React, { useState } from 'react'
import Choose from './Home/Choose';
import Preview from './Home/Preview/Preview'
import Header from './common/Header';


export const Context = React.createContext();

function Home() {

  const [photos,setPhotos] =useState(["asd","AD"]);
  
  const [videos,setVideos] =useState(["ASD","ASD"]);

  const context={
    Photos:[photos,setPhotos],
    Videos:[videos,setVideos]
  }

  console.log(photos);
  return (
    <Context.Provider value={context}>
      <>
     
        <Header />
        Please select one of the following options to upload the files.<br/>
        <Choose/>
        <Preview />        
      </>
    </Context.Provider>
   
  )
}

export default Home