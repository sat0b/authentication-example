require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `farebase Example`,
  },
  plugins: [
    `gatsby-plugin-typescript`
  ],
}
