import React, { useEffect } from "react"
// animaciones
import AOS from "aos"
import "aos/dist/aos.css"
import { Normalize } from "../styles/normalize"
import { GlobalStyle } from "../styles/layoutcss"
import { ThemeProvider } from "styled-components"
import { Theme } from "../styles/layoutcss"
import SimpleReactLightbox from "simple-react-lightbox"
import Header from "./header"
import Footer from "./footer"
import SEO from "./Seo"
// console.log(GlobalStyle)
const Layout = props => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <ThemeProvider theme={Theme}>
      <>
        <SEO  
          image={props.img || null}
          title={props.title || null}
          description={props.description || null}
          seoCustom={props.seoCustom || null}
        ></SEO>
        <Normalize />
        <GlobalStyle />
        <Header />
        <div className="page">
          <SimpleReactLightbox>{props.children}</SimpleReactLightbox>
        </div>
        {props.index ? null : <Footer />}
      </>
    </ThemeProvider>
  )
}
export default Layout
