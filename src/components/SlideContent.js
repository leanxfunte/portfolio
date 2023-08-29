import React from "react";
import Pills from "./Pills";

function SlideContent(props) {
  // console.log("props", props)

  let description = props.item.description;

  console.log("desc", typeof desc);
  // if (Array.isArray(desc)) {
  //   const pillsElement = desc.map((d, i) => (
  //     <div key={i}>
  //       <div>{d}</div>
  //     </div>
  //   ));

  // const pillsElement = desc.map((d, i) => (
  //   <div key={i}>
  //     <p>{d}</p>
  //   </div>
  // ));
  return (
    <div className="slide-content grid max-sm:grid-cols-1 grid-cols-2 relative">
      <div className="image-block btrgb border-2 h-[250px] max-sm:mb-5">
        <div className=" relative">
          <img
            className="absolute top-[20px] right-[-30px]"
            src={props.item.image}
            alt="project"
          />
        </div>
      </div>
      <div className="content-block z-[99] max-sm:bg-black/75 bgrtb max-sm:border-2 max-sm:ml-[0] ml-[-50px] relative p-3">
        <h1 className="text-white max-sm:text-xl text-2xl mb-5 uppercase font-bold flex items-center">
          {props.item.name}
          {props.item.link && props.item.link.trim() !== "" ? (
            <a
              className="ml-auto text-xs border border-white p-1"
              href={props.item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              visit site <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          ) : null}
        </h1>
        {/* Check the type of desc inline */}
        {Array.isArray(description) ? (
          description.map((d, i) => (
            <span key={i}>
              <Pills name={d} />
            </span>
          ))
        ) : typeof description === "string" ? (
          <div>{description}</div>
        ) : (
          // Handle the null or unknown case
          <div>Invalid description data</div>
        )}
        {/* <p className="text-white text-[rgba(255,255,255,.5)] font-light text-[16px] text-justify ellipsis-5">
          {props.item.description}
        </p> */}
      </div>
    </div>
  );
}

export default SlideContent;
