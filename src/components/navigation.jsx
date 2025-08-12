import React from 'react'
import { Link } from 'react-router'

const Navigation = () => {
  return (
    <div>
      <nav className='bg-gray-800 p-4'>
        <ul className='flex space-x-6 justify-center'>
        <li>
            <Link to="/" className='text-white font-semibold hover:text-gray-300'>
                Home
            </Link>
        </li>
         <li>
            <Link to="/details" className='text-white font-semibold hover:text-gray-300'>
                Details
            </Link>
        </li>
         <li>
            <Link to="/about" className='text-white font-semibold hover:text-gray-300'>
                About us
            </Link>
        </li>
         <li>
            <Link to="/contactus" className='text-white font-semibold hover:text-gray-300'>
                Conatact us
            </Link>
        </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
