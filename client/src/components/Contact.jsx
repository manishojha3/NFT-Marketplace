import React from 'react';

const Contact = () => {
    return (
        <section className="contact min-h-screen bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
        }}>
            <div className="flex flex-col min-h-screen bg-black/60">
                <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                    <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                        {/* Text Section */}
                        <div className="text-white lg:w-1/2 lg:mx-6">
                            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Ultimate design solution</h1>
                            <p className="max-w-xl mt-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quo
                                aliquid molestiae hic incidunt beatae placeat accusantium!
                            </p>
                            <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white bg-pink-600 rounded-md hover:bg-pink-500">
                                Get in Touch
                            </button>
                            {/* Social Links */}
                            <div className="mt-6">
                                <h3 className="text-gray-300">Follow us</h3>
                                <div className="flex mt-4 space-x-4">
                                    <a href="#" aria-label="Twitter" className="hover:text-pink-500">
                                        <svg className="w-6 h-6" /* Add title or aria-label */></svg>
                                    </a>
                                    {/* Other Social Links */}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div className="w-full px-8 py-10 bg-white rounded-xl shadow-2xl">
                                <h1 className="text-xl font-medium text-gray-700">Contact Form</h1>
                                <p className="mt-2 text-gray-500">
                                    Ask us anything, we'd love to hear from you.
                                </p>
                                <form className="mt-6 space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Full Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-4 py-2 border rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="johndoe@example.com"
                                            className="w-full px-4 py-2 border rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Message</label>
                                        <textarea
                                            id="message"
                                            placeholder="Your message"
                                            className="w-full px-4 py-2 border rounded-md"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-2 text-white bg-pink-600 rounded-md hover:bg-pink-500">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
