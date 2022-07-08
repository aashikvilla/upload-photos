import React, { useEffect, useState } from 'react'

function ListItem(props) {
    const [src,setsrc]=useState("");
    useEffect(()=>{
        console.log("url",URL.createObjectURL(props.info[0]));
        var reader = new FileReader();
        var url = reader.readAsDataURL(props.info[0]);
      
         reader.onloadend = function (e) {
             console.log("reader",reader.result);
            setsrc( reader.result)          
          
          }
    },[])

    useEffect(()=>{
        console.log("srcc",src);
    },[src])
  return (
    

    <>
    <div>
        <image src={src} alt="dfcgvhbjn" width={'100px'}/>
        <button >delete</button>
        {/* <image src={URL.createObjectURL(props.info)} alt="1111bjn" width={'200px'}/> */}
    </div>
    </>
  )
}

export default ListItem