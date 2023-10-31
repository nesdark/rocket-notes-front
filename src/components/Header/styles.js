import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.header`
  grid-area: header;

  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem 1.6rem 4rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  > img {
    width: 7rem;
    height: 7rem;
    clip-path: circle();
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    span {
      font-size: ${({ theme }) => theme.FONT.SMALL};
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: ${({ theme }) => theme.FONT.SMALL};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: 3rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
