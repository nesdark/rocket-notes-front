import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body * {
    font-family: ${({ theme }) => theme.FONT.FAMILY};
  }

  a {
    text-decoration: none;
  }

  a, button:not(:disabled) {
    cursor: pointer;
    transition: filter 200ms;
  }

  a:hover, button:hover:not(:disabled) {
    filter: brightness(1.1);
    
  }

  /* a, button:not(:disabled)  {
    cursor: pointer;
    transition: filter 200ms;
  }

  a:hover, button:hover:not(:disabled) {
    animation: approach 200ms forwards;
  } */

  @keyframes approach {
    100% {
      box-shadow: 5px 5px 20px rgb(0 0 0 / 80%); 
    }
  }
`;
