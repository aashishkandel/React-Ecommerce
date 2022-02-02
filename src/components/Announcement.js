import styled from "styled-components";
import { phone } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  ${phone({ fontSize: "13px" })}
`;

const Announcement = () => {
  return (
    <Container>
      Hey, checkout our super deal of upto $200 on all Nike products
    </Container>
  );
};

export default Announcement;
