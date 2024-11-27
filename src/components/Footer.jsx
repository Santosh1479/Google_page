import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="container text-sm mx-auto">
            <div className='h-[47px] bg-slate-200 flex items-center border border-slate-400'>
                <p className='pl-7'>India</p>
            </div>
            <div className='h-[47px] bg-slate-200 flex justify-between items-center hover:text-underline'>
                <ul className='flex  items-center gap-7 pl-8'>
                    <li><a href="">Advertising</a></li>
                    <li><a href="">Business</a></li>
                    <li><a href="">How Search Works</a></li>
                </ul>
                <ul className='flex  items-center gap-7 pr-5'>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Settings</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer