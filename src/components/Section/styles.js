import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 5.6rem 0 2.8rem;

  > h2 {
    font-size: ${({ theme }) => theme.FONT.MEDIUM};
    font-weight: normal;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;
