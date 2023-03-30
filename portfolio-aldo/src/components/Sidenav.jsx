import React, {useState} from "react";
import { 
    AiOutlineMenu, 
    AiOutlineHome, 
    AiOutlineHistory, 
    AiOutlineProject,
    AiOutlineMail
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";


const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-gradient-to-b from-indigo-600 to-blue-400 flex flex-col justify-center items-center z-20'> 
                        <a 
                            href="#main" 
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <AiOutlineHome size={20} className="text-indigo-600"/>
                            <span className='pl-4 text-black'>Home</span>
                        </a>
                        <a 
                            href="#main" 
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <AiOutlineHistory size={20} className="text-indigo-600"/>
                            <span className='pl-4 text-black'>Experience</span>
                        </a>
                        <a 
                            href="#main" 
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <AiOutlineProject size={20} className="text-indigo-600"/>
                            <span className='pl-4 text-black'>Projects</span>
                        </a>
                        <a 
                            href="#main" 
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <BsPerson size={20} className="text-indigo-600"/>
                            <span className='pl-4 text-black'>Resume</span>
                        </a>
                        <a 
                            href="#main" 
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <AiOutlineMail size={20} className="text-indigo-600"/>
                            <span className='pl-4 text-black'>Contact</span>
                        </a>
                    </div>
                )
                : (
                    ''
                )}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a 
                        href="#main" 
                        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <AiOutlineHome size={20} className="text-indigo-600"/>
                    </a>
                    <a 
                        href="#main" 
                        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <AiOutlineHistory size={20} className="text-indigo-600"/>
                    </a>
                    <a 
                        href="#main" 
                        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <AiOutlineProject size={20} className="text-indigo-600"/>
                    </a>
                    <a 
                        href="#main" 
                        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <BsPerson size={20} className="text-indigo-600"/>
                    </a>
                    <a 
                        href="#main" 
                        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <AiOutlineMail size={20} className="text-indigo-600"/>
                    </a>
                </div>
            </div>


        </div>
    );
};
export default Sidenav;
