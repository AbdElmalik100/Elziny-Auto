import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import SparklesText from './ui/SparklesText'

function PremiumCard() {
    return (
        <span className="luxury badge rounded-full font-bold text-white bg-primary-400 flex items-center gap-1">
            <Icon icon="ic:round-stars" className="animate-spin duration-1000" fontSize={22} />
            <SparklesText text="Premium" sparklesCount={5} className="text-xs font-normal"></SparklesText>
        </span>
    )
}

export default PremiumCard