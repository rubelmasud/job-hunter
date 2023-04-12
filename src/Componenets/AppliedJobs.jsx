import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../Utilitis/FakeDB';
import ApplyJobCart from './ApplyJobCart';

const AppliedJobs = ({ job }) => {

    const [jobs, setJobs] = useState([])
    const [allJobs, setAllJobs] = useState([])

    useEffect(() => {

        const getStoredJob = getShoppingCart()
        const savedJobCart = []

        for (const id in getStoredJob) {
            const addedJob = jobs.find(job => job.id == id)
            if (addedJob) {
                const quantity = getStoredJob[id];
                addedJob.quantity = quantity
                savedJobCart.push(addedJob)

            }
        }
        setAllJobs(savedJobCart)
    }, [jobs])
    // console.log(allJobs);

    useEffect(() => {
        fetch('/FeaturedJobsData.json')
            .then(res => res.json())
            .then(jobs => setJobs(jobs))
    }, [])

    return (
        <div className='my-28'>
            <div className="justify-end flex gap-4 mr-14">
                <button className='btn-primary'>Remote</button>
                <button className='btn-primary'>Onside</button>
            </div>
            {
                allJobs.map(job => <ApplyJobCart
                    key={job.id}
                    job={job}
                ></ApplyJobCart>)
            }
        </div>
    );
};

export default AppliedJobs;