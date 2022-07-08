import React from 'react'

import{Context} from '../../Home'
import ListItem from './ListItem';

function Preview() {

    const {Photos, Videos} =Context;
    const[photos,setPhotos]=Photos;
    const [videos,setVideos]=Videos;
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
          
         

       </div>
      </>
   
  )
}

export default Preview