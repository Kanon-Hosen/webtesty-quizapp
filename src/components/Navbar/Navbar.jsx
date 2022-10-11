import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	const [open, setOpen] = useState(true);
    return (
        <div className=''>
            <header className="px-8 shadow-lg dark:bg-slate-800 dark:text-gray-100">
			<div className="container flex justify-between md:justify-center h-16 mx-auto">
					<Link to="/" className="flex items-center mr-4 text-indigo-300 font-semibold text-xl p-2">
					Web <span className='text-indigo-500'>Testy</span>
					</Link>
					<ul className={`z-20  absolute md:relative md:top-0 md:left-0 left-0 top-16 bg-slate-700 md:bg-transparent w-full flex flex-col md:h-full md:flex-row md:w-fit transition-all justify-between items-center p-4 md:items-stretch md:space-x-3 md:flex ${open ? 'h-0 hidden' : 'h-44 flex'}`}>
			<li className="flex px-5">
				<NavLink to="/topics"  >Topics</NavLink>
			</li>
			<li className="flex px-5">
				<NavLink to="/statistics" >Statistics</NavLink>
			</li>
			<li className="flex px-5">
				<NavLink to="Blog" >Blog</NavLink>
			</li>
		</ul>
		<button onClick={()=>setOpen(!open)} className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </div>
    );
};

export default Navbar;