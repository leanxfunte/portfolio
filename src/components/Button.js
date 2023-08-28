import React from "react";

function Button(props) {
  return (
    <p className="mt-4 text-xl text-gray-300 flex">
      <a href={props.link} target="_blank" download={props.d} className="btn-two text-white py-3 px-6 font-light uppercase" style={{ margin : props.center ? "auto" : ""}}>
        {
          props.title
        }
        {
          props.image ?
            <img className="inline invert h-[20px] mb-[4px]" src="./images/chevron-right.svg" />
            :
            ''
        }
      </a>
    </p>
  )
}

export default Button;