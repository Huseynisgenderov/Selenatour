import { useEffect } from "react";
import "./blog.scss";
import img1 from "../../assets/Image/vietnamtur.jpeg";
import img2 from "../../assets/Image/vietnamtur2.jpeg";
import img3 from "../../assets/Image/vietnamtur3.jpeg";
import img4 from "../../assets/Image/vietnamtur4.jpeg";
import img5 from "../../assets/Image/vietnamtur5.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Posts = [
  {
    id: 1,
    postImg: img1,
    title: "Best tour that I ever had🕺🏻",
    desc: "Booking the Vietnam group tour with this Selenatour was an unforgettable experience. The well-planned itinerary, professional guides, and personalized service made every moment special. I highly recommend this tour for anyone looking to explore the best of Vietnam!",
  },
  {
    id: 2,
    postImg: img2,
    title: "Vietnam is a perfect place✈️",
    desc: "From exploring the ancient beauty of Ha Long Bay to the vibrant streets of Ho Chi Minh City, every stop was a perfect blend of culture and adventure. Truly a top-notch experience!",
  },
  {
    id: 3,
    postImg: img3,
    title: "You guys should join too🥰",
    desc: "The Vietnam group tour was flawlessly managed, with every detail taken care of. Visiting iconic spots like Hanoi's Old Quarter and the serene landscapes of Ninh Binh made it an unforgettable journey!",
  },
  {
    id: 4,
    postImg: img4,
    title: "Don't lose this opportunity🤩",
    desc: "Our Vietnam group tour was expertly organized, making the entire experience smooth and enjoyable. Highlights like Ha Long Bay and the Cu Chi Tunnels added unforgettable moments to the trip!",
  },
  {
    id: 5,
    postImg: img5,
    title: "I will join again🙏🏻",
    desc: "The Vietnam group tour was a fantastic experience with excellent coordination and well-chosen destinations. Exploring the beauty of places like Hoi An and the Mekong Delta made the trip truly memorable!",
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our Best Blog?</h2>
          <p>We have best memories with our group members😍</p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ id, postImg, title, desc }) => {
            return (
              <div className="singlePost grid" id={id} data-aos="fade-up">
                <div className="imgDiv">
                  <img src={postImg} alt={title} />
                </div>

                <div className="postDetails">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
