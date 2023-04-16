import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors['white/gray900']};
    text-transform: capitalize;
    margin: 2.5rem 0 1.75rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5625rem;

  div {
    border-radius: 20px;
  }

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr
  }
`;

export const Graphic = styled.div`
  background: linear-gradient(180deg, #13538A 0%, rgba(19, 83, 138, 0.20) 100%);
`;

export const Info = styled.div`
  background: linear-gradient(180deg, #22B07D 0%, rgba(6, 148, 148, 0.50) 99.73%);
  padding: 1.25rem 1.5625rem;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1030px) {
    flex-direction: row;
    justify-content: space-around;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  color: ${({ theme }) => theme.colors.white};

  div {
    display: flex;
    flex-direction: column;

    span:nth-child(1) {
      font-size: 0.9375rem;
      font-weight: 500;
    }

    span:nth-child(2) {
      font-size: 2.1875rem;
      font-weight: 600;
    }
  }

  @media (max-width: 1030px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 400px) {
    flex-direction: row;
  }
`;