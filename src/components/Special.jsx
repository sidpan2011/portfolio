"use client"
import React, { useEffect } from 'react'

const Special = () => {
    const today = new Date()
    const birthday = new Date(today.getFullYear(), 10, 28)
    const isToday = today.getMonth() === birthday.getMonth() &&
        today.getDate() === birthday.getDate() ? true : false;
    return (
        isToday && (
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