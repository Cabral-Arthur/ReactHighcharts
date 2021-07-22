import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
    --primary-font: 'Montserrat', sans-serif;
    --main-dark: #191816;
    --main-white: #FFFFFF;
    --light-gray: #F6F6F6;
    --orange-primary: #FB8B24;
    }

    * {
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    font-family: var(--primary-font);
  }

  html {
    min-height: 100%;
    background: var(--main-white);
  }

  body{
    display: flex;
    flex-direction: column;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: var(--primary-font);
    color: var(---main-dark);
    transition: color .2s ease-out;
    }

  ul {
    list-style: none;
  }

  .lineDiv{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
  }

`