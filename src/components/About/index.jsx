import React from "react";
import { NavLink } from "react-router-dom";
import github from "../../Image/github.png";
import LinkedIn from "../../Image/LinkedIn.png";

const About = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="  container px-5 py-24 mx-auto flex  flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                style={{ width: "1200px", height: "500px" }}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <img
                  alt="testimonial"
                  className="w-20 h-20  object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="about1.jpg"
                />

                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Frontend Devloper
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className=" text-left text-lg font-serif">
                    Self-motivated and hardworking fresher seeking for an
                    opportunity to work in a challenging environment to prove my
                    skills and utilize my knowledge & intelligence in the growth
                    of the organization.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left ">
                <p className="leading-relaxed text-lg mb-4 text-justify font-serif">
                  Hey there! 👋 I'm Amit Kumar Mandal, a passionate web
                  developer . I have a knack for turning ideas into interactive
                  and engaging online experiences.
                  <br />
                  Let me tell you a bit about myself : 👉Motivated and skilled
                  Web Developer creating and implementing innovative web
                  solutions. Proficient in front-end and back-end technologies,
                  I am dedicated to delivering high-quality code and exceptional
                  user experiences. Passionate about staying up-to-date with
                  industry trends and continuously improving my skills.
                  <br />
                  👉I'm deeply enthusiastic about staying up-to-date with the
                  latest industry trends and technologies. My experience with
                  languages such as HTML, CSS, and JavaScript, combined with
                  frameworks like React and Node.js, has enabled me to build
                  responsive and dynamic websites that offer a seamless user
                  experience. 👉I'm a firm believer in the importance of
                  teamwork and collaboration, which is why I've enjoyed working
                  closely with designers and cross-functional teams to bring
                  creative concepts to life.
                  <br />
                  <br />
                  Follow me on <br />
                  <NavLink
                    to={"https://www.instagram.com/amit_____mandal_____/"}
                    target="_blank"
                    className="w-[30%] mt-2  flex flex-row"
                  >
                    <img
                      className="mt-0 rms_img"
                      src="https://th.bing.com/th?id=ODLS.811c55ff-001a-4532-baae-450eeda18ae8&amp;w=32&amp;h=32&amp;qlt=90&amp;pcl=fffffa&amp;o=6&amp;pid=1.2"
                      height="32"
                      width="32"
                      alt="Global web icon"
                      role="presentation"
                      data-bm="50"
                    />
                    <span className="relative  left-2 text-xl">Instagram</span>
                  </NavLink>
                  <NavLink
                    to={
                      "https://www.linkedin.com/in/amit-kumar-mandal-2b9674225/"
                    }
                    target="_blank"
                    className="w-[30%]  flex flex-row"
                  >
                    <img
                      className="mt-3 mr-1 rms_img"
                      src={github}
                      height="36"
                      width="36"
                      alt="Global web icon"
                      role="presentation"
                      data-bm="50"
                    />
                    <span className="relative mt-3 left-0 text-xl">
                      LinkedIn
                    </span>
                  </NavLink>
                  <NavLink
                    to={"https://github.com/Mandal789"}
                    target="_blank"
                    className="w-[30%]  flex flex-row"
                  >
                    <img
                      className="mt-3 mr-1 rms_img"
                      src={LinkedIn}
                      height="36"
                      width="36"
                      alt="Global web icon"
                      role="presentation"
                      data-bm="50"
                    />
                    <span className="relative mt-3 left-0 text-xl">Github</span>
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
