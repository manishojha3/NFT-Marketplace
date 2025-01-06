import React from 'react';

const Pricing = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12">
            <div className="container px-8 py-12 mx-auto text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">Choose the Best Plan</h1>
                <p className="max-w-xl mx-auto mt-4 text-white text-lg xl:mt-6">
                    Select the plan that fits your needs and start enjoying our services. We offer flexibility and ease.
                </p>

                <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 xl:mt-14">
                    {/* Basic Plan */}
                    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 text-center transition-all hover:scale-105 hover:shadow-2xl">
                        <div className="flex justify-center items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-200">Basic</h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-300">For personal use, limited features</p>
                        <h3 className="text-3xl font-semibold text-indigo-600 mt-6">$0 <span className="text-lg font-medium text-gray-500">/Free</span></h3>
                    </div>

                    {/* Standard Plan */}
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl rounded-xl p-6 text-center transition-all hover:scale-105 hover:shadow-2xl">
                        <div className="flex justify-center items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-medium">Standard</h2>
                        <p className="mt-4">Save 30% with this plan. Ideal for startups</p>
                        <h3 className="text-3xl font-semibold mt-6">$99 <span className="text-lg font-medium">/Yearly</span></h3>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 text-center transition-all hover:scale-105 hover:shadow-2xl">
                        <div className="flex justify-center items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-200">Pro</h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-300">For professionals, full features</p>
                        <h3 className="text-3xl font-semibold text-indigo-600 mt-6">$149 <span className="text-lg font-medium">/Month</span></h3>
                    </div>
                </div>

                <div className="mt-12 space-y-6 bg-gray-100 dark:bg-gray-700 rounded-xl p-8">
                    <div className="flex items-center justify-between text-gray-700 dark:text-gray-200">
                        <p className="text-lg">Unlimited Links</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-between text-gray-700 dark:text-gray-200">
                        <p className="text-lg">Own Analytics Platform</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-between text-gray-700 dark:text-gray-200">
                        <p className="text-lg">Full Support</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-between text-gray-700 dark:text-gray-200">
                        <p className="text-lg">Mobile App</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div className="mt-8">
                    <button className="px-10 py-3 text-white bg-indigo-600 rounded-full text-lg hover:bg-indigo-500 transition-all duration-300">
                        Choose Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
