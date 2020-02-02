module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":2000,"quality":95},
    },{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Unica One","Open Sans"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-46762133-1"},
    }]
