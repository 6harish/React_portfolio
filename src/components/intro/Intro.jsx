import "./intro.css";
import cv from "../cv/Harish's Resume.pdf";

const Intro = () => {
  return (

    <div className="i">

      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Harish Seervi</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">App Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">UI/UX Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and Mobile App.
          </p>

          <button className="download">
            <a href={cv} download>Download CV
            </a>
          </button>
        </div>

      </div>
<div className="i-right">
      <div className="i-bg"></div>
      </div>
    </div>
  );
};

export default Intro;
