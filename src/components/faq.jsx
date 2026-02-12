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
    {
        question: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
        question: "Is Netflix good for kids?",
        answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 md:px-16">
        <div className="container px-5">
      <h4 className="text-3xl md:text-5xl font-bold mb-5">
        Frequently Asked Questions
      </h4>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-zinc-800">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center 
                         p-6 text-lg md:text-xl font-medium 
                         hover:bg-zinc-900 transition" style={{fontSize:"24px"}}
            >
              {faq.question}
              <FiPlus
                className={`text-3xl transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-40 p-6"
                  : "max-h-0"
              }`}
            >
              <p className="text-zinc-300 text-base leading-relaxed">
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