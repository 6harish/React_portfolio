import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import youtube from "../../img/youtube.png";
import instagram from "../../img/instagram.png";


const Contact = () => {


  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8008984496
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a href="mailto:harishseervi939@gmail.com?body=My custom mail body">harishseervi939@gmail.com</a>
            </div>
            
            <div className="c-info-item">
            <a href="https://www.linkedin.com/in/harishseervi">
              <img className="c-icon" src={linkedin} alt="" />
              Linkedin
              </a>
            </div>
           
            <div className="c-info-item">
            <a href="https://github.com/6harish">
              <img className="c-icon" src={github} alt="" />
              Github</a>
            </div>
            <div className="c-info-item">
            <a href="https://www.youtube.com/channel/UCnSPoGoGLbpSEa-lUE4JxjQ">
              <img className="c-icon" src={youtube} alt="" />
               Youtube</a>
            </div>
            <div className="c-info-item">
            <a href=" https://www.instagram.com/h_a_r_i_s_h_._s_e_e_r_v_i/">
              <img className="c-icon" src={instagram} alt="" />
               Instagram</a>
            </div>

            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Kakatiya Nagar, Neredmet, Hyderabad, 500056
            </div>
          </div>
        </div>

        <div className="c-right">
          <h1 className="c-desc">
            <b>Languages Known</b>
          </h1>
          <div className="language">
            <ul>
              <h2><li>English</li></h2>
              <h2><li>Hindi</li></h2>
              <h2><li>Marwadi</li></h2>
              <h2><li>Telugu</li></h2>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
