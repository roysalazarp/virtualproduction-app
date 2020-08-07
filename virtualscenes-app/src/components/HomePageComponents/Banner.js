import React from 'react';

const Banner = () => {
  let currentPosition = 0;
  const bannerAnimation = () => {
    const banner = document.querySelector('.banner__container');
    const windowWidth = document.documentElement.clientWidth;
    const imageWidth = document.getElementsByClassName('img-banner')[0].width;
    const imagesCount = document.querySelectorAll('.img-banner').length;
    const bannerWidth = imageWidth * imagesCount;

    currentPosition += 3;
    banner.style.left = `${currentPosition}px`;
    if (currentPosition > windowWidth) {
      currentPosition = -bannerWidth;
    }
    requestAnimationFrame(bannerAnimation);
  };
  return (
    <section className="banner">
      <div className="banner__container">
        <img src="" alt="" className="" onLoad={bannerAnimation} />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
      </div>
      <div className='banner__logo'>OULOX</div>
      <div className='banner-gradient' />
    </section>
  );
}

export default Banner;
