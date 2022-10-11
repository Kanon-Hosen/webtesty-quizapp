import React, { useContext } from 'react';
import { HiArrowCircleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { contextData } from '../App';
const Topics = () => {
    const topics = useContext(contextData);
    console.log(topics)
    return (
        <div>
            <h1 className='text-center mt-10 font-bold text-5xl'>Quiz topics</h1>
            <div className='grid grid-cols-2 w-full md:grid-cols-3 mx-auto lg:grid-cols-4  md:px-8 gap-5 py-8'>
            {
                    topics.map(topics => {
                        const { id, name, logo, total } = topics;
                    return (
                        <div key={topics.id} className='bg-indigo-200 border-2 border-slate-100 rounded overflow- p-4 w-52 md:w-60'>
                            <img src={logo} alt="" />
                            <p className='text-base mt-1 font-semibold text-slate-800'>Total quiz: {total}</p>
                            <div className='flex mt-2 justify-between items-center'>
                                <p className='text-base md:text-lg font-semibold text-slate-800'>{name}</p>
                                <Link to={`${id}`} state={name} className='text-gray-800 font-bold text-4xl transition-all hover:text-indigo-400'><HiArrowCircleRight></HiArrowCircleRight></Link>
                            </div>
                        </div>
                    ) 
                })
            }
            </div>
        </div>
    );
};

export default Topics;