import styled from 'styled-components';

export const Container = styled.aside`
  padding: 2.375rem 2rem;

  h2 {
    color: ${({ theme}) => theme.colors['white/gray900']};
  }

  @media (max-width: 1260px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0;
    gap: 2rem;
  }

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

export const ChangeTheme = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  color: ${({ theme}) => theme.colors.gray};

  @media (max-width: 400px) {
    width: 100%;
    align-items: end;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

export const MenuMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1260px) {
    svg {
      display: none;
    }
  }

  svg {
    color: ${({ theme }) => theme.colors['white/gray900']};
  }
`;