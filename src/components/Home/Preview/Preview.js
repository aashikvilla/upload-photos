import React,{useContext, useEffect} from 'react'

import{Context} from '../../Home'
import ListItem from './ListItem';

function Preview() {

    const {Photos, Videos} =useContext(Context);
    const[photos,setPhotos]=Photos;
    const [videos,setVideos]=Videos;

    console.log()

    useEffect(()=>{
        videos.map((v)=>{
            console.log("blob in Preview",v);
            console.log("url in Preview",URL.createObjectURL(v));
        });
    },[videos])

  return (
      <>
       <div>Preview</div>
       <div className='' style={{display:'flex'}}>
       {
               photos.lenth>0 && 
               photos.map(()=>(
                   <ListItem />
               )) 
        }

        {
            videos.lenght>0 &&
            videos.map((v)=>{
                console.log("blob in Preview",v);
                console.log("url in Preview",URL.createObjectURL(v));
                debugger;

                return (
                <video width="750" height="500" controls >

                    <source src={URL.createObjectURL(v)} type="video/mp4"/>
                </video>
                )
            })
        }
          
         

       </div>
      </>
   
  )
}

export default Preview