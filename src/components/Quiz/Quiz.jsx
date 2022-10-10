import React, { useEffect, useState } from 'react';
import {HiArrowCircleRight} from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom';

const Quiz = () => {
    const []useParams()
    const [quizs, setQuiz] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setQuiz(data.data))
    }, [])
    
    return (
        <div className='mt-12 overflow-hidden'>
            <h1 className='text-center font-bold text-5xl text-slate-800'>Lets Quiz</h1>

        <div className='grid grid-cols-2 w-full md:grid-cols-3 mx-auto lg:grid-cols-4  md:px-8 gap-5 py-8'>
            {
                quizs.map(quiz => {
                    return (
                        <div className='border-2 border-slate-100 rounded overflow- p-4 w-52 md:w-60'>
                            <img src={quiz.logo} alt="" />
                            <p className='text-base mt-1 font-semibold text-slate-800'>Total quiz: {quiz.total}</p>
                            <div className='flex mt-2 justify-between items-center'>
                                <p className='text-base md:text-lg font-semibold text-slate-800'>{quiz.name}</p>
                                <Link to={} state ={quiz.id} className='text-gray-800 font-bold text-4xl transition-all hover:text-indigo-400'><HiArrowCircleRight></HiArrowCircleRight></Link>
                            </div>
                        </div>
                    ) 
                })
            }
            </div>
    </div>
    );
};

export default Quiz;