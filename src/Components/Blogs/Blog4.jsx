import React from "react";
import "./Blogs.css";
import enterprioner from "../../Images/Blogs/enterprioner.jpg";
import start_up from "../../Images/Blogs/start_up.jpg";

const Blog4 = () => {
  return (
    <div className="Blogs__page">
      <p className=" publish_date">Published on: 24-Dec-2022</p>
      <h2 className="Blogs__title">ABOUT : Entrepreneurship Cell RSCOE</h2>
      <div className="Blogs_img">
        <img src={start_up} alt="" />
      </div>
      <p className="Blogs__content">
        <strong>E-Cell RSCOE</strong> is the club which was founded in the
        precinct of JSPM’s Rajarshi Shahu College of Engineering, Pune.
      </p>
      <p className="Blogs__content">
        E-Cell RSCOE aims to nurture the values of development, innovation,
        creativity and skillfulness and spread awareness regarding various
        aspects regarding entrepreneurship.
      </p>
      <p className="Blogs__content">
        As India is the home to over 70,000 startups, it is unparalleled in
        terms of talent and innovation. We at E-Cell RSCOE aim to nurture the
        finest minds in RSCOE to achieve success and growth in every aspect.
      </p>
      <div className="Blogs_img">
        <img src={enterprioner} alt="" />
      </div>

      <p className="Blogs__content">
        At E-Cell RSCOE, we conduct various activities such as conducting
        seminars, organising various technical and non-technical competitions,
        conducting group-developing activities and developing the niche
        community of innovators and developers within our precinct.
      </p>
      <br></br>
      <p className="Blogs__content">
        We strive to develop ourselves and the entire community of prodigious
        minds who are willing to serve the country with their invaluable
        contributions and making a name of their own. We also strive to spread
        the name of this dedicated cell which devotes its time, money and
        devotion to widespread entrepreneurship development.
      </p>
    </div>
  );
};

export default Blog4;
