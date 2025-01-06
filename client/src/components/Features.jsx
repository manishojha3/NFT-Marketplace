import React from 'react';

const Features = () => {
    return (
        <>
            <section className="bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-3xl font-bold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                        Discover our <br /> exceptional <span className="text-blue-600">Features</span>
                    </h1>

                    <div className="grid grid-cols-1 gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Feature Item */}
                        <div className="flex flex-col items-center p-8 space-y-4 text-center transition-transform bg-white shadow-lg rounded-xl dark:bg-gray-800 hover:scale-105">
                            <span className="inline-flex items-center justify-center w-16 h-16 text-blue-600 bg-blue-100 rounded-full dark:bg-blue-600 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </span>
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Copy & paste components</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Build faster with pre-made components that are easy to integrate into your project.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 transition-colors duration-300 hover:underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                Learn More
                            </a>
                        </div>

                        {/* Feature Item */}
                        <div className="flex flex-col items-center p-8 space-y-4 text-center transition-transform bg-white shadow-lg rounded-xl dark:bg-gray-800 hover:scale-105">
                            <span className="inline-flex items-center justify-center w-16 h-16 text-green-600 bg-green-100 rounded-full dark:bg-green-600 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </span>
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Zero Configurations</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Start your project instantly without worrying about initial setup or dependencies.
                            </p>
                            <a
                                href="#"
                                className="text-green-600 transition-colors duration-300 hover:underline hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                            >
                                Learn More
                            </a>
                        </div>

                        {/* Feature Item */}
                        <div className="flex flex-col items-center p-8 space-y-4 text-center transition-transform bg-white shadow-lg rounded-xl dark:bg-gray-800 hover:scale-105">
                            <span className="inline-flex items-center justify-center w-16 h-16 text-purple-600 bg-purple-100 rounded-full dark:bg-purple-600 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Simple & Clean Designs</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Make your applications visually appealing with our minimalist design patterns.
                            </p>
                            <a
                                href="#"
                                className="text-purple-600 transition-colors duration-300 hover:underline hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
