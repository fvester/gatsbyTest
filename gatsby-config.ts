import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `First site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-transformer-remark", 
  //   {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "pages",
  //     "path": "./src/pages/"
  //   },
  //   __key: "pages"
  // }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "contents",
      "path": "./src/contents"
    },
  },
  {
    resolve: "gatsby-plugin-alias-imports",
    options: {
      alias: {
        "@src": "src",
        "@components": "src/components",
        "@style": "src/style",
      }
    }
  },
  'gatsby-transformer-remark',
  ],
};

export default config;
