import React, { useEffect, useState } from 'react';
import JobCategoryCart from '../JobCategoryCart';

const JobCategoryList = () => {

    const [jobsCategory, setJobsCategory] = useState([])

    useEffect(() => {
        fetch('../../public/jobCategoryData.json')
            .then(rse => rse.json())
            .then(data => setJobsCategory(data))
    }, [])
    // console.log(jobsCategory);
    return (
        <div>
            <div className="text-center">
                <h1 className='text-5xl font-extrabold mb-4'>Job Category List</h1>
                <p className='text-[#757575] mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:px-[60px]">
                {
                    jobsCategory.map(job => <JobCategoryCart
                        key={job.id}
                        job={job}
                    ></JobCategoryCart>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;