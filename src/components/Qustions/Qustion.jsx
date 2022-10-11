import React, { useState } from 'react';
import { HiEye } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Qustion = ({ qustions }) => {
    const {id, question, correctAnswer, options } = qustions;
    const answer = correctAnswer.split('  ');
    const mainAnswer = answer.join(' ');
    const [active, setActive] = useState(false);
    const [model, setModel] = useState(true);
    // const notify = () => toast("Wow so easy!");
    const correctAns = (value) => {
        value.style.pointerEvents = "none";
        setActive(!active)
        if (value.innerText === mainAnswer) {
            toast.success('Correct answer!')
            value.style.pointerEvents = "none";
            value.style.backgroundColor= ' rgb(34, 197, 94 )'
            value.style.color= 'white'

        }
        else {
            toast.error('Opps incorrect')
            value.style.backgroundColor= 'red'
            value.style.pointerEvents = "none";
            value.style.color= 'white'
        }

    }
    return (
        
        <div key={id} className='relative p-8 w-full my-32 md:w-1/2 mx-auto flex flex-col  shadow-lg h-fit'>
            <HiEye onClick={()=> setModel(!model)} className='absolute top-3 right-5 font-bold text-slate-800 text-3xl cursor-pointer'></HiEye>
            <div className={`transition-transform  ${model ? ' scale-0 ' : 'scale-100'} absolute top-3 right-14`}>
            <div className="flex items-start justify-between max-w-sm p-3 space-x-4 rounded-md bg-gray-900 text-gray-100">
	        <div className="flex flex-col flex-1 px-2 space-y-1">
		    <span className="text-sm font-semibold">Answer:</span>
		    <span className="text-sm text-gray-400">{correctAnswer}.</span>
	        </div>
            </div>
            </div>
            <p className='font-bold text-lg mb-8'>{question}</p>
            <div className='grid gap-x-8 gap-y-5'>
            {
                options.map(option => {
                    return (
                        <div key={option.id}>
                            <button id='qus' onClick={(e) => correctAns(e.target)} className={` ${active ? 'pointer-events-none' : 'cursor-pointer'} bg-gray-200 hover:bg-slate-300 w-full text-base font-semibold p-4 rounded-full`}>
                                {option}
                            </button>
                            <ToastContainer
                                autoClose={1000}
                            />
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default Qustion;