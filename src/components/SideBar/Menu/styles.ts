import styled from "styled-components";

interface MenuProps {
  showMenu: boolean;
}

export const Container = styled.div<MenuProps>`
  margin: 3.125rem 0;
  display: grid;
  gap: 3rem;
  transition: 0.2s ease-in-out;
  overflow: auto;

  div {
    &::after {
      content: "";
      display: block;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    }

    h3 {
      font-size: 0.6875rem;
      letter-spacing: 1.5px;
      color: ${({ theme }) => theme.colors.gray};
      margin-bottom: 1.5rem;
      text-transform: uppercase;
    }

    ul {
      li {
        list-style: none;
        margin-bottom: 2rem;

        &:hover {
          a {
            span {
              color: ${({ theme }) => theme.colors.green200};
              font-weight: 600;
            }

            svg {
              color: ${({ theme}) => theme.colors.white};
              background: ${({ theme }) => theme.colors.green900};
            }
          }
        }

        a {
          display: flex;
          align-items: center;
          gap: 1rem;

          span {
            font-size: 0.875rem;
            color: ${({ theme }) => theme.colors.gray};
            transition: 0.2s;
          }

          svg {
            color: ${({ theme }) => theme.colors['white/gray900']};
            background: ${({ theme }) => theme.colors["gray700/white200"]};
            padding: 0.5rem;
            border-radius: 12px;
            transition: 0.2s;
          }
        }
      }
    }
  }

  @media (max-width: 1260px) {
    position: fixed;
    top: 0;
    right: ${({ showMenu }) => (showMenu ? "0" : "-26rem")};
    padding: 2rem;
    bottom: 0;
    z-index: 1;
    background: ${({ theme}) => theme.colors.primary};
    margin: 0;
  }
`;

export const Companies = styled.div``;

export const Categories = styled.div``;