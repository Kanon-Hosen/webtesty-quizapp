import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-slate-700 text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">
			<span className="text-violet-400">Some Questions </span>answer
		</h1>
	</div>
</section>
        <div className='mt-5 mx-auto w-4/5'>
            <div className='p-4 bg-slate-200 rounded mt-4'>
            <h1 className='text-3xl my-2 text-slate-900 font-semibold'>What is the purpose of react router?</h1>
            <p className='text-slate-800 text-base'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
            </div>
            <div className='p-4 bg-slate-200 rounded mt-4'>
            <h1 className='text-3xl my-2 text-slate-900 font-semibold'>How does context api works?</h1>
            <p className='text-slate-800 text-base'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent</p>
            </div>
            <div className='p-4 bg-slate-200 rounded mt-4'>
            <h1 className='text-3xl my-2 text-slate-900 font-semibold'>How does useRef works?</h1>
            <p className='text-slate-800 text-base'>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            </div>
            </div>
            </div>
    );
};

export default Blog;