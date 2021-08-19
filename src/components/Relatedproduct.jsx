import React from 'react'
import styled from 'styled-components'
import img from '../source/hero3.jpg'

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 10rem 0;
  h1{
    font-size: 3.4rem;
    text-align: center;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`
const Itemcontainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 3rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 30px;
    padding: 2rem;
  }
  img {
    width: 100%;
    height: auto;
    max-width: 250px;
    border-radius: 5px;
  }
  h1 {
    margin-top: 2rem;
    font-size: 1.8rem;
    text-transform: capitalize;
    font-weight: 400;
  }
  span {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 100;
    color: #d8806b;
  }
`;

const Relatedproduct = () => {
  return (
    <Wrapper>
      <h1>Related Products</h1>
      <Itemcontainer>
        <div>
          <img src={img} alt="item" />
          <h1>Almond Pinot grigio</h1>
          <span>$48.00</span>
        </div>
        <div>
          <img src={img} alt="item" />
          <h1>Almond Pinot grigio</h1>
          <span>$48.00</span>
        </div>
        <div>
          <img src={img} alt="item" />
          <h1>Almond Pinot grigio</h1>
          <span>$48.00</span>
        </div>
        <div>
          <img src={img} alt="item" />
          <h1>Almond Pinot grigio</h1>
          <span>$48.00</span>
        </div>
      </Itemcontainer>
    </Wrapper>
  );
}

export default Relatedproduct
