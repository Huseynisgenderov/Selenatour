import { useEffect } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Blog from "../../components/Blog/Blog";
import Offers from "../../components/Offers/Offers";
import Popular from "../../components/Popular/Popular";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="home">
        <div className="secContainer container">
          <div className="homeText" data-aos="zoom-in">
            <h1 className="title">Plan Your Travel with Selenatour</h1>

            <p className="subTitle">
              Travel to your favorite city with respectful of environment!
            </p>

            <button className="btn">
              <a href="/home">Explore now</a>
            </button>
          </div>

          <div className="homeCard grid">
            <div className="locationDiv">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Dream  Destination" />
            </div>

            <div className="distDiv">
              <label htmlFor="distance">Time</label>
              <input type="text" placeholder="11.12.2024" />
            </div>

            <div className="priceDiv">
              <label htmlFor="location">Price</label>
              <input type="text" placeholder="300$-600$" />
            </div>

            <button className="btn">Search</button>
          </div>
        </div>
      </section>

      <div className="whatsapp">
        <Popup trigger={<FaWhatsapp className="icon" />} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">Yaza biləcəyin kontaktlar</div>
              <div className="singleModal">
                <a className="link" href="https://wa.me/+994774171015">
                  Hüseyn İsgəndərov <br /> (Tur, bilet, viza desdeyi)
                </a>
              </div>
              <div className="singleModal">
                <a className="link" href="https://wa.me/+994515111015">
                  Gülya Məmmədova <br /> (Tur, bilet, viza desdeyi)
                </a>
              </div>
              <div className="singleModal">
                <a className="link" href="https://wa.me/+994774751015">
                  Pəri Yusufova <br /> (Tur, bilet)
                </a>
              </div>
              <div>
                <button className="btn" onClick={() => close()}>
                  Bağla
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>

      <Popular />
      <Offers />
      <AboutUs />
      <Blog />
    </>
  );
};

export default Home;
