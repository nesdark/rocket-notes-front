import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.button`
  background: none;
  border: none;

  font-size: ${({ theme }) => theme.FONT.MEDIUM};
  color: ${({ theme }) => theme.COLORS.ORANGE};
`;
