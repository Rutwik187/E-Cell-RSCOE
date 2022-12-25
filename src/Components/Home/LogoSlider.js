
import './LogoSlider.css'
import LogoImg from "../../Images/Icons/Google_2015_logo.svg"
import BtnArrow from '../../Images/Icons/BtnArrow.svg'

import sliderRightArrow from "../../Images/Icons/left arrow.png"
import sliderLeftArrow from "../../Images/Icons/right arrow.png"


const LogoSlider = () => {
  let box = document.querySelector('.product-container');

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
  }

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width)
  }
  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}><img src={sliderRightArrow} alt="leftarrow" /></button>
      {/* <button className='PrevNextBtn PrevBtn pre-btn' onClick={btnpressprev}><img src={BtnArrow} style={{ transform: 'rotate(180deg)' }} alt="E-Cell RSCOE" /></button> */}
      <button onClick={btnpressnext} className="next-btn" ><img src={sliderLeftArrow} alt="rightarrow" /></button>


      <div className="product-container">
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
        <img src={LogoImg} alt="logoImg" width={150} />
      </div>
    </div>
  )
}

export default LogoSlider