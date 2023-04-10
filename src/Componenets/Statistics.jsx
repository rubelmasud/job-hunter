import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Statistics = () => {
    const marks = [
        {
            "name": "Assignment-1",
            "Marks": 57
        },
        {
            "name": "Assignment-2",
            "Marks": 58
        },
        {
            "name": "Assignment-3",
            "Marks": 56
        },
        {
            "name": "Assignment-4",
            "Marks": 58
        },
        {
            "name": "Assignment-5",
            "Marks": 57
        },
        {
            "name": "Assignment-6",
            "Marks": 58
        },
        {
            "name": "Assignment-7",
            "Marks": 59
        },
        {
            "name": "Assignment-8",
            "Marks": 58
        }
    ]
    return (
        <div className='my-12 w-11/12 mx-auto bg-gray-100'>

            <h1 className='text-3xl font-extrabold underline text-center py-6'>Assignment Statistics
            </h1>
            <BarChart className='text-blue-500 mx-auto '
                width={800}
                height={300}
                data={marks}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='Marks'></Bar>
            </BarChart>
        </div>
    );
};

export default Statistics;