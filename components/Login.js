import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className='bg-slate-200 relative '>

        <div className='flex flex-col items-center absolute z-50 w-full justify-center h-4/6'>
<button onClick={authenticate} className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse '>Login to Metaverse </button>
        </div>
        <div className='w-full h-screen'>
            <Image src="https://links.papareact.com/55n" layout='fill' objectFit='cover'/> 
        </div>
        </div>
  )
}

export default Login