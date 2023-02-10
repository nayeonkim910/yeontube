import React from 'react';
import {useNavigate} from 'react-router-dom';
import {register,format} from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
import ChannelDesc from './ChannelDesc';
register('KO',koLocale);


export default function VideoCard({video,type,location}) {
    const {title, thumbnails, publishedAt,channelTitle,channelId} =video.snippet;
    const navigator = useNavigate();
    return (
        <li className={type?'flex gap-2 my-1':''} onClick={()=>navigator(`/video/watch/${video.id}`,{state:{video}})}>
                <img className={type?'w-2/6 rounded-lg':'w-full rounded-lg '}  src={thumbnails.medium.url} alt={title} />
                <div className='flex px-1 gap-2'>
                    <div className={location&&'w-2/12'}>                        
                        {location&&<ChannelDesc channelId={channelId} title={channelTitle}/>} 
                    </div>
                     <div className={location&&'w-9/12'}>
                         <p className={'font-semibold text-sm line-clamp-2 '}>{title}</p>
                         <p className={location&&'text-zinc-800 text-sm ml-3'}>{channelTitle}</p>
                         <p className={location&&'text-zinc-800 text-sm ml-3'}>{format(publishedAt,'KO')}</p>
                     </div>
                </div>
        </li>
    )
}
