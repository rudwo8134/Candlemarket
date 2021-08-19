import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import backgroundimg from '../source/back.jpg';
import wave from '../source/wave.svg';

const Wrapper = styled.section`
  max-width: 1300px;
  height: 100vh;
  margin: 0 auto;
  padding: 10rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  span {
    text-align: center;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  h3 {
    font-weight: 200;
    font-size: 3.2rem;
    margin-bottom: 2rem;
    line-height: 1.375em;
    word-wrap: break-word;
  }
  div {
    font-weight: 400;
    word-wrap: break-word;
    vertical-align: baseline;
    font-size: 2rem;
    width: 70%;
    margin-bottom: 3em;
  }
  .card {
    display: grid;
    background-color: black;
    width: 100%;
    height: 400px;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    padding: 1rem;
    div {
      width: 100%;
      height: 100%;
      background-color: white;
      position: relative;
      span {
        position: absolute;
        transform: rotate(-90deg);
        background-color: rgb(249, 244, 236);
        font-size: 1.8rem;
        font-weight: 400;
        text-align: center;
        top: 0;
        left: 0;
      }
    }
  }
`;
const ParallaxWrapper = styled.div`
  overflow: hidden;
  width: 100vw;
  height: calc(100vh+140px);
  clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
`;
const Parallaximg = styled.div`
  width: 100vw;
  height: 120vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url(${backgroundimg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 50% -200px;
  transition: all 0.3 ease-in-out;
`;
const ImgWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 3.2rem;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.6rem;
      width: 40%;
      margin-bottom: 3rem;
    }
    span {
      text-align: center;
      font-size: 1.3rem;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 2rem;
    }
  }
`;
const Shopimg = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 4rem;
  img {
    width: 100%;
    height: 100%;
    max-width: 500px;
    border-radius: 10px;
  }
`;
const Contactcontainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 3.2rem;
    font-weight: 300;
    width: 40%;
    text-align:center;
  }
  form{
    margin-top: 3rem;
    label{
      display: none;
    }
    div{
      width: 100%;
    }
    input{
      color:white;
      font-size: 1.5rem;
      margin-left: 2rem;
      width: 50%;
      height: 5rem;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid white;
    }
  }
`;

const Price = () => {
  const [value, setvalue] = useState();
  useEffect(() => {
    const handlscroll = async (e) => {
      const offset = await window.pageYOffset;
      const height = await window.innerHeight;
      const percentage = (await height) * 0.0001 * (offset - height);
      if (percentage > 0) {
        await setvalue(percentage);
      }
    };
    window.addEventListener('scroll', handlscroll);
    return () => () => {
      window.removeEventListener('scroll', handlscroll);
    };
  }, []);
  return (
    <>
      <Wrapper>
        <span>wine tours</span>
        <h3>Take home a lifetime memory</h3>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          accusamus illo saepe, quas accusantium id soluta magni delectus odit
          architecto molestiae voluptatibus laborum veniam perferendis
          praesentium officiis autem impedit eveniet.
        </div>
        <div className="card">
          <div>
            <span>Standard Tour</span>
          </div>
          <div>
            <span>Fancy Tour</span>
          </div>
          <div></div>
        </div>
      </Wrapper>
      <ParallaxWrapper>
        <Parallaximg
          style={{ transform: `translateY(${-300 + value * 4}px)` }}
        ></Parallaximg>
      </ParallaxWrapper>
      <Wrapper>
        <span>TOUR GUIDES</span>
        <h3>Meet our best touristic guides</h3>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          accusamus illo saepe, quas accusantium id soluta magni delectus odit
          architecto molestiae voluptatibus laborum veniam perferendis
          praesentium officiis autem impedit eveniet.
        </div>
        <div className="card">
          <div>
            <span>Standard Tour</span>
          </div>
          <div>
            <span>Fancy Tour</span>
          </div>
          <div></div>
        </div>
      </Wrapper>
      <ImgWrapper>
        <div className="contents">
          <span>product list</span>
          <h1>There are many Candles</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ducimus iure assumenda dolore corrupti voluptatibus, fugiat quo,
            perspiciatis eligendi, explicabo aperiam tenetur rerum laborum? Fuga
            error porro quaerat recusandae doloremque.
          </p>
        </div>
        <Shopimg>
          <img src={backgroundimg} alt="img" />
          <img src={backgroundimg} alt="img" />
          <img src={backgroundimg} alt="img" />
          <img src={backgroundimg} alt="img" />
          <img src={backgroundimg} alt="img" />
          <img src={backgroundimg} alt="img" />
          <img src={backgroundimg} alt="img" />
          <img src={backgroundimg} alt="img" />
          <img src={backgroundimg} alt="img" />
          <img src={backgroundimg} alt="img" />
        </Shopimg>
      </ImgWrapper>
      <Contactcontainer>
        <h1>
          If you have any questions about our wine tours, please fill out this
          form.
        </h1>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="name"  />
            <label htmlFor="email">E-mail address</label>
            <input placeholder="email" id="email" type="email" />
          </div>
          <label htmlFor="message">Message</label>
          <input id="message" placeholder="message" type="text" />
          <button>Send</button>
        </form>
      </Contactcontainer>
    </>
  );
};

export default Price;
