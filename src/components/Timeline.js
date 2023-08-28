import React from "react";

function Timeline() {
  const mySkills = ["html", "css", "less", "jQuery", "php", "wordpress", "ACF", "elementor", "woocommerce", "react.js", "next.js"]
  // const mySkills = [
  //   { "name": "html", "src": "images/html5.svg" }, 
  //   { "name": "css", "src": "images/css3.svg" }, 
  //   { "name": "less", "src": "images/less.svg" }, 
  //   { "name": "jQuery", "src": "images/jquery.svg" }, 
  //   { "name": "php", "src": "images/php.svg" }, 
  //   { "name": "wordpress", "src": "images/wordpress.svg" }, 
  //   { "name": "bootstrap", "src": "images/bootstrap.svg" }, 
  //   { "name": "elementor", "src": "images/elementor.svg" }, 
  //   { "name": "woocommerce", "src": "images/woocommerce.svg" }, 
  //   { "name": "react.js", "src": "images/reactjs.svg" }, 
  //   { "name": "next.js", "src": "images/nextjs.svg" }
  // ]


  const skillArr = mySkills.map((s, i) => (
    <div key={i} className={`group relative w-[43%] border p-2 mb-5  hover:bg-red hover:border-red ${i % 2 === 1 ? "sm:translate-x-[-15px] md:translate-x-[-35px] lg:translate-x-[-60px] translate-y-[20px]" : "sm:translate-x-[15px] md:translate-x-[35px] lg:translate-x-[60px]"}`}>
      <span className={`absolute top-[20px]  h-[3px]  w-[70px] ${i % 2 === 1 ? "right-inherit left-[-25px] bg-gradient-to-r from-red to-rgba(78,78,78,0.99)" : "right-[-25px] bg-gradient-to-l from-red to-rgba(78,78,78,0.99"}`}></span>
      <h3 className={`${i % 2 === 1 ? "text-right" : "text-left"}`}>
        {/* <img className={`group-hover:invert h-8 w-8 ${i % 2 === 1 ? "float-right ml-5" : "float-left mr-5"}`} src={s.src} alt="image" /> */}
        <span className="text-white align-sub">
          {s}
        </span>
      </h3>
    </div>
  ))

  return (
    <section className="section skill-section overflow-hidden relative w-full m-auto" data-fp-styles="null" data-anchor="skill"><div className="fp-tableCell w-full" >
      <div className="w-full">
        <div className="relative z-[2] flex flex-row flex-wrap self-center justify-between my-10" id="me-working-skill">
          <span className="block h-[calc(100%+80px)] w-[4px] bg-red absolute left-[50%] ml-[-2px] top-[-40px] before:content-[''] before:absolute before:w-[16px] before:h-[16px] before:rounded-full before:bg-red before:left-[-6px] before:top-0 after:bottom-0 after:content-[''] after:absolute after:w-[16px] after:h-[16px] after:rounded-full after:bg-red after:left-[-6px]"></span>
          {
            skillArr
          }
        </div>
      </div>
    </div></section>
  )
}

export default Timeline