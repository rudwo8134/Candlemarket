import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// logo img
import LogoImage from '../../source/Logomain.png'


const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const LinkContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const LogoContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  width: 400px;
  img {
    width: 100%;
    height: auto;
  }
`;
const LinkContainerRight = styled.div`
`;
const Linkcomponent = styled(Link)`
  margin: 0 4rem;
  text-decoration: none;
`;
const Linkvaluecontainer = styled.span`
  letter-spacing: 0.11em;
  line-height: 2em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3rem;
  color: #000;
  padding-bottom: 0.5em;
  transition: all 0.3s ease-in-out;
  :hover {
    color: #d8806b;
    border-bottom: 1.5px solid black;
    font-weight: bold;
  }
`;


const Navbar = () => {
  return (
    <Wrapper>
      <LinkContainerLeft>
        <Linkcomponent to="/home">
          <Linkvaluecontainer>Home</Linkvaluecontainer>
        </Linkcomponent>
        <Linkcomponent to="/pages">
          <Linkvaluecontainer>Pages</Linkvaluecontainer>
        </Linkcomponent>
        <Linkcomponent to="portfolio">
          <Linkvaluecontainer>PortFolio</Linkvaluecontainer>
        </Linkcomponent>
      </LinkContainerLeft>
      <LogoContainer>
        <Linkcomponent to="/">
          <img src={LogoImage} alt="Sumin's" />
        </Linkcomponent>
      </LogoContainer>
      <LinkContainerRight>
        <Linkcomponent to="/">
          <Linkvaluecontainer>Blog</Linkvaluecontainer>
        </Linkcomponent>
        <Linkcomponent to="/shop">
          <Linkvaluecontainer>Shop</Linkvaluecontainer>
        </Linkcomponent>
        <Linkcomponent to="/">
          <Linkvaluecontainer>Elements</Linkvaluecontainer>
        </Linkcomponent>
      </LinkContainerRight>
    </Wrapper>
  );
}

export default Navbar
