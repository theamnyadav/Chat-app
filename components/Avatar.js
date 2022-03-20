import React from 'react'
import { useMoralis } from 'react-moralis'
import userImage from '../assets/web3.png'
import Image from 'next/image';

function Avatar({username,logoutOnPress}) {
    const {user ,logout} = useMoralis();
  return (
    <div>
        <Image className='rounded-full bg-black cursor-pointer hover:opacity-75' src={userImage} layout='fill' onClick={()=>logoutOnPress && logout()}/>
    </div>
  )
}

export default Avatar