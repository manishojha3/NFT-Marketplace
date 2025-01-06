import Head from 'next/head';
import React from 'react';

const About = () => {
  return (
    <>
      <Head>
        <title>NFT Marketplace - About Us</title>
      </Head>
      <div className="container mx-auto py-12 px-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600">
            Welcome to NFT Marketplace, where innovation meets creativity. Our mission is to provide a platform for artists, creators, and enthusiasts to connect through the power of blockchain technology.
          </p>
        </section>

        <section className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2">
            <img
              className="rounded-lg shadow-md"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="Team collaboration"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We believe in empowering individuals by leveraging the unique opportunities provided by decentralized technologies. Our platform is designed to foster creativity and build a community-driven ecosystem.
            </p>
          </div>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {['Alexa', 'Olivia', 'Liam', 'Elijah'].map((name, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                  src={`https://i.ibb.co/${['FYTKDG6', 'fGmxhVy', 'Pc6XVVC', '7nSJPXQ'][index]}/Rectangle-118-${index + 1}.png`}
                  alt={`${name} profile`}
                  loading="lazy"
                />
                <h3 className="text-xl font-medium text-gray-800">{name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us</h2>
          <p className="text-gray-600">
            Be a part of our journey to revolutionize the digital space with NFTs and blockchain. Together, we can create something extraordinary.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
