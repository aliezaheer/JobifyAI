"use client";
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const path = usePathname();
    return (
      <div className="p-4 flex items-center justify-between bg-secondary shadow-sm">
        <Image src="/logo.svg" alt="Logo" width={160} height={100} className="mr-4" />
        <ul className="hidden md:flex space-x-4">
          <li><a href="/dashboard" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-primary font-bold'}`}>Dashboard</a></li>
          <li><a href="/dashboard/questions" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/questions' && 'text-primary font-bold'}`}>Questions</a></li>
          <li><a href="/dashboard/upgrade" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</a></li>
          <li><a href="/dashboard/how-it-works" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/how-it-works' && 'text-primary font-bold'}`}>How It Works</a></li>
        </ul>
        <UserButton />
      </div>
    );
};

export default Header;