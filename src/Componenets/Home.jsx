import React from 'react';

const Home = () => {
    return (
        <div>
            <header className='lg:flex items-center gap-[70px] lg:px-20 pt-10 bg-gray-100 mb-[130px]'>
                {/* img-section */}
                <div className="">
                    <img className='w-[816px]' src="https://i.ibb.co/nzWr29L/jhankar-removebg-preview.png" alt="jhankar-removebg-preview" border="0"></img>
                </div>
                {/* text-section */}
                <div className="mr-[150px] w-full px-2">
                    <h1 className='lg:font-extrabold font-semibold text-3xl lg:text-7xl mb-6'>One Step <br></br> Closer To Your <span className='bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text'> Dream Job</span></h1>
                    <p className='text-[#757575] mb-8'>Explore thousands of job opportunities with all the <br></br> information you need. Its your future. Come find it. Manage all <br></br> your job application from start to finish.</p>
                    <button className='btn-primary'>Get Started</button>
                </div>
            </header>


        </div>
    );
};

export default Home;