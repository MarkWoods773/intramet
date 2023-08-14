/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Intramet",
    // verificar siempre el dominio
    siteUrl: `https://intramet.com.pe/`,
    titleTemplate: "Intramet - %s - Carrocerías para Buses en Perú, Venta de Buses Nuevos, Fabrica de Carrocerías",
    description:
    `Somos una empresa familiar, la segunda generación de carroceros que heredó el conocimiento de nuestro fundador Agripino Coyuri quien desde el año 1967 se desempeñó en el sector automotriz para el transporte masivo de pasajeros.
    Hoy en día somos la fábrica de carrocerías líder en el sur del Perú.`,
    // verificar siempre el dominio
    url: "https://intramet.com.pe/", // No trailing slash allowed!
    image: "intramet.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ]
}
