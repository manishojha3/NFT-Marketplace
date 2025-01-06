import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
                <div className="container mx-auto px-6 py-10">
                    <div className="lg:flex lg:justify-between">
                        <div className="lg:w-2/5">
                            <Link className="text-4xl font-extrabold tracking-wide text-white hover:text-gray-400" href={"/"}>
                                NFT Marketplace
                            </Link>
                            <p className="mt-4 max-w-md text-gray-400">
                                Join our community and stay updated with the latest trends, tutorials, and tips.
                            </p>
                            <div className="flex mt-6 space-x-4">
                                <a href="#" className="text-gray-400 hover:text-pink-500">
                                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-500">
                                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M22 12.002C22 6.485 17.514 2 12 2S2 6.485 2 12.002c0 5.013 3.672 9.163 8.436 9.87v-6.96h-2.54v-2.91h2.54v-2.247c0-2.509 1.492-3.895 3.772-3.895 1.092 0 2.23.196 2.23.196v2.448h-1.255c-1.236 0-1.623.767-1.623 1.551v1.848h2.773l-.443 2.91h-2.33v6.96C18.328 21.164 22 17.014 22 12.002z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-green-500">
                                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12.026 2C7.133 2 2.962 5.548 2.178 10.378c-.785 4.83 2.05 9.516 6.693 11.062.5.09.679-.217.679-.482v-1.81c-2.726.59-3.312-1.347-3.312-1.347-.454-1.155-1.109-1.463-1.109-1.463-.91-.62.069-.608.069-.608 1.006.071 1.535 1.032 1.535 1.032.893 1.532 2.342 1.09 2.914.833.09-.648.35-1.09.636-1.34-2.175-.247-4.452-1.087-4.452-4.845 0-1.07.385-1.945 1.017-2.628-.101-.247-.441-1.247.097-2.6 0 0 .834-.267 2.734 1.017A9.48 9.48 0 0 1 12 6.653a9.48 9.48 0 0 1 2.49.335c1.9-1.284 2.734-1.017 2.734-1.017.538 1.353.198 2.353.097 2.6.632.683 1.017 1.558 1.017 2.628 0 3.767-2.281 4.594-4.464 4.837.36.31.678.926.678 1.866v2.77c0 .268.178.574.683.482 4.643-1.546 7.477-6.232 6.693-11.062C21.038 5.548 16.866 2 12.026 2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-10 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold">About</h3>
                                    <ul className="mt-4 space-y-2">
                                        <li><a href="#" className="text-gray-400 hover:underline">Company</a></li>
                                        <li><a href="#" className="text-gray-400 hover:underline">Community</a></li>
                                        <li><a href="#" className="text-gray-400 hover:underline">Careers</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Resources</h3>
                                    <ul className="mt-4 space-y-2">
                                        <li><a href="#" className="text-gray-400 hover:underline">Blog</a></li>
                                        <li><a href="#" className="text-gray-400 hover:underline">Tutorials</a></li>
                                        <li><a href="#" className="text-gray-400 hover:underline">Help Center</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Contact</h3>
                                    <ul className="mt-4 space-y-2">
                                        <li><span className="text-gray-400">+1 123 456 7890</span></li>
                                        <li><span className="text-gray-400">support@nftmarketplace.com</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-gray-700 pt-6">
                        <p className="text-center text-gray-500">© 2025 NFT Marketplace - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
