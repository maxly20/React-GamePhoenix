import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background-color: #151515;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: white;
    }
    h3{
        font-size: 1.3rem;
        color: white;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: white;
    }
    a{
        text-decoration: none;
        color: white;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;