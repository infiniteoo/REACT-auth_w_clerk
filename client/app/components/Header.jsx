import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <div>
        <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
            <div className="flex items-center">
                <Link href='/'>
                    <div className="text-lg uppercase font-bold text-white">
                        Clerk App
                    </div>
                </Link>

            </div>
            <div className="text-white">
                <Link href="sign-in" className="text-gray-300 hover:text-white mr-4">
                    Sign In 
                </Link>
                <Link href="sign-out" className="text-gray-300 hover:text-white mr-4">
                    Sign Out 
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Header