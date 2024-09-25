import "./popular.scss";
import bali from "../../assets/Image/Bali.jpg";
import Img2 from "../../assets/Image/Hero.jpg";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

const Popular = () => {
  const Data = [
    {
      id: 1,
      imgSrc: Img2,
      destTitle: "Machu Picchu",
      location: "Peru",
      grade: "CULTURAL RELAX",
    },
    {
      id: 2,
      imgSrc: Img2,
      destTitle: "Machu Picchu",
      location: "Maldives",
      grade: "CULTURAL RELAX",
    },
    {
      id: 3,
      imgSrc: Img2,
      destTitle: "Machu Picchu",
      location: "Doha",
      grade: "CULTURAL RELAX",
    },
    {
      id: 4,
      imgSrc: Img2,
      destTitle: "Machu Picchu",
      location: "Italy",
      grade: "CULTURAL RELAX",
    },
  ];

  return (
    <section className="popular section container">
      <div className="secContainer popularSec">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destinations</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              repudiandae id blanditiis provident libero voluptatum aperiam
              fugiat sapiente illo enim quae quod, quidem ut nisi unde quam,
              consequuntur molestias iste.
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({id, imgSrc, destTitle, location, grade}) => {
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
