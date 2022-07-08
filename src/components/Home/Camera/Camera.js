import React,{useContext, useEffect} from 'react'

import{Context} from '../../Home'

// import { BUTTON_LABELS,NAMESPACES} from './Constants'

import {
    RecordWebcam,
    useRecordWebcam,
    CAMERA_STATUS
  } from "react-record-webcam";

  const OPTIONS = {
    filename: "test-filename",
    fileType: "mp4",
    width: 1920,
    height: 1080,
   
  };


function Camera(props) {
    const recordWebcam = useRecordWebcam(OPTIONS);

    
    const {Photos, Videos} =useContext(Context);
    const[photos,setPhotos]=Photos;
    const [videos,setVideos]=Videos;

    const handleUpload=async(e)=>{
        const blob = await recordWebcam.getRecording();
        console.log("blob",blob);
        let url = URL.createObjectURL(blob);
        console.log("url",url);
        const buf = await blob.arrayBuffer();
let newURL = URL.createObjectURL( new Blob( [ buf ] ) );
console.log("newurl",newURL);
        
        setVideos([...videos,blob]);
        console.log(e);
    }

    useEffect(()=>{
        recordWebcam.open();
    },[])
   

  return (
      <>
      Camera
      <button onClick={()=>props.setSetIsCamera(false)}>back</button>

      <h1>Video Camera</h1>
      
      <div>
        {/* <button
          disabled={
            recordWebcam.status === CAMERA_STATUS.OPEN ||
            recordWebcam.status === CAMERA_STATUS.RECORDING ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.open}
        >
          Open camera
        </button> */}
        <button
          disabled={
            recordWebcam.status === CAMERA_STATUS.CLOSED ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={()=>props.setSetIsCamera(false)}
        >
          Close camera
        </button>
        <button
          disabled={
            recordWebcam.status === CAMERA_STATUS.CLOSED ||
            recordWebcam.status === CAMERA_STATUS.RECORDING ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.start}
          
        >
          Start recording
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
          onClick={recordWebcam.stop}
        >
          Stop recording
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={recordWebcam.retake}
        >
          Retake
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={(e)=>handleUpload(e)}
        >
          Save
        </button>
        {/* <button
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={getRecordingFileHooks}
        >
          Get recording
        </button> */}
      </div>

      <video
        ref={recordWebcam.webcamRef}
        style={{
          display: `${
            recordWebcam.status === CAMERA_STATUS.OPEN ||
            recordWebcam.status === CAMERA_STATUS.RECORDING
              ? "block"
              : "none"
          }`
        }}
        autoPlay
        muted
      />
      <video
        ref={recordWebcam.previewRef}
        style={{
          display: `${
            recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
          }`
        }}
        controls
      />
    
      </>
    
  )
}

export default Camera