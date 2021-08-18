import React from 'react'
import styled from 'styled-components'
import hero1 from '../source/hero1.jpg'
import hero2 from '../source/hero2.jpg';
import hero3 from '../source/hero3.jpg';
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Arrowleft = styled(FaArrowAltCircleLeft)`
  position: absolute;
  color: #030303;
  background-color: white;
  width: 3rem;
  height: 10rem;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  z-index: 3;
`;
const Arrowright = styled(FaArrowAltCircleRight)`
  position: absolute;
  color: #030303;
  background-color: white;
  width: 3rem;
  height: 10rem;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  z-index: 3;
`;
const Wrapper = styled.section`
  width: 100vw;
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  padding: 0 1rem;
  position: relative;
  div {
    width: 100%;
    height: calc(100vh - 100px);
    overflow: hidden;
    position: relative;
    &:hover {
      img {
        transform: scale(1.05);
      }
      span {
        display: block;
        transform: translateY(0px);
      }
    }
    span {
      transition: all 0.4s ease-in-out;
      transform: translateY(1000px);
      background-color: black;
      font-size: 10rem;
      position: absolute;
      text-align: ceter;
      width: 100%;
      height: 200px;
      color: white;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4rem;
      h3 {
        font-size: 1.5rem;
        text-align: center;
        text-transform: uppercase;
        margin: 3rem;
      }
      div {
        text-transform: capitalize;
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 2.6rem;
        text-align: center;
        b {
          font-size: 2.4rem;
          color: #d8806b;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
      transition: all 0.4s ease-in-out;
    }
  }
`;



const Hero = () => {
  return (
    <Wrapper>
      <Arrowleft />
      <Arrowright />
      <div>
        <img src={hero1} alt="pic1" />
        <span>
          <h3>candle</h3>
          <div>
            Do you want <b>fancy</b> candle?
          </div>
        </span>
      </div>
      <div>
        <img src={hero2} alt="pic1" />
        <span>
          <h3>candle</h3>
          <div>
            Do you want <b>cute</b> candle?
          </div>
        </span>
      </div>
      <div>
        <img src={hero3} alt="pic1" />
        <span>
          <h3>candle</h3>
          <div>
            Do you want <b>romantic</b> candle?
          </div>
        </span>
      </div>
    </Wrapper>
  );
}

export default Hero
