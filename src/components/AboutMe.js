import React from "react";
import Title from "./Title";
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
          <p className="about-p mb-6">
            I specialize in crafting captivating and user-centric interfaces for
            websites and web applications. With a strong foundation in HTML,
            CSS, and JavaScript, I create responsive interfaces that elevate
            user experiences to new heights.
          </p>

          <h2 class="text-xl text-white font-semibold mb-2">Expertise</h2>
          <p class="about-p mb-6">
            My proficiency extends to prominent frontend frameworks like
            ReactJS, enabling me to build dynamic and interactive interfaces.
            Additionally, I am well-versed in content management systems such as
            WordPress, ensuring seamless content delivery.
          </p>

          <h2 class="text-xl text-white font-semibold mb-2">
            Design Excellence
          </h2>
          <p class="about-p mb-6">
            I bring a meticulous eye for design, harnessing a range of
            technologies including LESS, Bootstrap, and Tailwind CSS. These
            tools empower me to design interfaces that are both responsive and
            visually appealing. Leveraging the power of Photoshop and
            Illustrator, I transform creative concepts into stunning visual
            designs that resonate deeply with your brand identity.
          </p>

          <h2 class="text-xl text-white font-semibold mb-2">
            Efficient Workflow
          </h2>
          <p class="about-p mb-6">
            My expertise extends to project management tools and version control
            systems, streamlining development workflows for efficiency. I am a
            strong advocate for clear communication and excel in collaborative
            environments where innovative ideas are nurtured into reality.
          </p>

          <h2 class="text-xl text-white font-semibold mb-2">
            Expanded Technical Proficiencies
          </h2>
          <p class="about-p mb-4">
            In addition to the tools mentioned, my technical prowess also
            encompasses:
          </p>
          <ul class="list-disc list-inside mb-6">
            <li class="about-p">
              SASS: Leveraging SASS to expedite styling and design workflows.
            </li>
            <li class="about-p">
              Git: Utilizing Git for seamless teamwork and version control.
            </li>
            <li class="about-p">
              Gulp: Automating tasks using Gulp for enhanced productivity.
            </li>
            <li class="about-p">
              Webpack: Employing Webpack for optimal module bundling and
              performance.
            </li>
            <li class="about-p">
              Illustrator: Crafting intricate vector designs and graphics in
              Illustrator.
            </li>
          </ul>

          <h2 class="text-xl text-white font-semibold mb-2">
            Commitment to Quality
          </h2>
          <p class="about-p mb-6">
            I am unwaveringly committed to delivering clean and maintainable
            code. This dedication ensures that I consistently produce
            high-quality projects within deadlines and budgets.
          </p>

          <h2 class="text-xl text-white font-semibold mb-2">Staying Ahead</h2>
          <p class="about-p mb-6">
            I remain at the forefront of emerging technologies, enabling me to
            develop functional web interfaces that align with the ever-evolving
            demands of clients and users.
          </p>

          <p class="about-p">
            If you are seeking a frontend professional who seamlessly blends
            design finesse with technical expertise, I am enthusiastic about the
            opportunity to collaborate and bring your digital aspirations to
            fruition.
          </p>

          <Button
            title="download resume"
            image={false}
            link="./files/resume.pdf"
            center={true}
            download="lean_resume.pdf"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
