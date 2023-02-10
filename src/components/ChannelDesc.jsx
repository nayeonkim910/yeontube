import React from 'react';
import Mockdata from '../api/mockdataAPI';
import YouTube from '../api/youtubeAPI';
import {useQuery} from '@tanstack/react-query';

export default function ChannelDesc({channelId,title}) {
     const YTB = new YouTube(); 
      // const YTB = new Mockdata(); 

      const { error, data:channelImage} = useQuery(
        ['channelImage',channelId], ()=>YTB.displayChannelImg(channelId));
        return (
         <div>
             {error&&`${error} ERROR 발생`}
            {channelImage&&<img className='rounded-full w-10 h-10 m-2' src={channelImage} alt='이미지' />}
         </div>
     );
 
}