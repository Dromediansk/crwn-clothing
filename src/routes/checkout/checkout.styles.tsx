import styled from "styled-components";
import Button from "../../components/button/button.component";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const CheckoutFooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ClearCartButton = styled(Button)`
  color: red;
`;

export const Total = styled.span`
  font-size: 36px;
`;

export const EmptyMessage = styled.span`
  font-size: 20px;
  margin: 40px auto;
`;
