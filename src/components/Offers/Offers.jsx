import "./offers.scss";
import { MdKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../../assets/Image/srilanka1.jpg";
import img2 from "../../assets/Image/abidhabi2.jpg";
import img3 from "../../assets/Image/doha2.jpg";
import img4 from "../../assets/Image/dubai2.jpg";
import img5 from "../../assets/Image/maldiv2.jpg";
import img6 from "../../assets/Image/thailand2.jpg";
import img7 from "../../assets/Image/vietnam3.jpg";
import img8 from "../../assets/Image/misir1.jpg";
import img9 from "../../assets/Image/doha1.jpg";

const Offer = [
  {
    id: 1,
    postImg: img1,
    title: "Shri-Lanka",
    location: "lokasiya",
    price: "1890$",
    discaunt: "30% off",
  },
  {
    id: 2,
    postImg: img2,
    title: "Abu-Dhabi",
    location: "Lokasiya",
    price: "2710$",
    discaunt: "10% off",
  },
  {
    id: 3,
    postImg: img3,
    title: "Doha",
    location: "Lokasiya",
    price: "450$",
    discaunt: "25% off",
  },
  {
    id: 4,
    postImg: img4,
    title: "Dubai",
    location: "Lokasiya",
    price: "850$",
    discaunt: "15% off",
  },
  {
    id: 5,
    postImg: img5,
    title: "Maldives",
    location: "Lokasiya",
    price: "1000$",
    discaunt: "30% off",
  },
  {
    id: 6,
    postImg: img6,
    title: "Thailand",
    location: "Lokasiya",
    price: "1000$",
    discaunt: "20% off",
  },
  {
    id: 7,
    postImg: img7,
    title: "Vietnam",
    location: "Lokasiya",
    price: "1000$",
    discaunt: "1000$",
  },
  {
    id: 8,
    postImg: img8,
    title: "Egypt",
    location: "Lokasiya",
    price: "1800$",
    discaunt: "5% off",
  },
  {
    id: 9,
    postImg: img9,
    title: "Doha",
    location: "Lokasiya",
    price: "330$",
    discaunt: "50% off",
  },
];

const Offers = () => {
  return (
    <section className="offer container">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>Those are best offers that you can join</p>
        </div>

        <div className="mainContent grid">
          {Offer.map(({id, postImg, location, title, price, discaunt}) =>{
            return(
              <div className="singleOffer" id={id}>
            <div className="destImage">
              <img src={postImg} alt={title} />
              <span className="discount">{discaunt}</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>{price}</h4>
                <span className="status">{title}</span>
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
                <small>{location}</small>
              </div>

              <button className="btn flex">
                View Detail
                <BsArrowRightShort className="icon" />
              </button>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
