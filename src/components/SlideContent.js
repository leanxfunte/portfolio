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
    <div className="slide-content grid grid-cols-2 relative">
      <div className="image-block border-red border-2 h-[250px]">
        <div className=" relative">
          <img
            className="absolute top-[20px] right-[-30px]"
            src={props.item.image}
            alt="project"
          />
        </div>
      </div>
      <div className="content-block z-[99] ml-[-50px] relative p-3">
        <h1 className="text-white text-3xl mb-5 uppercase font-bold">
          {props.item.name}
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
        <div className="absolute bottom-0 right-0 translate-x-50">
          {props.item.link && props.item.link.trim() !== "" ? (
            <a
              className="border-2 border-red text-white p-2 uppercase font-light hover:bg-red"
              href={props.item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SlideContent;
