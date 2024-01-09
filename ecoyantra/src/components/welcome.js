import Ewaste from "../assets/E-waste.png";


import "./welcomeStyle.css";

const welcome = () => {
  return (
    <div className="welcome">
      <h1>Welcome to Ecoyantra</h1>
      <p>More About our Responsibility</p>

      <div className="info">
        <div className="para-text">
          <h2>Our Mission for a better Earth and Better Future.</h2>

          <p>
            Ecoyantra's mission is to seamlessly connect end users with e-waste
            facility locators, enabling responsible electronic device disposal.
            Empowering individuals and businesses, we facilitate global efforts
            to reduce electronic waste by providing easy access to trustworthy
            disposal facilities. With advanced technology and an unwavering
            commitment to the environment, we connect users with certified
            e-waste recycling centers. At Ecoyantra, we champion collective
            action for a greener, more sustainable future.
          </p>
        </div>
        <div className="img">
          <img src={Ewaste} alt=" E-waste" />
        </div>
      </div>
    </div>
  );
};

export default welcome;
