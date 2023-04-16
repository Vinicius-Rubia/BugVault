import styled from "styled-components";

interface IProps {
  result: string;
}

export const Container = styled.div`
  h2 {
    margin: 3.75rem 0 1.75rem;
    color: ${({ theme }) => theme.colors["white/gray900"]};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 1030px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div<IProps>`
  border-radius: 20px;
  background: ${({ theme, result }) =>
    result === "true"
      ? theme.colors["gradientSuccess/gray900"]
      : theme.colors["gradientError/gray900"]};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }

  .post span {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.gray500};
    padding: 0.3125rem 0.625rem;
    border-radius: 7px;
    font-size: 0.625rem;
    font-weight: 500;
  }
`;

export const Company = styled.div`
  img {
    position: absolute;
    right: 0;
    margin: -1.875rem 1.875rem 0 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    width: 3.75rem;
    height: 3.75rem;
    padding: 0.375rem;
    object-fit: contain;
  }
`;

export const Info = styled.div<IProps>`
  padding: 1.25rem;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.white};

  p:nth-child(1) {
    margin-bottom: 1rem;
    font-size: 0.8125rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.625rem;

    span::after {
      content: "";
      display: flex;
      background-color: ${({ theme, result }) =>
        result === "true" ? theme.colors.green : theme.colors.red};
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
    }
  }

  p:nth-child(3) {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray200};
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1.25rem;
  }
`;
