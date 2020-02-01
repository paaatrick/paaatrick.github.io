/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from './Grid'
import GridItem from './GridItem'
import Project from './Project'

export default () => {
  const data = useStaticQuery(graphql`
    query ProjectsGridQuery {
      projects: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "software" } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title
              url
              source
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid>
      {data.projects.edges.map(project => (
        <GridItem key={project.node.frontmatter.title} widths={['100%', '100%', '50%']}>
          <Project project={project.node.frontmatter} />
        </GridItem>
      ))}
    </Grid>
  )
}
