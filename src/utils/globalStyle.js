import { createGlobalStyle } from "styled-components"
import { colors } from "utils/colors"

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: 'Khand', sans-serif;
        font-size: 1.6rem;
        background-color: ${colors.pink};
        color: white;
    }
`

export default GlobalStyle
