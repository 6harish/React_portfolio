import "./productList.css";
import webdeveloper from "../../img/webdeveloper.png";
import appdeveloper from "../../img/appdeveloper.png";
import reactnative from "../../img/reactnative.png";
import uiux from "../../img/uiux.png";
import reactjs from "../../img/reactjs.png";
import frontend from "../../img/frontend.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import javascript from "../../img/js.png";
import adobexd from "../../img/adobexd.png";
import github from "../../img/github.png";

const ProductList = () => {
  return (



    <div className="p">
      
      <div className="p-wrapper">
        <div className="p-left">
          <h1 className="p-title">Technical Skills</h1>
          <div className="p-info">
            <div className="p-info-item">
              <img className="p-icon" src={webdeveloper} alt="" />
              <p>Web Developer</p>
            </div>
            <div className="p-info-item">
              <img className="p-icon" src={appdeveloper} alt="" />
              <p>Mobile App Developer</p>
            </div>
            <div className="p-info-item">
              <img className="p-icon" src={uiux} alt="" />
              <p>UI/UX Developer</p>
            </div>
            <div className="p-info-item">
              <img className="p-icon" src={frontend} alt="" />
              <p>Front-End Developer</p>
            </div>
            <div className="p-info-item">
              <img className="p-icon" src={reactjs} alt="" />
              <p>ReactJs</p>
            </div>
            <div className="p-info-item">
              <img className="p-icon" src={reactnative} alt="" />
              <p>React Native</p>
            </div>

          </div>
        </div>
        <div className="p-right">
          <div>
           
            <div className="p-info-item">
              <img className="p-icon" src={html} alt="" />
              <p>Html</p>
            </div>
            <div className="p-info-item">
              <img className="p-icon" src={css} alt="" />
              <p>CSS</p>
            </div>
            <div className="p-info-item">
              <img className="p-icon" src={javascript} alt="" />
              <p>JavaScrpit</p>
            </div>

            <div className="p-info-item">
              <img className="p-icon" src={adobexd} alt="" />
              <p>AdobeXD</p>
            </div>
            <div className="p-info-item">
              <img className="p-icon" src={github} alt="" />
              <p>Github</p>
            </div>

          </div>
         
        </div>
      </div>
     
    </div>

  );
};

export default ProductList;
