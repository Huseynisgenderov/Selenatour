import "./popular.scss";
import Img2 from "../../assets/Image/doha2.jpg";
import Img3 from "../../assets/Image/srilanka3.jpg";
import Img4 from "../../assets/Image/thailand3.jpg";
import Img5 from "../../assets/Image/vietnam3.jpg";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

const Popular = () => {
  const Data = [
    {
      id: 1,
      imgSrc: Img3,
      destTitle: "Shri-Lanka",
      location: "Colombo",
      grade: "Cultural Relax",
    },
    {
      id: 2,
      imgSrc: Img4,
      destTitle: "Thailand",
      location: "Puket",
      grade: "Cultural Relax",
    },
    {
      id: 3,
      imgSrc: Img2,
      destTitle: "Doha",
      location: "Qatar",
      grade: "Cultural Relax",
    },
    {
      id: 4,
      imgSrc: Img5,
      destTitle: "Hanoi",
      location: "Vietnam",
      grade: "Cultural Relax",
    },
  ];

  return (
    <section className="popular section container">
      <div className="secContainer popularSec">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destinations</h2>
            <p>
              From the stunning beaches of Sri Lanka to the modern skyline of
              Doha, popular travel destinations offer endless adventure and
              beauty. Explore the rich history of Istanbul, the serene temples
              of Bali, or the vibrant markets of Dubai. Whether seeking
              relaxation or cultural immersion, these top destinations promise
              unforgettable experiences for travelers from Azerbaijan.
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div className="singleDestination" id={id}>
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>

                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      SelenaTour
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
