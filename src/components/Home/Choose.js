import React ,{useContext, useState}from 'react'
import{Context} from '../Home'
import { useNavigate } from "react-router-dom";
import Camera from './Camera/Camera';

function Choose() {

    const [isCamera,setSetIsCamera]=useState(false);
   // let navigate = useNavigate();
    const {Photos, Videos} =useContext(Context);
    const[photos,setPhotos]=Photos;
    const [videos,setVideos]=Videos;


    const handleUpload=(e)=>{
///do someting
//set setphots()///setvideos()
console.log("files", e);
    }

    const handleCamera=()=>{
        //navigate("/Camera");
        console.log("camera");
        setSetIsCamera(true);
    }
  return (
    <>
    {
        isCamera?
        <>
        camera
        <Camera setSetIsCamera={setSetIsCamera}/>
        </>
        :
        <>
    <button onClick={()=>handleCamera()}>Camera</button>
    <button  onClick={()=>handleUpload()}> Upload</button>

    {/* <input type="file" multiple onChange={(e)=>handleUpload(e)} >Add photos</input> */}
    </>

    }

    </>
  )
}

export default Choose