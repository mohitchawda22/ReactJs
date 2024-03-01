import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const [data,setdata]=useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/mohitchawda22').then(res=>res.json())
        .then(data => {
        console.log(data)
        setdata(data)})
    },[])

    return (
        <>
        <div className='text-center m-4 vg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers}

        <img src={data.avatat_url} alt='Git-Picture' width={300}></img>
        </div>
        </>
    )
}

export default Github
