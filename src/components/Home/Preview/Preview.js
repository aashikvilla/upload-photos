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

    useEffect(()=>{
        photos.map((v)=>{
            console.log("photo in Preview",v);
            console.log("photo in Preview",v.name);
    
        });
        console.log("lenght",photos.length)
    },[photos])

  return (
      <>
      <center>
          <br/>
       <h3>Preview</h3>
       <div className='' style={{display:'flex'}}>
       {
               photos.length>0 && 
               <ul>
                   {
               photos.map((p)=>{
                   return <li>{p.name}</li>


               })
            }
               </ul>
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
       </center>
      </>
   
  )
}

export default Preview