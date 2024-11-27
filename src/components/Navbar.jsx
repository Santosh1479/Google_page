import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between h-[60px] items-center pl-4 min-w-screen '>
        <ul className='flex gap-4'>
            <li><a className='text-sm' href="https://about.google/">About</a></li>
            <li><a className='text-sm' href="https://store.google/">Store</a></li>
        </ul>
        <ul className='flex gap-5 pr-5 '>
            <li><a className='text-sm' href="">Gmail</a></li>
            <li><a className='text-sm' href="">Images</a></li>
            <li><a href=""><img className='w-5' src="/icons/beaker.png" alt="Beaker" /></a></li>
            <li><a href=""><img className='w-5' src="/icons/phone.png" alt="Phone" /></a></li>
            <li><a href=""><img className='w-5' src="/icons/user.png" alt="User" /></a></li>
        </ul>
    </nav>
    
    </>
  )
}

export default Navbar