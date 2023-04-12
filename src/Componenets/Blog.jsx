import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <div className="my-8 border p-4 rounded bg-gray-100 shadow-md">
                <h3 className='text-2xl font-semibold  m-6 rounded px-4 text-blue-800'>
                    When context api are used?
                </h3>
                <p>In general, the Context API is useful when you have data that needs to be shared across multiple components in your application, and you want to avoid the overhead of passing that data through every level of the component tree using props!!!</p>
            </div>
            <div className="my-8 border p-4 rounded bg-gray-100 shadow-md">
                <h3 className='text-2xl font-semibold  m-6 rounded px-4 text-blue-800'>
                    What is custom hook?
                </h3>
                <p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function!!!</p>
            </div>
            <div className="my-8 border p-4 rounded bg-gray-100 shadow-md">
                <h3 className='text-2xl font-semibold  m-6 rounded px-4 text-blue-800'>
                    What is useRef?
                </h3>
                <p>The useRef Hook allows you to persist values between renders.
                    It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    !!!</p>
            </div>
            <div className="my-8 border p-4 rounded bg-gray-100 shadow-md">
                <h3 className='text-2xl font-semibold  m-6 rounded px-4 text-blue-800'>
                    What is useMemo?
                </h3>
                <p>In React, useMemo is a hook that allows you to memoize the result of a function call and only recompute it if the dependencies of the function have changed. Memoization is a technique that helps improve the performance of your application by caching the results of expensive calculations.
                    !!!</p>
            </div>
        </div>
    );
};

export default Blog;