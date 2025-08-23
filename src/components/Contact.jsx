import React from 'react';
import { FaPhone, FaEnvelope, FaSkype, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = ({id}) => {
  return (
    <section className="bg-[#1e1e1e] py-6 px-4 sm:px-6 lg:px-8" id={id}>
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-5">
          <h2 className="text-3xl md:text-4xl font-bold  text-green-400 text-center md:text-left">Let's connect</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-7/10">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 mt-6 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </form>
          </div>
          <div className="w-full md:w-3/10 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-md">
                <FaPhone className="text-green-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-400">Phone Number</p>
                <p className="text-white font-semibold">+1-234-567-8901</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-md">
                <FaEnvelope className="text-green-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-white font-semibold">contact@william.design</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-md">
                <FaSkype className="text-green-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-400">Skype</p>
                <p className="text-white font-semibold">WilliamDesignUX</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-md">
                <FaMapMarkerAlt className="text-green-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-400">Address</p>
                <p className="text-white font-semibold">0811 Erdman Prairie, Joaville CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;