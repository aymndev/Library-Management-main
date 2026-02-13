"use client"
import React, { useState } from 'react'
import { IoBookSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className='fixed top-0 left-0 z-50 flex flex-col w-[18%] bg-gray-100 h-screen shadow-[0_0_10px_black]'>
      <div className='flex items-center justify-center pt-5'>
        <IoBookSharp className='text-black h-9 mr-2' />
        <p className='font-bold'>BookHouse</p>
      </div>
      <hr className="my-6 border-0.5 border-black" />

      <div className='p-1 flex flex-col gap-1 flex-1'>
        <nav className='flex flex-col gap-4 p-5'>
          <a href='/dashboard' className='hover:bg-green-500 rounded-lg p-3 transform transition-transform duration-300 hover:scale-105 hover:font-bold'>Dashboard</a>
          <a href="/dashboard/users" className='hover:bg-green-500 rounded-lg p-3 transition-transform duration-300 hover:scale-105 hover:font-bold'>All Users</a>
          <a href="/dashboard/panding" className='hover:bg-green-500 rounded-lg p-3 transition-transform duration-300 hover:scale-105 hover:font-bold'>Pending Books</a>
          <a href="/dashboard/books" className='hover:bg-green-500 rounded-lg p-3 transition-transform duration-300 hover:scale-105 hover:font-bold'>All Books</a>
          <a href="/dashboard/accountReq" className='hover:bg-green-500 rounded-lg p-3 transition-transform duration-300 hover:scale-105 hover:font-bold'>Account Requests</a>
        </nav>
      </div>

      {/* Logout Section at Bottom */}
      <div className='p-5 border-t border-gray-300'>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
          >
            <span>Logout</span>
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute bottom-full mb-2 w-full bg-white rounded-lg shadow-lg border border-gray-200">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-t-lg"
              >
                Logout
              </button>
              <a
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg"
              >
                Settings
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

