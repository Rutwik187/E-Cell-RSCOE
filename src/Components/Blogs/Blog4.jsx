import React from "react";
import "./Blogs.css";
import enterprioner from "../../Images/Blogs/enterprioner.jpg";
import start_up from "../../Images/Blogs/start_up.jpg";

const Blog4 = () => {
  return (
    <div className="Blogs__page">
      <h2 className="Blogs__title">What is Entrepreneurship?</h2>
      <div className="Blogs_img">
        <img src={start_up} alt="" />
      </div>
      <p className="Blogs__content">
        Entrepreneurship can be defined as the creation of something which adds
        value to the economy. Entrepreneurship is viewed as change. A change
        which adds to the rewards and the risks altogether. Entrepreneurship has
        been viewed as setting up a business in recent terms to narrow down the
        vast plethora of the term. It has been made easier to understand with
        the following remark :
      </p>
      <p className="Blogs__quote">
        “Entrepreneurship is the capacity and the willingness to develop,
        organize and manage a business venture along with the risks to make a
        substantial profit.”
      </p>
      <div className="Blogs_img">
        <img src={enterprioner} alt="" />
      </div>
      <h3 className="Blogs__subTitle">What Is an Entrepreneur?</h3>

      <p className="Blogs__content">
        An entrepreneur is seen as the visionary who runs one or multiple
        businesses, which are shaped according to his/her vision. An
        entrepreneur is seen as the entity who transforms an invention or a
        technology into products and services which serve the masses and results
        in a substantial profit for the economy. Entrepreneurs are seen as
        innovators, sources of new ideas, and handlers of multiple businesses.
      </p>
      <p className="Blogs__quote">
        “Entrepreneurs are hard-workers, innovators and developers who shape the
        economy of their nation and contribute to a visionary mindset among the
        masses.”
      </p>
      <h3 className="Blogs__subTitle">
        An ideal entrepreneur always searches for the following :
      </h3>
      <ul className="Blogs__list">
        <li>Inno-visionary approach</li>

        <li>Creativity and redevelopment</li>

        <li>
          Sensibility and updatability for the modern world Optimism,
          profitability and hardwork
        </li>
      </ul>
    </div>
  );
};

export default Blog4;
