import React, { useEffect, useState } from 'react';
import {useLocation, useParams } from 'react-router';
import Qustion from '../components/Qustions/Qustion';

const QuizPage = () => {
    const { id } = useParams()
    const  location  = useLocation()
    console.log(location)
    const [qustions , setQustins] = useState([])
    useEffect(() => {
        fetch(` https://openapi.programming-hero.com/api/quiz/${id}`)
            .then(res => res.json())
        .then(data => setQustins(data.data.questions))
    }, [id])
    // console.log(qustions)
    return (
        <div>
            <p className='text-4xl text-slate-800 font-bold text-center my-8'>{location.state} Questions</p>
            {
                qustions.map(qustion =><Qustion key={qustion.id} qustions={qustion}></Qustion>)
            }
        </div>
    );
};

export default QuizPage;