import React from 'react';


const Blogs = () => {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="container px-4 py-8 mx-auto">
                    <div className="lg:flex lg:-mx-4">
                        <div className="lg:w-3/4 lg:px-4">
                            <img
                                className="object-cover object-center w-full h-64 rounded-lg"
                                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="Blog Visual"
                            />

                            <div>
                                <p className="mt-4 text-xs text-blue-600 uppercase">Want to know</p>

                                <h1 className="mt-2 text-xl font-medium leading-snug text-gray-800 dark:text-white">
                                    What do you want to know about UI
                                </h1>

                                <div className="flex items-center mt-4">
                                    <img
                                        className="object-cover object-center w-8 h-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                        alt="Author"
                                    />

                                    <div className="ml-3">
                                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Lead Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-4">
                            <div>
                                <h3 className="text-blue-600 text-sm uppercase">Design Instrument</h3>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm font-medium text-gray-700 hover:underline dark:text-gray-400"
                                >
                                    How to raise $100k+ by using blox UI kit on your design
                                </a>
                            </div>

                            <hr className="my-4 border-gray-300 dark:border-gray-700" />

                            <div>
                                <h3 className="text-blue-600 text-sm uppercase">UI Resource</h3>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm font-medium text-gray-700 hover:underline dark:text-gray-400"
                                >
                                    Should you create a UI Product by using Blox?
                                </a>
                            </div>

                            <hr className="my-4 border-gray-300 dark:border-gray-700" />

                            <div>
                                <h3 className="text-blue-600 text-sm uppercase">Premium Collection</h3>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm font-medium text-gray-700 hover:underline dark:text-gray-400"
                                >
                                    Top 10 Blocks you can get on Blox's collection.
                                </a>
                            </div>

                            <hr className="my-4 border-gray-300 dark:border-gray-700" />

                            <div>
                                <h3 className="text-blue-600 text-sm uppercase">Premium Kits</h3>
                                <a
                                    href="#"
                                    className="block mt-2 text-sm font-medium text-gray-700 hover:underline dark:text-gray-400"
                                >
                                    Top 10 UI kits you can get on Blox's collection.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;
