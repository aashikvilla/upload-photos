import React, { useState ,useEffect} from 'react'
import Choose from './Home/Choose';
import Preview from './Home/Preview/Preview'
import Header from './common/Header';


export const Context = React.createContext();

function Home() {

  const [photos,setPhotos] =useState([]);
  
  const [videos,setVideos] =useState([]);

  const context={
    Photos:[photos,setPhotos],
    Videos:[videos,setVideos]
  }
  useEffect(()=>{
    console.log("videos",videos);
},[videos])

useEffect(()=>{
  console.log("photos",photos);
},[photos])



  console.log(photos);
  return (
    <Context.Provider value={context}>
      <>
     
        <Header />
        <br/><br/>
        Please select one of the following options to upload the files.<br/><br/><br/>
        <Choose/>
        <Preview />     
        
      </>
    </Context.Provider>
   
  )
}

export default Home