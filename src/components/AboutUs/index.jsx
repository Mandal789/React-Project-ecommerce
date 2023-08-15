import React from "react";
import '../../modules/Allproducts/index.css'
const AboutUs = () => {
  return (
    <>
      <section className="mywidth text-gray-600 body-font w-[100%]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-22153.jpg?size=626&ext=jpg&ga=GA1.2.103422313.1683068702&semt=ais"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-justify">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900 ">
              Our Story
              <div className="w-24 h-1 bg-purple-500  mt-2 mb-4"></div>
            </h1>
            <p className="mb-8 leading-relaxed font-serif text-lg leading-loose">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem consectetur quibusdam dolorem quos non dolores rem,
              possimus nobis quis tenetur natus? Atque delectus saepe esse
              architecto quibusdam explicabo vel mollitia odit, maiores aperiam
              ipsam facilis quia omnis voluptatem quo nulla earum aliquam
              recusandae sapiente eius doloribus autem consequatur dicta vero!
              Autem architecto corrupti nihil voluptas accusamus id excepturi
              facilis pariatur similique temporibus veritatis illo possimus
              ducimus soluta expedita doloribus, quasi quo! Delectus{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
