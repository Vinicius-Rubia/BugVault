import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors['white/gray900']};
    text-transform: capitalize;
    margin: 2.5rem 0 1.75rem;
  }
`;
