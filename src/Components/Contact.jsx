import React from "react";
import github from "../assets/github.png";
import linkdin from "../assets/linkdin.png";
import instagram from "../assets/instagram.png";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-6xl my-[5%] w-6/12">
        Let's Get in Touch: Ways to Connect with Me
      </h1>
      <p className="text-2xl mb-[2%] w-11/12 font-serif text-gray-700">
        Thank you for your interest in getting in touch! I genuinely welcome
        your feedback, questions, and ideas. If you'd like to reach out
        directly, feel free to email me at jayasuryasurya933@gmail.com — I do my
        best to respond within 24 hours, though it might take a bit longer
        during busy times. Prefer chatting professionally? You can also connect
        and message me on LinkedIn — I’m always open to meaningful
        conversations, collaborations, or simply geeking out over front-end
        tech. And if you're into casual updates, feel free to drop by Instagram
        where I occasionally share what I’m working on. Thanks again for
        stopping by — I look forward to hearing from you!
      </p>
      <div>
        <div>
          <img className="w-10 h-10 my-2 inline mr-2" src={github} />
          <a href="https://github.com/Jayasuriya-R"><span>Follow on GitHub</span></a>
        </div>
        <div>
          <img className="w-10 h-10 my-2 inline mr-2" src={linkdin} />
          <a href="https://www.linkedin.com/in/jayasuriya-r/"><span>Follow on LinkedIn</span></a>
        </div>
        <div>
          <img className="w-10 h-10 my-2 inline mr-2" src={instagram} />
          <a><span>Follow on Instagram</span></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
