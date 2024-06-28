import React from 'react'

const Button = ({setShowNote, title, logoutBut}) => {
  return (
    <a className="relative" href="#" onClick={()=>{
        setShowNote(true)
      }}>
      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-700"></span>
      <span className="flex items-center justify-center fold-bold relative inline-block h-full w-full rounded border-2 border-slate-700 px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-[#9981EF]  hover:text-slate-900 dark:bg-transparent">{title}</span>
      </a>
  )
}

export default Button
