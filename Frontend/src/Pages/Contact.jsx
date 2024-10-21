import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen mt-20 flex flex-col items-center justify-center p-8">
      <div className="container flex justify-center  mx-auto">
        <div className="bg-white w-1/2 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-teal-600 text-center hover:text-teal-800 transition duration-300">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mt-2 hover:text-gray-800 transition duration-300">
            We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us.
          </p>

          <form className="mt-8 space-y-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Full Name</label>
              <input
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Email Address</label>
              <input
                type="email"
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Message</label>
              <textarea
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Write your message"
                rows="4"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 mt-6 rounded-lg shadow-lg">
          <p className="text-white text-center text-sm">
            You can also reach us via email at <a href="mailto:thesbcode@gmail.com" className="underline hover:text-gray-200">support@elibrary.com</a> or call us at +918249458370.
          </p>
        </div>
    </section>
  );
};

export default Contact;
