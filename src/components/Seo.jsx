import React from "react"
import PropTypes from "prop-types"
// for metatags
import { Helmet } from "react-helmet"
// use for location url of page web
import { useLocation } from "@reach/router"
// for use gatsby
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article,seoCustom }) => {
    // url
  const { pathname } = useLocation()
    // usestatic qwuery no puede   
  const { site } = useStaticQuery(query)
    
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata
// llenado de campos para ver si se va  a usar por default del gatsby-config o el personalizado
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    // componente que pone las metatags
    <Helmet title={seo.title} titleTemplate={seoCustom?'':titleTemplate}>

      {console.log(seoCustom)}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {/* && es un if sin else  */}
      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

// aqui despues del query le puedes poner cualquier nombre 
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`