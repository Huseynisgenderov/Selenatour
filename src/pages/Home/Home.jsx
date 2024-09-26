import AboutUs from "../../components/AboutUs/AboutUs";
import Blog from "../../components/Blog/Blog";
import Offers from "../../components/Offers/Offers";
import Popular from "../../components/Popular/Popular";
import "./home.scss";


const Home = () => {
  return (
    <>
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
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

      <Popular/>
      <Offers/>
      <AboutUs/>
      <Blog/>

    </>
  );
};

export default Home;
