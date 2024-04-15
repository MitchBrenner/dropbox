import { SignedOut, UserButton, SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'

function Header() {
  return (
    <header className='flex items-center justify-between'>
        <Link href={"/"} className='flex items-center space-x-3'>
            <div className='bg-[#0160fe] w-fit'>
                <Image 
                    src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
                    alt="Drop Box Logo"
                    width={50}
                    height={50}
                    className='invert'
                />
            </div>
            <h1 className='text-xl font-bold'>
                Drop Box
            </h1>
        </Link>
        <div className='flex px-5 space-x-2 items-center'>
            {/* Theme toggle */}
            <ThemeToggler />

            {/* User profile */}
            <UserButton afterSignOutUrl='/' />

            {/* Built in component that only displays when signed out */}
            <SignedOut>
                <SignInButton afterSignInUrl='/dashboard' mode='modal' />
            </SignedOut>
        </div>
    </header>
  )
}

export default Header