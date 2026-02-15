"use client"
import { IoBookSharp } from "react-icons/io5";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        router.push('/login');
    };

    return (
        <div className="flex justify-between w-full px-20 py-5 bg-gray-100 shadow-[0_0_5px_black]  rounded-b-xl">
            <div className="flex items-center">
                <p className="text-2xl font-bold flex gap-2">
                    <IoBookSharp className="h-9" /> Book House
                </p>
            </div>

            <div className="flex items-center gap-10">
                <a href="/books" className="hover:text-green-600 font-medium">Library</a>

                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105"
                    >
                        Log out
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
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


