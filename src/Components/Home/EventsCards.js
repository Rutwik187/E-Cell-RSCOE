import React, { useEffect } from 'react'
import './EventsCards.css'
import EcellImg from '../../Images/Temp/EcellImg.jpg'
import BtnArrow from '../../Images/Icons/BtnArrow.svg'

export default function EventsCards() {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextImgEvents();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  let i = 0, sliderPos = 7;
  let sliderImgSrc = [1, 2, 3, 4, 5, 6];
  // let imgSlider = [];
  // for (i = 0; i < sliderImgSrc.length; i++) {
  //   imgSlider.push(<img src={sliderImgSrc[i]} className="sliderImgs" alt="Slider" />);
  // }
  // i = 0;
  return (
    <>
      <div id='EventsSlider'>
        <div className="EventsCard">
          <img src={EcellImg} alt="E-Cell RSCOE" />
          <div>
            <p>E-Summit</p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="EventsCard">
          <img src={EcellImg} alt="E-Cell RSCOE" />
          <div>
            <p>E-Summit</p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="EventsCard">
          <img src={EcellImg} alt="E-Cell RSCOE" />
          <div>
            <p>E-Summit</p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="EventsCard">
          <img src={EcellImg} alt="E-Cell RSCOE" />
          <div>
            <p>E-Summit</p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="EventsCard">
          <img src={EcellImg} alt="E-Cell RSCOE" />
          <div>
            <p>E-Summit</p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="EventsCard">
          <img src={EcellImg} alt="E-Cell RSCOE" />
          <div>
            <p>E-Summit</p>
            <a href="#">Read More</a>
          </div>
        </div>

        {/* <div className="EventsCard">
          <img src={EcellImg} alt="E-Cell RSCOE" />
          <div>
            <p>E-Summit</p>
            <a href="#">Read More</a>
          </div>
        </div> */}
      </div>
      <div className="EventsSliderBtnOut">
        <button className='PrevNextBtn PrevBtn' onClick={prevImgEvents}><img src={BtnArrow} style={{ transform: 'rotate(180deg)' }} alt="E-Cell RSCOE" /></button>
        <button className='PrevNextBtn NextBtn' onClick={nextImgEvents}><img src={BtnArrow} alt="E-Cell RSCOE" /></button>
      </div>
    </>
  )

  function nextImgEvents() {
    // console.log("sliderPos: ", sliderPos);
    try {
      // let sliderImgs = document.getElementsByClassName('sliderImgs');
      let EventsSlider = document.getElementById('EventsSlider');
      if (i === parseInt((sliderImgSrc.length) / 2) - 1 + (sliderImgSrc.length) % 2) {
        i = 0;
        sliderPos = 7;
        EventsSlider.style.left = sliderPos.toString() + 'vw';
      }
      else if (i === parseInt((sliderImgSrc.length) / 2) - 2 + (sliderImgSrc.length) % 2) {
        i = i + 1;
        if ((sliderImgSrc.length) % 2 == 0) {
          sliderPos = sliderPos - 58;
        }
        else {
          sliderPos = sliderPos - 25;
        }
        EventsSlider.style.left = sliderPos.toString() + 'vw';
      }
      else {
        i = i + 1;
        sliderPos = sliderPos - 66;
        EventsSlider.style.left = sliderPos.toString() + 'vw';
      }
      // console.log(i);
      // console.log("Next " + i + " " + sliderPos);
    } catch (err) {
      // console.log("Error: ", sliderPos);
      // console.log("Error: ", err);
    }
  }
  function prevImgEvents() {
    // console.log(i);
    try {
      let EventsSlider = document.getElementById('EventsSlider');
      if (i === 0) {
        i = parseInt((sliderImgSrc.length) / 2) - 1 + (sliderImgSrc.length) % 2;
        if ((sliderImgSrc.length) % 2 == 0) {
          sliderPos = ((parseInt((sliderImgSrc.length) / 2) - 2 + (sliderImgSrc.length) % 2) * -66) + 7 - 58;
        }
        else {
          sliderPos = ((parseInt((sliderImgSrc.length) / 2) - 2 + (sliderImgSrc.length) % 2) * -66) + 7 - 25;
        }
        EventsSlider.style.left = sliderPos.toString() + 'vw';
      }
      else if (i === parseInt((sliderImgSrc.length) / 2) - 1 + (sliderImgSrc.length) % 2) {
        i = i - 1;
        if ((sliderImgSrc.length) % 2 == 0) {
          sliderPos = sliderPos + 58;
        }
        else {
          sliderPos = sliderPos + 25;
        }
        EventsSlider.style.left = sliderPos.toString() + 'vw';
      }
      else {
        i = i - 1;
        sliderPos = sliderPos + 66;
        EventsSlider.style.left = sliderPos.toString() + 'vw';
      }
      // console.log(i);
    } catch (err) {
      // console.log("Error: ", sliderPos);
    }
  }
}
