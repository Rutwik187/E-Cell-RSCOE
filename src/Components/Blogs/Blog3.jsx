import React from "react";
import "./Blogs.css";
import start_up_img from "../../Images/Blogs/blog3_1.jpg";
import iit_b from "../../Images/Blogs/ecell_iit_bombay.png";
import iit_k from "../../Images/Blogs/ecell_iit_kanpur.png";
import iit_m from "../../Images/Blogs/ecell_iit_madras.png";
import nit_t from "../../Images/Blogs/ecell_nit_trichy.png";
import vnit from "../../Images/Blogs/ecell_vnit.png";

const Blog3 = () => {
  return (
    <div className="Blogs__page">
      <p className=" publish_date">Published on: 17-Dec-2022</p>
      <h2 className="Blogs__title">
        Why the need for an entrepreneurship club?
      </h2>
      <div className="Blogs_img">
        <img src={start_up_img} alt="" />
      </div>
      <p className="Blogs__content">
        In the 21st century, development and innovation is the key for a
        nation’s supremacy. We strive for a profitable economy to sustain and
        stand out for personal as well as social benefits. Entrepreneurs help
        develop an environment which instills the value of updating and
        upgrading. Entrepreneurs generate employment, help the economy, solve
        social and emassable problems and strive to make profits to live a
        high-standard life.
      </p>
      <br></br>
      <p className="Blogs__content">
        To help develop an entrepreneurial vision, it is necessary to inculcate
        the values and attributes in students. It is important to educate
        students about entrepreneurship to develop an intricate thinking among
        the skillful youth in India. As the number of job seekers increase, a
        definitive number of applicants remain unemployed or work at a much
        lower position than they’re expected to.
      </p>
      <br></br>
      <p className="Blogs__content">
        To avoid this dystopia, students should have an approach to develop
        something of their own. This will ensure that they make a living off
        their own innovation and never be put out of work. It will also mean,
        these budding innovators wouldn’t have to work for anyone else rather
        than themselves. This will result in constant motivation and
        work-satisfaction.
      </p>
      <br></br>
      <p className="Blogs__content">
        Entrepreneurs also ensure that they create employment, higher economical
        drive and a dedicated and committed individual development. This overall
        developmental approach has to be at the forefront of the student
        community as it will strengthen the economy-driven perception an ideal
        youth should possess. This includes the strengthening of ideations,
        innovations and creations that are the driving forces of entrepreneurial
        supremacy.
      </p>
      <br></br>
      <p className="Blogs__content">
        Some of the most famous entrepreneurship college clubs across India :
      </p>
      <div className="ecell_clubs_logos">
        <div className="ecell_club_logo">
          <img src={iit_b} alt="" />
        </div>
        <div className="ecell_club_logo">
          <img src={iit_k} alt="" />
        </div>
        <div className="ecell_club_logo">
          <img src={iit_m} alt="" />
        </div>
        <div className="ecell_club_logo">
          <img src={nit_t} alt="" />
        </div>
        <div className="ecell_club_logo">
          <img src={vnit} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog3;
