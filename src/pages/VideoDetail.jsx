import React  from 'react';
import { useLocation } from 'react-router-dom';
import ChannelDesc from '../components/ChannelDesc';
import {register,format} from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
import RelatedVideos from '../components/RelatedVideos';
register('KO',koLocale);

export default function VideoDetail() {
        const {state:{video}} = useLocation();
        const {publishedAt,title,channelTitle, description,channelId} = video.snippet;
        return (
        <section className='flex flex-col lg:flex-row'>
            <article className='basis-4/6 m-5'>
                <iframe title={title} id="player" type="text/html" width="100%" height="640"
                    src={`http://www.youtube.com/embed/${video.id}`}
                    frameborder="0">
                </iframe>
                <div>
                    <div className='p-3'>
                         <p className='font-bold text-lg'>{title}</p>
                            <div className='flex'>
                             <ChannelDesc channelId={channelId} title={channelTitle}/>
                             <p className='mt-3 font-semibold'>{channelTitle}</p>
                            </div>
                    </div>
                    <div className='bg-zinc-300 p-4 rounded-lg w-full'>
                           <p className='font-bold '>{format(publishedAt,'KO')}</p> 
                      <pre className='font-sans whitespace-pre-wrap'>
                            {description}
                      </pre>
                    </div>
                </div>
            </article>
            <section className='basis-2/6'>
                <RelatedVideos videoId={video.id} />
            </section>
        </section>
    );
}

