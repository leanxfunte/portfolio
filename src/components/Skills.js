import React from "react";
import Timeline from "./Timeline";
import Title from "./Title"

function Skills() {
  return (
    <section id="skills" className="bg-bg3 py-20 bg-[#111] bg-fixed bg-cover bg-blend-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="my skills" titlebg="areas of expertise" />
            <Timeline />
      </div>
    </section>
  )
}

export default Skills