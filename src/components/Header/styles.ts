import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.gray};
    transition: 0.2s; 

    &:hover {
      color: ${({ theme }) => shade(0.2, theme.colors.gray)};
    }
  }

  @media (max-width: 580px) {
    flex-direction: column-reverse;
    align-items: end;
  }
`;

export const Form = styled.form`
  height: 40px;
  max-width: 600px;
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors["gray700/white200"]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    font-size: 0.75rem;
    height: 40px;
    width: 100%;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.colors["white/gray900"]};
    padding-right: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  button {
    display: flex;
    align-items: center;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    
    img {
      border-radius: 50%;
    }
    
    span {
      font-size: 0.8125rem;
      color: ${({ theme }) => theme.colors["white/gray900"]};
    }
  }

  @media (max-width: 400px) {
  width: 100%; 
  }
`;
