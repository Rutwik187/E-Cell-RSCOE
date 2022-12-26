import React from "react";
import "./Blogs.css";
import creativity from "../../Images/Blogs/creativity.jpg";
import sustainibility from "../../Images/Blogs/adaptability quote.jfif";

const Blog2 = () => {
  return (
    <div className="Blogs__page">
      <p className=" publish_date">Published on: 10-Dec-2022</p>
      <h2 className="Blogs__title">Inno-Vision & Creativity:</h2>
      <div className="Blogs_img">
        <img src={creativity} alt="" />
      </div>
      <p className="Blogs__content">
        Inno-Vision is a word derived from the phrase “innovative visionary”.
        Inno-Vision is an approach in entrepreneurship which conveys the
        principle of developing an innovation which solves the problems of the
        present and the future.
      </p>
      <p className="Blogs__content">
        Inno-Vision is an attribute which describes the entrepreneur’s approach
        towards a problem and his/her stature to innovate something which will
        result in profits and also solve a massive problem statement.
      </p>

      <h3 className="Blogs__subTitle">Inno-Vision requires the following :</h3>
      <ul className="Blogs__list">
        <li>Ideation</li>

        <li>Innovation</li>

        <li>Creation</li>
      </ul>

      <p className="Blogs__content">
        <b>Ideation</b> is the process of thinking and choosing a problem
        statement which an entrepreneur can ponder over and solve. Ideation is
        the most fundamental step in Inno-Vision as it chooses the domain an
        entrepreneur works on.
      </p>

      <p className="Blogs__content">
        <b>Innovation</b> is the process in which an entrepreneur works
        extensively over designing a particular product. It involves the
        development of a plan, and the making of a proper procedure to develop a
        product or an ideation.
      </p>

      <p className="Blogs__content">
        <b>Creation</b> is the process in which the designed procedure is
        actually implemented. Creation involves developing prototypes,
        redeveloping outdated structures and updating them up to standard
        conditions. It also involves the marketing, the deployment of the
        product in the real world and unhindered manufacturing of the product.
      </p>

      <h3 className="Blogs__subTitle">Sensibility & Adaptability :</h3>
      <p className="Blogs__content">
        <strong>Sensibility </strong>
        is the level of understanding ina particular situation. Being sensible
        means understanding the room. An entrepreneur requires sensibility to
        see through a general audience and to assess their requirements.
        Sensibility gives an entrepreneur wider opportunities, scope and a
        mammoth purpose.
      </p>
      <p className="Blogs__content">
        {" "}
        It makes the product reach a wider amount of people and it can make the
        entrepreneur succeed in the bounds of a social community. It means
        understanding the current situations, current updations and an approach
        for further development.
      </p>
      <br></br>
      <div className="Blogs_img">
        <img src={sustainibility} alt="" />
      </div>
      <p className="Blogs__content">
        <strong>Adaptability </strong>
        is the ability of an entrepreneur to latch on to the state of modernity
        and update the outdated. To adapt something is the approach to work on
        the shortcomings and outdations of a product, understanding newer
        perceptions, listening to constructive feedback and acting
        constructively with an all-round development.
      </p>
      <p className="Blogs__content">
        {" "}
        Entrepreneurs who possess adaptability sustain every discourse and rise
        from any sort of setbacks. Adaptability can also result in the
        prevention of any setbacks or falls. To stabilize and to increment the
        profits, adaptability possesses a vital role.
      </p>
    </div>
  );
};

export default Blog2;
