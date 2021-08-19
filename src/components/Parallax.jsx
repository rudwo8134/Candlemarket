import React from 'react'
import styled from 'styled-components'
import img from '../source/backgroundforparallax.jpg'

const Wrapper = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: black;
  position: relative;
  h1{
    position: absolute;
    color:#000;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 6.2rem;
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: 0.25em;
  }
`
const Paralleximg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(245, 245,245, 0.3), rgba(233, 233, 233, 0.4)),
    url(${img}) no-repeat center center fixed;
  background-size: cover;
`;


const Parallax = ({name="shop"}) => {
  return (
    <div>
      <Wrapper>
        <Paralleximg />
        <h1>{name}</h1>
      </Wrapper>
    </div>
  );
}

export default Parallax
