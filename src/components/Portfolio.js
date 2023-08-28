import React from "react";
import Title from "./Title"
import Button from "./Button";
import SlickSlider from "./SlickSlider";

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="project" titlebg="work" />
            <SlickSlider />
      </div>
    </section>
  )
}

export default Portfolio