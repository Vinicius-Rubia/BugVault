import styled from "styled-components";
import Background from "../../assets/images/background.svg";

export const Container = styled.div`
  min-height: 100vh;
  background: url(${Background}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 8rem;
    font-size: 3rem;
  }
`;

export const Form = styled.form`
  input {
    max-width: 530px;
    width: 100%;
    border-bottom: 2px solid #fff;
    color: #fff;
    padding-bottom: 0.4375rem;
    margin-bottom: 3.375rem;

    &::placeholder {
      color: #999999;
    }
  }
  button {
    color: #fff;
    background-color: #57a393;
    width: 100%;
    height: 56px;
    border-radius: 4px;
    transition: 0.2s;

    &:hover {
      background-color: #3A665F;
    }
  }
`;
