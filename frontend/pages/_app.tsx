import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Router from 'next/router';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 
NProgress.configure({ showSpinner: false });
import { Head, Html } from 'next/document'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
    min-height: 100vh;

    font-family: "Poppins";

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #nprogress .bar {
    background: #543fd3 !important;
    height: 3px;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
