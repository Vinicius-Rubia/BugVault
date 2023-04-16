import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.primary};
    -webkit-font-smoothing: antialiased;
  }

  a {
    transition: 0.2s;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  svg, button {
    cursor: pointer;
  }

  button, input {
    border: none;
    background-color: transparent;
    outline: none;
  }

  body, input, textarea, button {
    font: 400 1rem "Poppins", sans-serif;
  }

  #layout {
    display: flex;
    min-height: 100vh;

    #main {
      flex: 1;
      padding: 1.75rem 3.75rem 4.25rem 4.6875rem;
      max-width: 1440px;
      margin: 0 auto;
    }
  }

  @media (max-width: 1260px) {
    #layout {
      display: block;

      #main {
        padding: 1.75rem 2rem 4.25rem 2rem;
      }
    }
  }

  @media (max-width: 580px) {
    #layout {
      #main {
        padding: 1.75rem 1rem 4.25rem;
      }
    }
  }
`