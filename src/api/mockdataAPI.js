import axios from 'axios';

export default class Mockdata{
    constructor(){

    }
    async #searchForPopular(){
        return axios
        .get(`/videos/popular.json`)
        .then((res)=>res.data.items);
    }
    
    async #searchByKeyword(keyword){
        return axios
        .get(`/videos/search.json`)
        .then((res) => (res.data.items).map((item)=>({...item, id:item.id.videoId})));
    } 
    
    async #searchForCategory(categoryNum){
        return axios
        .get(`/videos/category.json`)
        .then((res) => (res.data.items));
    }
    async #searchForRelated(id){
        return axios
        .get(`/videos/related.json`)
        .then((res) => (res.data.items).map((item)=>({...item, id:item.id.videoId})));
    }
    async displayChannelImg(channelId){
        return axios
        .get(`/videos/channel.json`)
        .then((res) => (res.data.items[0].snippet.thumbnails.default.url));
        
        };


    async videoSearchFn(keyword){
        return keyword?this.#searchByKeyword(keyword):this.#searchForPopular();
    }
    async relatedVideos(id){
        return this.#searchForRelated(id);
    }
    async selectedVideos(categoryNum){
        return categoryNum&&this.#searchForCategory(categoryNum);
    }
        
  
  
  
  
  
}