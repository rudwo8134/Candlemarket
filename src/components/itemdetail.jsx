import React from 'react'
import styled from 'styled-components'
import img from '../source/hero1.jpg'
import { BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';

const Wrapper = styled.div`
  max-width: 1300px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ItemContainer = styled.div`
  background-color: white;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const ImageContainer = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
img{
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 10px;
}
`
const ContentsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  h1 {
    font-size: 3.5rem;
    margin: 1.2rem 0 1rem 0;
    font-weight: 300;
    letter-spacing: 0.4rem;
    width: 70%;
  }
  span {
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 0.4rem;
    color: #d8806b;
    width: 70%;
    margin-bottom: 1rem;
  }
  .star {
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 1.5rem;
    line-height: 2rem;
    div {
      margin-right: 3rem;
      line-height: 2rem;
      font-size: 2.3rem;
    }
  }
  p {
    width: 70%;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 3.2rem;
    margin-bottom: 3rem;
  }
  .option {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 3rem;
    select {
      padding: 1rem 2rem;
      font-size: 1.8rem;
      background-color: black;
      color: white;
      letter-spacing: 0.3rem;
      text-transform: capitalize;
      font-weight: 800;
      border: none;
      border-radius: 30px;
      margin-right: 1rem;
    }
    button {
      padding: 1rem 2rem;
      font-size: 1.8rem;
      background-color: black;
      color: white;
      letter-spacing: 0.3rem;
      text-transform: capitalize;
      font-weight: 800;
      border: none;
      border-radius: 30px;
    }
  }
  h3 {
    width: 70%;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 3.2rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
`;
const Star = styled(BsStarFill)`
margin-right: 0.5rem;
`;

const Itemdetail = () => {
  return (
    <Wrapper>
      <ItemContainer>
        <ImageContainer>
          <img src={img} alt="img" />
        </ImageContainer>
        <ContentsContainer>
          <h1>Almond Pinot Grigio</h1>
          <span className="star">
            <div>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            (1 Cutomer Review)
          </span>
          <span>$ 49.00</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            incidunt cum odio porro eaque, voluptatum, facilis eligendi nihil
            veritatis expedita quibusdam commodi beatae autem aperiam officia
            quia soluta unde maiores.
          </p>
          <div className="option">
            <select>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <button>Add to cart</button>
          </div>
          <h3>SKU:01</h3>
          <h3>Category: White</h3>
          <h3>Tags: Austrailia, China</h3>
        </ContentsContainer>
      </ItemContainer>
    </Wrapper>
  );
}

export default Itemdetail
