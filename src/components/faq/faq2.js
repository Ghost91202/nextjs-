// FAQComponent.js
"use client";
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";

const FAQComponent = ({ faqData, mainhead }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  return (
    <div className="bg-gray-200 lg:p-20 p-10 h-auto flex items-center justify-center font-serif">
      <div className="w-screen flex flex-col lg:gap-10 lg:w-3/4">

          <h1 className="lg:text-4xl text-2xl font-semibold mb-6 text-center">{mainhead}</h1>
          <div className="flex flex-col">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4 flex flex-col justify-center items-center">
                <button
                  onClick={() => handleQuestionClick(index)}
                  className="w-full lg:w-3/4 py-2 px-4 bg-blue-800 text-white text-left text-sm lg:text-lg rounded focus:outline-none flex items-center justify-between"
                >
                  {faq.question}
                  <CiCirclePlus className="text-2xl" />
                </button>
                <div className="w-full lg:w-3/4 text-center">
                  {selectedQuestion === index && <p className="mt-2">{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>

      </div>
    </div>
  );
};

export default FAQComponent;
