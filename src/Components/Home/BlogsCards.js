import React from 'react'
import './BlogsCards.css'
import EcellImg from '../../Images/Temp/EcellImg.jpg'
import BtnArrow from '../../Images/Icons/BtnArrow.svg'
import { Link } from 'react-router-dom'

export default function BlogsCards() {
  let i = 0, sliderPosBlogs = 1;
  let sliderImgSrcBlogs = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div id="BlogsSlider">
        <div className="BlogsCard">

          <div>
            <img src={EcellImg} alt="E-Cell RSCOE" />
            <h3>NETWORKING</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className="Blog__card-button">

            <Link to="/Blog1">Read More</Link>
          </div>
          {/* <a href="#"></a> */}
        </div>

        <div className="BlogsCard">
          <div>
            <img src={EcellImg} alt="E-Cell RSCOE" />
            <h3>NETWORKING</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <Link to="/Blog1">Read More</Link>
        </div>

        <div className="BlogsCard">
          <div>
            <img src={EcellImg} alt="E-Cell RSCOE" />
            <h3>NETWORKING</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <Link to="/Blog1">Read More</Link>
        </div>

        <div className="BlogsCard">
          <div>
            <img src={EcellImg} alt="E-Cell RSCOE" />
            <h3>NETWORKING</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <Link to="/Blog1">Read More</Link>
        </div>





        {/* <div className="BlogsCard">
          <div>
            <img src={EcellImg} alt="E-Cell RSCOE" />
            <h3>NETWORKING</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <a href="#">Read More</a>
        </div> */}

        {/* <div className="BlogsCard">
          <div>
            <img src={EcellImg} alt="E-Cell RSCOE" />
            <h3>NETWORKING</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <a href="#">Read More</a>
        </div> */}
      </div>
      <div className="BlogsSliderBtnOut">
        <button className='PrevNextBtn PrevBtn' onClick={prevImgBlogs}><img src={BtnArrow} style={{ transform: 'rotate(180deg)' }} alt="E-Cell RSCOE" /></button>
        <button className='PrevNextBtn NextBtn' onClick={nextImgBlogs}><img src={BtnArrow} alt="E-Cell RSCOE" /></button>
      </div>
    </>
  )
  function nextImgBlogs() {
    // console.log("sliderPosBlogs: ", sliderPosBlogs);
    try {
      let BlogsSlider = document.getElementById('BlogsSlider');
      if ((((sliderImgSrcBlogs.length) % 3 === 1) || ((sliderImgSrcBlogs.length) % 3 === 2)) && (i === Math.floor((sliderImgSrcBlogs.length) / 3))) {
        i = 0;
        sliderPosBlogs = 4;
        BlogsSlider.style.left = sliderPosBlogs.toString() + 'vw';
      }
      else if (((sliderImgSrcBlogs.length) % 3 === 0) && (i === Math.floor((sliderImgSrcBlogs.length) / 3) - 1)) {
        i = 0;
        sliderPosBlogs = 4;
        BlogsSlider.style.left = sliderPosBlogs.toString() + 'vw';
      }
      else if ((((sliderImgSrcBlogs.length) % 3 === 1) || ((sliderImgSrcBlogs.length) % 3 == 0)) && (i === Math.floor((sliderImgSrcBlogs.length) / 3) - 2 + (sliderImgSrcBlogs.length) % 3)) {
        i = i + 1;
        if ((sliderImgSrcBlogs.length) % 3 === 0) {
          sliderPosBlogs = sliderPosBlogs - 75;
        }
        else if ((sliderImgSrcBlogs.length) % 3 === 1) {
          sliderPosBlogs = sliderPosBlogs - 25;
        }
        // else {
        //   sliderPosBlogs = sliderPosBlogs - 40;
        // }
        BlogsSlider.style.left = sliderPosBlogs.toString() + 'vw';
      }
      else if (((sliderImgSrcBlogs.length) % 3 === 2) && (i === Math.floor((sliderImgSrcBlogs.length) / 3) - 1)) {
        i = i + 1;
        sliderPosBlogs = sliderPosBlogs - 50;
        BlogsSlider.style.left = sliderPosBlogs.toString() + 'vw';
      }
      else {
        i = i + 1;
        sliderPosBlogs = sliderPosBlogs - 75;
        BlogsSlider.style.left = sliderPosBlogs.toString() + 'vw';
      }
    } catch (err) {
      // console.log("Error: ", sliderPosBlogs);
      // console.log("Error: ", err);
    }
  }
  function prevImgBlogs() {
    // console.log(i);
    try {
      let BlogsSlider = document.getElementById('BlogsSlider');
      if (i === 0) {
        if ((sliderImgSrcBlogs.length) % 3 === 1 || (sliderImgSrcBlogs.length) % 3 === 2) {
          i = Math.floor((sliderImgSrcBlogs.length) / 3);
          if ((sliderImgSrcBlogs.length) % 3 === 1) {
            sliderPosBlogs = ((Math.floor((sliderImgSrcBlogs.length) / 3) - 1) * -75) + 4 - 25;
          }
          else if ((sliderImgSrcBlogs.length) % 3 === 2) {
            sliderPosBlogs = ((Math.floor((sliderImgSrcBlogs.length) / 3) - 1) * -75) + 4 - 50;
          }
        }
        else {
          i = Math.floor((sliderImgSrcBlogs.length) / 3) - 1;
          sliderPosBlogs = ((Math.floor((sliderImgSrcBlogs.length) / 3) - 1) * -75) + 4;
        }

        // if ((sliderImgSrcBlogs.length) % 3 == 0) {
        //   sliderPosBlogs = ((Math.floor((sliderImgSrcBlogs.length) / 3) - 2 + (sliderImgSrcBlogs.length) % 3) * -66) + 7 - 58;
        // }
        // else {
        //   sliderPosBlogs = ((Math.floor((sliderImgSrcBlogs.length) / 3) - 2 + (sliderImgSrcBlogs.length) % 3) * -66) + 7 - 25;
        // }
        BlogsSlider.style.left = sliderPosBlogs.toString() + 'vw';
      }
      else if ((((sliderImgSrcBlogs.length) % 3 === 1) || ((sliderImgSrcBlogs.length) % 3 === 2)) && i === Math.floor((sliderImgSrcBlogs.length) / 3)) {
        i = i - 1;
        if ((sliderImgSrcBlogs.length) % 3 === 1) {
          sliderPosBlogs = sliderPosBlogs + 25;
        }
        else {
          sliderPosBlogs = sliderPosBlogs + 50;
        }
        BlogsSlider.style.left = sliderPosBlogs.toString() + 'vw';
      }
      // else if (((sliderImgSrcBlogs.length) % 3 == 0) && i === Math.floor((sliderImgSrcBlogs.length) / 3) - 1) {
      //   sliderPosBlogs = sliderPosBlogs + 75;
      // }
      else {
        i = i - 1;
        sliderPosBlogs = sliderPosBlogs + 75;
        BlogsSlider.style.left = sliderPosBlogs.toString() + 'vw';
      }
      // console.log(i);
    } catch (err) {
      // console.log("Error: ", sliderPosBlogs);
    }
  }
}
