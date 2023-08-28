import React from "react";
import Title from "./Title"
import Button from "./Button";

function AboutMe() {
  return (
    <section id="about-me" className="py-20 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="About me" titlebg="know more about me" />
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Hi, I'm Lean
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white opacity-60 mx-auto">
            Frontend Developer | Graphic Designer
          </p>
          <p className="about-p">
            As a frontend developer, I specialize in creating visually appealing and user-friendly interfaces for websites and web applications. With a strong foundation in HTML, CSS, and JavaScript, I use these technologies to build intuitive and responsive user interfaces that enhance the user experience.
          </p>

          <p className="about-p">
            In addition to my core skills, I have experience with various frontend frameworks such as ReactJS, as well as content management systems like WordPress. I also have expertise in other frontend technologies such as LESS, Bootstrap, and Tailwind CSS, which allow me to create designs that are both responsive and visually stunning.
          </p>

          <p className="about-p">
            Throughout the development process, I am comfortable working with project management tools, version control systems, and other software that helps to streamline the workflow. I value clear communication and enjoy working collaboratively with others to bring ideas to life.
          </p>

          <p className="about-p">
            My commitment to writing clean and maintainable code, delivering high-quality projects on time and within budget, and staying up-to-date with emerging technologies makes me a valuable asset in the industry. I am dedicated to creating beautiful and functional web interfaces that meet the needs of clients and users alike.
          </p>
          <Button title="download resume" image={false} link="../files/resume.pdf" center={true} />
        </div>
      </div>
    </section>
  )
}

export default AboutMe