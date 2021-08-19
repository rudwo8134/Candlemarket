import React from 'react'
import styled from 'styled-components'
import logo from '../../source/Logoprofile.png'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  width: 100vw;
  height: 35vh;
  background-color: black;
`
const Container = styled.div`
  max-width: 1300px;
  height: 100%;
  padding: 10rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  div {
    width: 33%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-size: 1.3rem;
      font-weight: 300;
    }
    .address {
      margin-top: 2rem;
    }
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
const LinkComponent = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 700;
`
const Linkcontinaer = styled.span`
  padding: 2rem;
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <span>3109-19 Western Battery road,Toronto,Ontario</span>
          <span className="address">+1 647-530-8134</span>
          
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <Linkcontinaer>
          <LinkComponent>home</LinkComponent>
          <LinkComponent>about</LinkComponent>
          <LinkComponent>Portfolio</LinkComponent>
          <LinkComponent>Shop</LinkComponent>
        </Linkcontinaer>
      </Container>
    </Wrapper>
  );
}

export default Footer
