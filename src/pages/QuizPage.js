import React, { useEffect, useState } from 'react';
import {useLocation, useParams } from 'react-router';
import Qustion from '../components/Qustions/Qustion';

const QuizPage = () => {
    const { id } = useParams()
    const  location  = useLocation()
    const [qustions , setQustins] = useState([])
    useEffect(() => {
        fetch(` https://openapi.programming-hero.com/api/quiz/${id}`)
            .then(res => res.json())
        .then(data => setQustins(data.data.questions))
    }, [id])
    return (
        <div key={id}>
            <p className='text-4xl text-slate-800 font-bold text-center my-8'>{location.state} Questions</p>
            <p  className='text-xl text-slate-800 font-bold text-center my-8'>Note: if you select question any option. Then you can't remove your select option.</p>
            {
                qustions.map(qustion =><Qustion key={qustion.id} qustions={qustion}></Qustion>)
            }
        </div>
    );
};

export default QuizPage;