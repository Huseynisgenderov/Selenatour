import React from "react";
import "./blog.scss";
import img from "../../assets/Image/Bali.jpg";

const Posts = [
  {
    id: 1,
    postImg: img,
    title: "Beautiful Morocco",
    desc: "blablabalbalbalblabla",
  },
  {
    id: 2,
    postImg: img,
    title: "Beautiful Morocco",
    desc: "blablabalbalbalblabla",
  },
  {
    id: 3,
    postImg: img,
    title: "Beautiful Morocco",
    desc: "blablabalbalbalblabla", 
  },
];

const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our Best Blog?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
            deleniti?
          </p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({id, postImg, title, desc}) => {
            return (
              <div className="singlePost grid" id={id}>
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
