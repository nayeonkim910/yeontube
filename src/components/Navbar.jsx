import React from 'react';
import {useNavigate} from 'react-router-dom';
export default function Navbar() {
        const navigator = useNavigate();
    return (
        <div className='p-2 w-full' >
            <ul className='flex text-center items-center text-zinc-100 '>
                <li className=' mx-1 w-1/12   bg-zinc-800 rounded-xl py-1 '><button onClick={()=>navigator(`/`)}>전체</button></li>
                <li className=' mx-1 w-1/12   bg-zinc-800 rounded-xl py-1 '><button onClick={()=>navigator(`/categoryVideo/10`)}>음악</button></li>
                <li className=' mx-1 w-1/12   bg-zinc-800 rounded-xl py-1 '><button onClick={()=>navigator(`/categoryVideo/20`)}>게임</button></li>
                <li className=' mx-1 w-1/12   bg-zinc-800 rounded-xl py-1 '><button onClick={()=>navigator(`/categoryVideo/25`)}>뉴스</button></li>
                {/* <li className=' mx-1 w-40 w-min-40  bg-zinc-800 rounded-xl py-1 '><button onClick={()=>navigator(`/categoryVideo/24`)}>엔터테인먼트</button></li> */}
            </ul>
        </div>
        
    );
}

