import React, { useEffect, useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import Navbar from './Navbar';
import { useNavigate, useParams} from 'react-router-dom';
export default function Header() {
    const {keyword} = useParams();
    const [text, setText] = useState('');
    const navigator = useNavigate();
    const handleChange =(e)=>(setText(e.target.value));

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigator(`/video/${text}`);
    };

    useEffect(()=>{
      (keyword&&isNaN(keyword))?setText(keyword):setText('')
    },[keyword]);
    return (
            <header className='w-full flex justify-center items-center p-5'>
                <div className='w-1/12 mr-32'>
                  <img onClick={()=>navigator(`/`)} className='cursor-pointer' src="/yeontubeLogo.png" alt="" />
                </div>
                 <form className='flex w-6/12' onSubmit={handleSubmit}>
                      <input 
                      className=' w-full h-12 px-3 rounded-l-full bg-stone-100'
                      type="text" 
                      value={text} 
                      onChange={handleChange}
                      placeholder={' 검색'} />
                      <button className='bg-zinc-600 text-2xl p-3 px-5 rounded-r-full'><AiOutlineSearch/></button>
                 </form>
              </header>
    );
}

