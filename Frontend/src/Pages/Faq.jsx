import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the E-Library?',
      answer: 'The E-Library is an online platform that allows users to read and borrow books from a wide range of genres and categories. You can access our collection anywhere and at any time.'
    },
    {
      question: 'How can I borrow a book?',
      answer: 'To borrow a book, simply create an account, browse the collection, and select the book you’d like to borrow. You can borrow books for a specified duration and return them once you’re done.'
    },
    {
      question: 'Can I read books offline?',
      answer: 'Currently, our platform supports online reading only. However, we are working on a feature that will allow users to download books for offline reading.'
    },
    {
      question: 'What types of books are available?',
      answer: 'Our E-Library offers a diverse range of books, including fiction, non-fiction, academic materials, and more. We also have a selection of e-journals and magazines available for users.'
    },
    {
      question: 'Is there a fee to use the E-Library?',
      answer: 'The basic features of the E-Library are free to use. However, some premium books and magazines may require a small fee to access.'
    },
  ];

  return (
    <section className="bg-gradient-to-r from-green-200 to-blue-200 min-h-screen mt-20 flex items-center justify-center p-8">
      <div className="container w-1/2 mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-green-600 text-center hover:text-green-800 transition duration-300">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mt-2 hover:text-gray-800 transition duration-300">
            Here you will find answers to the most commonly asked questions about our E-Library.
          </p>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4"
              >
                <div
                  className="flex justify-between items-center cursor-pointer py-4 text-lg font-semibold text-gray-700 hover:text-gray-900 transition duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span>{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="text-gray-600 mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
