import "./aboutUs.scss";
import img from "../../assets/Image/clipart696061.png";
import video from "../../assets/video/213422.mp4"

const AboutUs = () => {
  return (
    <section className="about section">
      <div className="secContainer">
        <h3 className="title">Why Selena Tour?</h3>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img} alt="" />

            <h3>100+ Hotels</h3>

            <p>
              bizim haqda nese
            </p>

            
          </div>
          <div className="singleItem">
            <img src="" alt="" />

            <h3>100+ Hotels</h3>

            <p>
              bizim haqda nese
            </p>


          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>
                Wonderful house experience
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur.
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
