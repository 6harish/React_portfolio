import "./about.css";
import me from "../../img/me.png"


const About = () => {
  return (
    <div className="a">
       <div className="a-bg"></div>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
         
            <img src={me} alt="" className="a-img"/>
         
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hello, I am Harish Seervi. I have Experience in " React Native EXPO, CLI" and "Web development", UI/UX Developer.

        </p>
        <p className="a-desc">
          <ul>
            <li>I have completed my Graduation 'B.Tech' from " LOVELY PROFESSIONAL UNIVERSITY " in 2021.</li>
            <br></br><li>I have done 3 months of internship in "Druthzuic Tech Solution " at Bangaluru.</li>
            <br></br><li>Have done Project on Web Development using languages Html, Css, Js, Reactjs, SQL.</li>
            <br></br> <li>I was also part of a mini corn App development in "Druthzuic Tech Solution".</li>
            <br></br><li>And also done React Native App (application) using React Native (Expo) as well as (CLI)</li>
            <br></br><li> This is Breafly intro about My self</li>
          </ul>
        </p>
       
      </div>
    </div>
  );
};

export default About;
