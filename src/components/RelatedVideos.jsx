import React from 'react';
import Mockdata from '../api/mockdataAPI';
import YouTube from '../api/youtubeAPI';
import {useQuery} from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({videoId}) {
       const YTB = new YouTube(); 
      // const YTB = new Mockdata(); 
      const {  error, data:relatedVideos} = useQuery(
         ['relatedVideos',videoId], ()=>YTB.relatedVideos(videoId));
   return(
    <>
       <p>{error&&`${error}`}</p>
       {relatedVideos&&(
         <ul>
             {relatedVideos.map((item) => <VideoCard key={item.id} video={item} type={'list'}/>)}  
          </ul>
       )}
    </>
   );
   
   
   
   
   
   
   
   
   
   
   
   
   
}

