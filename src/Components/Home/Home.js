import React from 'react'
import './Home.css'
import './HomePhone.css'
import EventsCards from './EventsCards'
import BlogCards from './BlogsCards'
import WhiteBubble from '../../Images/Backgrounds/WhiteBubble.svg'
import BlueBubble from '../../Images/Backgrounds/BlueBubble.svg'
import HumansImage from '../../Images/Backgrounds/HumansImage.png'
import EllipseRingTop from '../../Images/Backgrounds/EllipseRingTop.svg'
import EllipseRingBlog from '../../Images/Backgrounds/EllipseRingBlog.svg'
import LogoSlider from './LogoSlider'

export default function Home() {
  return (
    <div id='WelcomeSection'>
      <img className='EllipseRingTop' src={EllipseRingTop} alt="E-Cell RSCOE" />
      <img className='WhiteBubble' src={WhiteBubble} alt="E-Cell RSCOE" />
      <img className='BlueBubble' src={BlueBubble} alt="E-Cell RSCOE" />
      <img className='HumansImage' src={HumansImage} alt="E-Cell RSCOE" />
      <div className="WelcomeLeft">
        <h1>RSCOE's E-Cell</h1>
        <h2>
          Entrepreneurship Development Cell
        </h2>
        <h3>
          "Where Idea Matters"
        </h3>
        <div>
          <p className='WelcomeSectionPointOut'>
            <span className='WelcomeSectionPointO'></span>
            <span className='WelcomeSectionPointE'></span>
            <span className='WelcomeSectionPointO'></span>
          </p>
          <p className='WelcomeSectionTextOut'>
            <span>1000+ Students</span>
            <span>Participated In Last 2 Years</span>
          </p>
        </div>
      </div>
      <a href="#" className='ESummitBtn'>E-SUMMIT 2022</a>
      <div id="AboutUs">
        {/* <video src="https://youtu.be/Ac3V51g0inc" className='AboutUsLeft' controls></video> */}
        <iframe className='AboutUsLeft' src="https://www.youtube.com/embed/Ac3V51g0inc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="AboutUsRight">
          <h2 className='SectionHeading'>About Us</h2>
          <span className='WordUnderline'></span>
          <div>
            <span>Vision</span>: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div>
            <span>Mission</span>: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <a href="#" className='AboutUsBtn'>MEET OUT TEAM</a>
        </div>
      </div>
      <div id="Events">
        <div className="PastEventHeadTextOut">
          <div className='EventsHeadingOut'>
            <h2 className='SectionHeading'>Our Past Events</h2>
            <span className='WordUnderline'></span>
          </div>
          <div className="PastEventHeadText">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="PastEventsBack">
          <EventsCards />
        </div>
      </div>
      <div className="SponsorsOut">
        <div className='SponsorsHeadingOut'>
          <h2 className='SectionHeading'>Sponsors</h2>
          <span className='WordUnderline'></span>
        </div>
        {/* <div className="SponsorsListOut">
          <p className="Sponsors">Sponsors</p>
          <p className="Sponsors">Sponsors</p>
          <p className="Sponsors">Sponsors</p>
          <p className="Sponsors">Sponsors</p>
        </div> */}
      </div>
      <LogoSlider />
      <div className="OurBlogsOut">
        <img className='EllipseRingBlog' src={EllipseRingBlog} alt="E-Cell RSCOE" />
        <div className="OurBlogsBack">
          <BlogCards />
        </div>
        <div className='OurBlogsHeadingOut'>
          <h2 className='SectionHeading'>Our Blogs</h2>
          <span className='WordUnderline'></span>
        </div>
      </div>
      {/* <div></div> */}
    </div>
  )
}
