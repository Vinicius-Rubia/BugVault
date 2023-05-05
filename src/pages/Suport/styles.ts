import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to right, #353341 75%, #57A393 25%);
  margin: 2rem 0;
  border-radius: 7px;
  padding: 5rem;
  display: flex;
  justify-content: space-between;
  gap: 3.125rem;
  color: #fff;

  img {
    max-width: 25rem;
    object-fit: cover;
    max-height: 43.75rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.7rem;
  }

  p {
    font-size: 0.8125rem;
    margin: 1rem 0 2rem;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
  width: 100%;

  input {
    height: 46px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0 1rem;
    color: #fff;

    &::placeholder {
      color: #999999;
    }
  }

  textarea {
    background: transparent;
    padding: 1rem;
    color: #fff;
    outline: none;
    resize: none;

    &::placeholder {
      color: #999999;
    }
  }

  button {
    color: #fff;
    background-color: #57a393;
    height: 46px;
    transition: 0.2s;
    margin-bottom: 2rem;

    &:hover {
      background-color: #3A665F;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;
`;