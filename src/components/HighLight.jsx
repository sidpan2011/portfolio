import React from 'react'

const HighLight = ({ text, extraClassName }) => {
  return (
    <h1 className={`font-normal text-sm mx-auto rounded-lg bg-black dark:bg-white text-white dark:text-black w-fit px-2 py-1 ${extraClassName}`}>{text}</h1>
  )
}

export default HighLight