import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter
} from "recharts";


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
            <ComposedChart stroke="#f5f1f5"
                width={1000}
                height={400}
                data={marks}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Marks" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="Marks" barSize={10} fill="#413ea0" />
                <Line type="monotone" dataKey="Marks" stroke="#ff7300" />
                <Scatter dataKey="Marks" fill="red" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;