"use client"
import { IoBookSharp } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation" ;
import Image from "next/image";
export default function Login() {
    const router = useRouter();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleLogin=()=>{
        if (email ==='admin@gmail.com' && password ==='admin123'){
            router.push('/dashboard');
        }
        else if(email=== 'user@gmail.com' && password ==='user123'){
            router.push('/books')

        }
        else{
            alert('Invalid credentials')
        }

    }


    return (
        <div className='flex h-screen  '>
            <div className='flex flex-col  bg-orange-950 items-center justify-center h-full w-[50%] '>
                <div className='bg-orange-950 p-20 text-white rounded-lg shadow-[0_0_40px_gray] transform transition-transform  duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_70px_gray]'  >
                    <p className='font-semibold flex gap-9 pl-[17px] text-[15px]'> <IoBookSharp className="mt-1.5" /> Book house</p>
                    <h1 className='text-center font-bold text-2xl pt-2 font-bebas' >Log In</h1>
                    <div className='flex flex-col'>
                        <label className='pt-3 ml-1 font-bold pb-3 '>E mail</label>
                        <input
                            type="text"
                            placeholder='E mail'
                            className='font-thin focus:outline-none pl-5 bg-white text-black p-2 shadow-[0_0_10px_black] rounded-[3px]'
                            onChange={(e)=>setEmail(e.target.value)}

                        />
                    </div>
                    <div>

                        <label className='flex flex-col ml-1 font-bold pt-3 pb-3'>password</label>
                        <input
                            type="password"
                            placeholder='password'
                            className='font-thin focus:outline-none pl-4 bg-white text-black p-2 shadow-[0_0_10px_black] rounded-[3px]'
                            onChange={(e)=>setPassword(e.target.value)}

                        />
                    </div>


                    <button className='mt-5 text-black ml-13 font-bold bg-green-700 w-30  h-10 rounded-[3px] hover:bg-green-500 ' onClick={handleLogin}>Sing In</button>
                    <div className="flex flex-row text-[12px] font-bold mt-5">
                        <p> New to bookHouse? <a href="./">Create an account</a></p>

                    </div>
                </div>

            </div>
            <div className=" w-1/2 relative">
                <Image fill style={{objectFit: 'cover' }}
                    src="/books.jpg"

                    alt="books"
                
                
                />
                <div className=" absolute  inset-0 flex items-center justify-center">
                    <h1 className="text-white text-[55px] font-bold font-bebas"> <p>Welcome To</p><p className="ml-9">My Libary </p></h1>

                    
                </div>

                

            </div>

        </div>
    )
}


