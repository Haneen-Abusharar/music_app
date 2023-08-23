import Image from 'next/image'
import React from 'react'

const playerDetails = ({ song }) => {
    return (
        <div className={"style.playerdetails"}>
            <div className='relative w-fit my-0 mx-auto'>
                <Image className='block my-0 mx-auto w-full
                       max-w-[250px] rounded-full shadow-md'
                    width={100}
                    height={100}
                    src={song.img_src}
                    alt={song.title}
                />
            </div>
            <h3 className={`text-slate-200 text-xl text-center 
                mb-2.5 text-shadow-black text-shadow-black`}
            >{song.title}</h3>
            <h3 className={`text-zinc-500 text-xl text-center 
                mb-2.5 text-shadow-black text-shadow-black`}
            >{song.artist}</h3>
        </div>)
}

export default playerDetails