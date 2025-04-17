import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Image
            src={'/LOGO 2.png'}
            width={100}
            height={32}
            alt='logo'
            />
            <h2 className='text-2xl'>
                <span className='text-primary'>Egy</span> book
            </h2>
        </div>
    )
}
