import React from "react";

function Title(props) {
  return (
    <div className="relative flex text-center mb-5">
      <h2 className="max-sm:text-[80px] text-[100px] font-extrabold w-full mb-0 text-white opacity-10 uppercase">{props.title}</h2>
      <p className="text-3xl font-bold absolute w-full self-center mb-0 text-white uppercase">
        {props.titlebg}
        <span className="w-20 mt-2 m-auto border-b-4 border-red block"></span>
      </p>
    </div>
  )
}

export default Title