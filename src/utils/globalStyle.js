import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: background-color ${({ transition }) =>
          transition && "0.5s"};
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: 'Khand', sans-serif;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.light};
        color: white;
        
    }
`

export default GlobalStyle
