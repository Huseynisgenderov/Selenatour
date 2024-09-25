import "./aboutUs.scss";
import { MdSupportAgent } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import video from "../../assets/video/213422.mp4";

const AboutUs = () => {
  return (
    <section className="about section">
      <div className="secContainer">
        <h3 className="title">Why Selena Tour?</h3>
        <div className="mainContent container grid">
          <div className="singleItem">
            <MdSupportAgent className="icon" />

            <h3>7/24 Support</h3>

            <p>You can contact with us anytime you want</p>
          </div>
          <div className="singleItem">
            <FaHotel className="icon" />

            <h3>200k+ Hotels</h3>

            <p>You can choose any hotel you want in the world</p>
          </div>
          <div className="singleItem">
            <FaHandshake className="icon" />

            <h3>100+ Corpate company</h3>

            <p>
              The number of the compaines that work with us is increasing
              everyday{" "}
            </p>
          </div>
          <div className="singleItem">
            <FaPeopleGroup className="icon" />

            <h3>4000+ Custumer</h3>

            <p>The most trusted company in the Azerbaijan</p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>The best tourism company</h2>
              <p>
                Choosing our company means trusting a team with years of
                experience and a strong reputation in the travel industry. We
                specialize in crafting personalized, unforgettable journeys that
                cater to every traveler’s needs. With a commitment to
                exceptional service and seamless organization, we ensure a
                stress-free and enriching travel experience from start to
                finish.
              </p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted typeof="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
