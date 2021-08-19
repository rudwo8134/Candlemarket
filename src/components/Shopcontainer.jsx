import React from 'react'
import styled from 'styled-components'
import img from '../source/hero2.jpg'

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 100px 0;
`;
const Barcontainer = styled.div`
  padding: 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  h3 {
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 0.1em;
    font-size: 1.3rem;
  }
  select {
    text-transform: capitalize;
    font-size: 1.3rem;
    border: none;
    letter-spacing: 0.1em;
  }
`;
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

const Shopcontainer = () => {
  return (
    <Wrapper>
      <Barcontainer>
        <h3>showing 1-15 of 24 results</h3>
        <select>
          <option value="">Sort by popularity</option>
          <option value="">Sort by date</option>
        </select>
      </Barcontainer>
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

export default Shopcontainer
