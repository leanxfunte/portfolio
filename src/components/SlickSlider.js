import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideContent from "./SlideContent";

class MySlider extends React.Component {
  constructor(props) {
    super(props);

    this.slider = React.createRef();
  }

  next = () => {
    this.slider.current.slickNext();
  };

  previous = () => {
    this.slider.current.slickPrev();
  };

  render() {
    const settings = {
      infinite: true,
      arrows: false,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: "",
      prevArrow: "",
      className: "text",
    };

    const projectData = [
      {
        id: 1,
        name: "Xerolabs",
        description: ["html", "css", "wordpress","php","bootstrap","javascript"],
        image: "./images/xerolabs.png",
        link: "https://www.xerolabs.co/"
      },
      {
        id: 2,
        name: "Sony",
        description: ["html", "css","less","bootstrap","javascript"],
        image: "./images/sony.png",
        link: "https://sdw.sony-asia.com/SG/SDWHome"
      },
      {
        id: 3,
        name: "Legacy FA",
        description: ["html", "css", "wordpress","php","bootstrap","javascript"],
        image: "./images/legacyfa.png",
        link: "https://www.legacyfa-asia.com/"
      },
      {
        id: 4,
        name: "Samaya Clinics",
        description: ["html", "css","bootstrap","javascript"],
        image: "./images/samaya.png",
        link: "https://samaya.com.sa/"
      },
      {
        id: 5,
        name: "Yakolak",
        description: ["html", "css", "wordpress","php","bootstrap","javascript","react","laravel"],
        image: "./images/yakolak.png",
        link: ""
      },
      {
        id: 6,
        name: "Winstar Loan",
        description: ["html", "css", "wordpress","bootstrap","javascript"],
        image: "./images/winstar.png",
        link: ""
      },
      {
        id: 7,
        name: "Canadian Web Hosting",
        description: ["html", "css", "ruby","bootstrap","javascript"],
        image: "./images/canadian.png",
        link: "https://www.canadianwebhosting.com/"
      },
    ];

    const slideElement = projectData.map((s, i) => (
      <div key={i}>
        <SlideContent item={s} />
      </div>
    ));

    // console.log("slideElement", slideElement);

    return (
      <div className="relative w-[80%] m-auto required:">
        <Slider ref={this.slider} {...settings}>
          {slideElement}
        </Slider>
        <div className="absolute bottom-[15px] left-[10px] max-sm:bottom-[175px]">
          <button
            className="text-white font-bold mr-2 rounded-0 border-2 p-2 bg-red border-red hover:bg-[#990000] hover:border-[#990000] transition-all duration-500"
            onClick={this.previous}
          >
            <img
              className="opacity-50 filter invert scale-x-[-1]"
              src="images/chevron-right.svg"
              alt="arrow"
            />
          </button>
          <button
            className="text-white mr-5 rounded-0 border-2 p-2 bg-red border-red hover:bg-[#990000] hover:border-[#990000] transition-all duration-500"
            onClick={this.next}
          >
            <img
              className="opacity-50 filter invert"
              src="images/chevron-right.svg"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default MySlider;
