import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Loading() {
    return (
        <div className='absolute w-full z-20 left-0 top-0 h-full grid place-items-center'>
            <Icon icon="svg-spinners:ring-resize" fontSize={50} className='text-primary-400' />
        </div>
    )
}

export default Loading