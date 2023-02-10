import axios from 'axios';


export default class YouTube{
         constructor(){
             this.httpClient = axios.create({
                 baseURL: 'https://www.googleapis.com/youtube/v3/',
                 params:{key:process.env.REACT_APP_YOUTUBE_API_KEY}
             })
         }
        async videoSearchFn(keyword){
          return  keyword?this.#searchByKeyword(keyword):this.#searchForPopular();
        }

        async selectedVideos(categoryNum){
            return categoryNum&&this.#searchForCategory(categoryNum);
        }
        
        async displayChannelImg(channelId){
            return this.httpClient
            .get('channels',{params:{part:'snippet', id:channelId,}})
            .then(res=>res.data.items[0].snippet.thumbnails.default.url);
        }
        async relatedVideos(id){
            return this.httpClient
            .get("search",
            {params:{
                part:'snippet',
                maxResults:25,
                type:'video',
                relatedToVideoId:id
                }})
            .then(res=>res.data.items.map((item)=>({...item, id: item.id.videoId})));
        }

         async #searchForCategory(categoryNum){
            return this.httpClient
            .get('videos',
            {params:{
                part:'snippet',
                chart:'mostPopular',
                maxResults:25,
                regionCode:'KR',
                videoCategoryId:categoryNum,
            }})
            .then(res=>res.data.items);
         }

         async #searchByKeyword(keyword){
         return this.httpClient
                 .get("search",
                 {params:{
                     part:'snippet',
                     maxResults:25,
                     type:'video',
                     q:keyword
                     }})
                 .then(res=>res.data.items)
                 .then(items=>items.map(
                     (item)=>({...item,id:item.id.videoId}))
                     );
         };
         async #searchForPopular(){
         return this.httpClient
                 .get('videos',
                 {params:{
                     part:'snippet',
                     chart:'mostPopular',
                     maxResults:25,
                     regionCode:'KR',
                 }})
                 .then(res=>res.data.items);
         }
}





