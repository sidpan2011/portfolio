"use client"
import { birthday } from '@/lib/utils'
import React from 'react'

const Special = () => {
    
    return (
        birthday() && (
            <div className="bg-orange-400 w-full p-2 flex items-center justify-center">
                <div className="text-black flex items-center gap-2">
                    <span>🎉 Yay! It's my birthday today!</span>
                    <a href="https://x.com/sidhanthpande" className="hover:opacity-80">
                        <span className="underline">Wish me here 🥳</span>
                    </a>
                </div>
            </div>
        )
    )
}

export default Special