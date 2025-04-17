import React from 'react'

export default function Button({title = 'Button', onClick}: {title?: string; onClick?: () => void}) {
    return (
        <button className='btn-1' onClick={onClick}>{title}</button>
    )
}
