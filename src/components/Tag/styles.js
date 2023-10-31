import styled from 'styled-components';

export const Container = styled.li`
  display: inline-block;

  margin-right: 0.6rem;

  padding: 0.5rem 1.4rem;

  border-radius: 0.5rem;

  background: ${({ theme }) => theme.COLORS.ORANGE};

  font-size: ${({ theme }) => theme.FONT.SMALL};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;
