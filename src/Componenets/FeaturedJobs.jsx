import React, { useEffect, useState } from 'react';
import FeaturedJobCart from './FeaturedJobCart';

const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJob] = useState([])
    const [showAllJobs, setShowAllJobs] = useState(false)



    useEffect(() => {
        fetch('/FeaturedJobsData.json')
            .then(res => res.json())
            .then(data => setFeaturedJob(data.slice(0, 4)))
    }, [])

    const handleShowAllJobs = () => {

        fetch('/FeaturedJobsData.json')
            .then(res => res.json())
            .then(data => setShowAllJobs(data))
    }

    return (
        <div>
            <div className="text-center mb-8">
                <h1 className='text-5xl font-extrabold mb-4'>Featured Jobs</h1>
                <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* Featured-Jobs-section */}
            {
                showAllJobs
                    ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-6 mb-10">
                        {
                            showAllJobs.map(featuredJob => <FeaturedJobCart
                                key={featuredJob.id}
                                featuredJob={featuredJob}
                            ></FeaturedJobCart>)
                        }
                    </div>
                    : <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-6 mb-10">
                        {
                            featuredJobs.map(featuredJob => <FeaturedJobCart
                                key={featuredJob.id}
                                featuredJob={featuredJob}
                            ></FeaturedJobCart>)
                        }
                    </div>
            }
            <button className='btn-primary flex  mb-[130px] mx-auto' onClick={() => handleShowAllJobs(!showAllJobs)}>Show All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;