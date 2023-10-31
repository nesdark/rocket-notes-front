import styled from 'styled-components';
import theme from '../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    display: flex;
    flex-direction: column;

    max-width: 55rem;
    height: 100%;

    margin: 6.5rem auto;

    overflow-y: auto;

    > button:first-child {
      align-self: end;
    }

    > h1 {
      font-size: ${({ theme }) => theme.FONT.EXTRA_LARGE};
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-block: 6.4rem 1.6rem;
    }

    > p {
      font-size: ${({ theme }) => theme.FONT.MEDIUM};
      text-align: justify;
    }
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  font-size: ${({ theme }) => theme.FONT.MEDIUM};

  a {
    color: white;
  }
`;
