import React from 'react'

const ExperienceItem = ({title, company, date, desc}) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200 pt-6 ml-3'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
                        {date}
                    </span>
                    <span className='text-lg font-semibold text-[#001b5e]'>
                        {company}
                    </span>
                    <span className='my-1 text-sm font-normal leading-none text-stone-400'>
                        {title}
                    </span>
                </p>
                <p className='my-2 text-base font-normal text-stone-400'>{desc}</p>
            </li>
        </ol>
    )
}

export default ExperienceItem
