const path = require('path')
const slugify = require('@sindresorhus/slugify');

function getPaintingPath(node) {
  return `/art/paintings/${slugify(node.title)}`
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query AllPaintings {
      paintings: allPaintingsYaml(sort: {order: ASC, fields: [date]}) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);

  const template = path.resolve(`src/templates/painting.js`);
  const paintings = queryResults.data.paintings.edges;
  paintings.forEach(({node}, idx) => {
    createPage({
      path: getPaintingPath(node),
      component: template,
      context: {
        id: node.id,
        prevPath: (idx === 0) ? null : getPaintingPath(paintings[idx - 1].node),
        nextPath: (idx === paintings.length - 1) ? null : getPaintingPath(paintings[idx + 1].node),
      }
    });
  });
};
