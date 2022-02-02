/**
 * TODO:
 * fetch data from database
 */

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { phone } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${phone({ flexDirection: "column", padding: "10px" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${phone({ height: "40vh" })}
`;

const InfoConatiner = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${phone({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${phone({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddConatiner = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${phone({ width: "100%" })}
`;

const AmountConatiner = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/51P1HW3/nikejacket.jpg" />
        </ImageContainer>
        <InfoConatiner>
          <Title>Nike Jacket</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            numquam eligendi ex est vel maiores quisquam cupiditate recusandae,
            voluptate sed totam sapiente hic, eum debitis laboriosam quasi nam
            officia neque.
          </Desc>
          <Price>$400</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddConatiner>
            <AmountConatiner>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountConatiner>
            <Button>ADD TO CART</Button>
          </AddConatiner>
        </InfoConatiner>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
