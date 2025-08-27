import { createGlobalStyle } from 'styled-components'

export const cores = {
    branco: '#eee',
    preto: '#111',
    cinza: '#333',
    cinzaClaro: '#A3A3A3',
    verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('../assets/fonts/Roboto/Roboto-Regular.ttf') fromat('truetype');
        font-weight: 400;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
        text-decoration: none
    }

    body {
        background-color: ${cores.preto};
        color: ${cores.branco};
        padding-top: 40px;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`
