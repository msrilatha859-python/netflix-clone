import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no contracts and no commitments. You can easily cancel your account online.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-5">
      <div className="max-w-5xl mx-auto">
        
        <h4 className="fw-bold mb-5">
          Frequently Asked Questions
        </h4>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-800 rounded">
              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center 
                           p-4 md:p-6 text-lg md:text-3xl 
                           hover:bg-zinc-700 transition"
              >
                <span className="text-left">{faq.question}</span>

                <FiPlus
                  className={`text-2xl md:text-3xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? "max-h-96 p-4 md:p-6" : "max-h-0"
                }`}
              >
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;