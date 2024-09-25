import "./offers.scss";
import { MdKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import img from "../../assets/Image/Bali.jpg";

const Offers = () => {
  return (
    <section className="offer container">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>

        <div className="mainContent grid">
          <div className="singleOffer">
            <div className="destImage">
              <img src={img} alt="Image Name" />

              <span className="discount">30% off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>$1000</h4>
                <span className="status">For Rent</span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className="icon" />
                  <small>2 beds</small>
                </div>

                <div className="singleAmenity flex">
                  <FaBath className="icon" />
                  <small>1 bath</small>
                </div>

                <div className="singleAmenity flex">
                  <FaWifi className="icon" />
                  <small>Wi-fi</small>
                </div>

                <div className="singleAmenity flex">
                  <FaShuttleVan className="icon" />
                  <small>Shuttle</small>
                </div>
              </div>
              <div className="location flex">
                <IoLocationSharp className="icon" />
                <small>450 Vine #310, London</small>
              </div>

              <button className="btn flex">
                View Detail
                <BsArrowRightShort className="icon" />
              </button>
            </div>
          </div>
          <div className="singleOffer">
            <div className="destImage">
              <img src={img} alt="Image Name" />

              <span className="discount">30% off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>$1000</h4>
                <span className="status">For Rent</span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className="icon" />
                  <small>2 beds</small>
                </div>

                <div className="singleAmenity flex">
                  <FaBath className="icon" />
                  <small>1 bath</small>
                </div>

                <div className="singleAmenity flex">
                  <FaWifi className="icon" />
                  <small>Wi-fi</small>
                </div>

                <div className="singleAmenity flex">
                  <FaShuttleVan className="icon" />
                  <small>Shuttle</small>
                </div>
              </div>
              <div className="location flex">
                <IoLocationSharp className="icon" />
                <small>450 Vine #310, London</small>
              </div>

              <button className="btn flex">
                View Detail
                <BsArrowRightShort className="icon" />
              </button>
            </div>
          </div>
          <div className="singleOffer">
            <div className="destImage">
              <img src={img} alt="Image Name" />

              <span className="discount">30% off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>$1000</h4>
                <span className="status">For Rent</span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className="icon" />
                  <small>2 beds</small>
                </div>

                <div className="singleAmenity flex">
                  <FaBath className="icon" />
                  <small>1 bath</small>
                </div>

                <div className="singleAmenity flex">
                  <FaWifi className="icon" />
                  <small>Wi-fi</small>
                </div>

                <div className="singleAmenity flex">
                  <FaShuttleVan className="icon" />
                  <small>Shuttle</small>
                </div>
              </div>
              <div className="location flex">
                <IoLocationSharp className="icon" />
                <small>450 Vine #310, London</small>
              </div>

              <button className="btn flex">
                View Detail
                <BsArrowRightShort className="icon" />
              </button>
            </div>
          </div>
          <div className="singleOffer">
            <div className="destImage">
              <img src={img} alt="Image Name" />

              <span className="discount">30% off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>$1000</h4>
                <span className="status">For Rent</span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className="icon" />
                  <small>2 beds</small>
                </div>

                <div className="singleAmenity flex">
                  <FaBath className="icon" />
                  <small>1 bath</small>
                </div>

                <div className="singleAmenity flex">
                  <FaWifi className="icon" />
                  <small>Wi-fi</small>
                </div>

                <div className="singleAmenity flex">
                  <FaShuttleVan className="icon" />
                  <small>Shuttle</small>
                </div>
              </div>
              <div className="location flex">
                <IoLocationSharp className="icon" />
                <small>450 Vine #310, London</small>
              </div>

              <button className="btn flex">
                View Detail
                <BsArrowRightShort className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
