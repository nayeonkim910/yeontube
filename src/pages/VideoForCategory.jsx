import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';
import YouTube from '../api/youtubeAPI';
import Mockdata from '../api/mockdataAPI';
import Navbar from '../components/Navbar';


export default function VideoForCategory() {
    const {categoryNum} = useParams();
    const { error, data:videos
    }= useQuery(['categoryVideos',categoryNum], ()=>{
           const YTB = new YouTube();
        // const YTB = new Mockdata();
        return YTB.selectedVideos(categoryNum);
        });
    return (
        <div className='w-11/12 m-auto'>
            <Navbar/>
            <p>{error&&`${error}`}</p>
            {videos&&(
              <ul className='gap-x-0.5 gap-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-2'>
                  {videos.map((item) => <VideoCard key={item.id} video={item} location={'categoryPage'}/>)}  
               </ul>
            )}
        </div>
    );

   
   
   
   
}

