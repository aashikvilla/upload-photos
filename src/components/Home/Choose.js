import React ,{useContext}from 'react'
import{Context} from '../Home'

function Choose() {

    const {Photos, Videos} =useContext(Context);
    const[photos,setPhotos]=Photos;
    const [videos,setVideos]=Videos;


    const handleUpload=()=>{
///do someting
//set phots()///setvideos()
    }
  return (
    <>
    <button>Camera</button>
    <button  onClick={()=>handleUpload()}> Upload</button>
    </>
  )
}

export default Choose