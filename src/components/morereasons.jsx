import { FaTv } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";

function MoreReasons() {
  const reasons = [
    {
      icon: <FaTv size={56} />,
      title: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    {
      icon: <MdDownload size={56} />,
      title: "Download your shows to watch offline",
      desc: "Save your favorites easily and always have something to watch.",
    },
    {
      icon: <FaMobileAlt size={56} />,
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    },
    {
      icon: <BsEmojiSmile size={56} />,
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    },
  ];

  return (
    <section className=" bg-black text-white px-6 md:px-16">
        <div className="container px-5">
      <h4 className="fw-bold mb-5">
        More Reasons to <span className="text-red-600">Join</span>
      </h4>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="mt-auto flex flex-col h-full bg-gradient-to-br 
           from-[#0f172a] 
           via-[#1e1b4b] 
           to-[#3b0a1e] 
                       rounded-xl p-3                         
                       hover:shadow-red-900/30 
                       transition duration-300"
          >
            
            <h4 className="text-lg font-semibold mb-3">
              {item.title}
            </h4>
            <p className="text-white text-sm leading-relaxed" style={{fontSize:"16px"}}>
              {item.desc}
            </p>
            <div className="mt-auto flex justify-end text-pink-800">{item.icon}</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default MoreReasons;