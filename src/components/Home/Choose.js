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
    const validFileExtentions=["jpeg","png"];

    function checkFileExtentions(files) {
        var l = files.length, validatedFiles = [], name;
        for (var i = 0; i < l; i++) {
            name = files[i].name.toLowerCase();
            var isMatchedExt = validFileExtentions.filter(i => name.endsWith(i)).length > 0;
            var hasNoExt = !name.includes(".");
            if (hasNoExt || isMatchedExt)
                validatedFiles.push(files[i]);
        }
        return validatedFiles;
    }


    const handleUpload=(e)=>{
    ///do someting
    //set setphots()///setvideos()
    console.log("files", e.target.files);

    let photostoadd=checkFileExtentions(e.target.files);
    console.log("to add",photostoadd);
 

    // for(let i=0;i<e.target.files.length;i++){
    //     if(e.target.files[i].type.contains("image")){
    //         photostoadd.push(e.target.files[i]);
    //     }
    // }
        setPhotos(photostoadd);

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
        <Camera setSetIsCamera={setSetIsCamera}/>
        </>
        :
        <>
        <center>
            <button onClick={()=>handleCamera()}>Camera</button>
            {/* <button  onClick={()=>handleUpload()}> Upload</button> */}
            <br/>

            <input type="file" accept="image/*" multiple onChange={(e)=>handleUpload(e)} ></input>

        </center>
  
    </>

    }

    </>
  )
}

export default Choose