import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover'
            src='https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' 
            alt='Fondo de página: Fotografía por Kees Streefkerk kees_streefkerk en Unsplash https://unsplash.com/es/@kees_streefkerk' 
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-3xl font-semibold text-gray-800 pb-3'>Soy Aldo</h1>
                    <h2>
                        <span className='sm:text-3xl text-2xl font-semibold text-gray-800 pt-6'>Desarrollador Web Jr. </span>
                        <span className='sm:text-3xl text-2xl font-semibold text-gray-800 pt-6'>
                            <TypeAnimation
                            sequence={[
                                "FrontEnd", // Types 'One'
                                3000, // Waits 1s
                                "BackEnd", // Deletes 'One' and types 'Two'
                                3000, // Waits 2s
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            />
                        </span>
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px]' >
                        <a href='https://github.com/aldopuga01' target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='cursor-pointer' size={35} style={{ marginRight: '10px' }} />
                        </a>
                        <a href='https://www.linkedin.com/in/aldo-puga-vega-7b4201185/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin className='cursor-pointer' size={35} style={{ marginRight: '10px' }} />
                        </a>
                        <a href='https://www.instagram.com/pugaldo01/' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='cursor-pointer' size={35} style={{ marginRight: '10px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;