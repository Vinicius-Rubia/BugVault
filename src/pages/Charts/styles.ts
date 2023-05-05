import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors["white/gray900"]};
    margin: 2.5rem 0 1.75rem;
  }
`;

export const ChooseDate = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors["white/gray900"]};
  }
`;

export const DateForm = styled.form`
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors["white/gray900"]};

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

    svg {
      color: ${({ theme }) => theme.colors.gray};
      transition: 0.2s;

      &:hover {
        color: ${({ theme }) => shade(0.2, theme.colors.gray)};
      }
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5625rem;
  margin: 2rem 0;
`;

export const Graphic = styled.div`
  /* background: linear-gradient(180deg, #13538A 0%, rgba(19, 83, 138, 0.20) 100%); */
  padding: 1rem;
`;