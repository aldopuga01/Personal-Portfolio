import React from "react";
import ExperienceItem from "./ExperienceItem";

const data = [
    {
        title: "Documentador",
        company: "Universidad Politécnica de Victoria",
        date: "2022",
        desc: "Durante mi enstancia en la universidad fui parte de la implementación de la solución técnica de un nuevo sistema, creé una documentación completa para el software, que incluyó un manual técnico y otro de usuario para asegurar su uso efectivo.",
    },
    {
        title: "Frontend Developer",
        company: "Damtec",
        date: "2022",
        desc: "Desarrollé una nueva vista para el sitio web de la empresa utilizando WordPress, en la cual se incluyó información sobre los proyectos previamente realizados, así como un formulario de contacto para solicitar cotizaciones. Se implementó una solución a medida utilizando plugins y programación personalizada para satisfacer las necesidades.",
    },
    {
        title: "Full stack Developer",
        company: "Freelance",
        date: "2021",
        desc: "En colaboración con un equipo, desarrollé un sistema empresarial utilizando el framework Laravel. El sistema permite la visualización de los clientes, sus proyectos, las actividades de la empresa y los empleados de la organización.",
    },
];
const Experience = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Experiencia</h1>
            {data.map((item, idx) => (
                <ExperienceItem 
                    key={idx} 
                    title={item.title}
                    company={item.company} 
                    date={item.date} 
                    desc={item.desc} 
                />
            ))}
        </div>
    );
};

export default Experience;