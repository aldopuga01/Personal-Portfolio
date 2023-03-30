import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover'
            src='https://images.unsplash.com/photo-1658708818685-b524d9abd4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
            alt='Fondo de página: Fotografía por Jandra Sutton en Unsplash https://unsplash.com/es/@jandralee' 
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1>Soy Aldo</h1>
                    <h2>
                        <span>Desarrollador Web Jr. </span>
                        <span>
                            <TypeAnimation
                            sequence={[
                                "FrontEnd", // Types 'One'
                                1000, // Waits 1s
                                "BackEnd", // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            />
                        </span>
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href='https://github.com/aldopuga01' target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='cursor-pointer' size={25} style={{ marginRight: '10px' }} />
                        </a>
                        <a href='https://www.linkedin.com/in/aldo-puga-vega-7b4201185/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin className='cursor-pointer' size={25} style={{ marginRight: '10px' }} />
                        </a>
                        <a href='https://www.instagram.com/pugaldo01/' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='cursor-pointer' size={25} style={{ marginRight: '10px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;