import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData();
//     const [data,setData]=useState([]);
//     useEffect(()=>{
//         fetch("https://api.github.com/users/Abdking27")
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data)
//             setData(data);
//         })
//     },[])
  return (
        <div className='display-flex'>
            Github follower: {data.followers}
            <img src={data.avatar_url} alt="" GitHub Picture />
        </div>
  )
}

export default Github


export const githybInfoLoader = async () =>{
    const response= await fetch("https://api.github.com/users/Abdking27")

    return response.json();
    
}