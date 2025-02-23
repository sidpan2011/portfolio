"use client"
import React, { useEffect, useState } from 'react'

const LastUpdated = () => {
    const [lastUpdated, setLastUpdated] = useState("--")
    useEffect(() => {
        const fetchBuildLogs = async () => {
            try {
                const response =  await fetch(`https://api.vercel.com/v6/deployments`, {
                    headers: {
                        Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`
                    }
                })
                if (!response.ok) {
                    throw new Error("Failed to fetch deployment data")
                }
                const data = await response.json()
                const lastDeployments = data.deployments.filter(d => d.name === "porfolio")?.[0]
                if(lastDeployments){
                    const deployDate = new Date(lastDeployments.created).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })
                    setLastUpdated(deployDate)
                }
            } catch (error) {
                console.error("Error fetching deployment data:", error);
            }
        }
        fetchBuildLogs()
    }, [])
    return (
        <div className='mb-52'>
            <p className='dark:text-white/50 text-black/50 text-sm'>Last updated on <span>{lastUpdated}</span> </p>
        </div>
    )
}

export default LastUpdated