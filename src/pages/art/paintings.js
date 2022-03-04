/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import slugify from '@sindresorhus/slugify'
import Img from 'gatsby-image'
import ArtPage from '../../components/art/ArtPage'


const PaintingThumbnails = ({ data }) => {
  const { theme } = useThemeUI();
  return (
    <ArtPage>
      <div 
        sx={{
          display: 'grid',
          gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)'],
          gap: [6, 4, 4, 4, 6],
          gridAutoRows: 'minmax(100px, auto)',
          alignItems: 'center'
        }}
      >
        {data.paintings.edges.map(({ node: painting }) => (
          <Link to={`/art/paintings/${slugify(painting.title)}`} key={painting.id}>
            <Img 
              fluid={painting.image.childImageSharp.fluid} 
              imgStyle={{objectFit: 'contain', objectPosition: 'center top'}}
              sx={{
                boxShadow: 1,
                transition: 'transform 100ms',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            />
          </Link>
        ))}
      </div>
    </ArtPage>
  )
}
  
export const pageQuery = graphql`
  query PaintingThumbnails {
    paintings: allPaintingsYaml(
      sort: { order: ASC, fields: [date] }
      ) {
        edges {
          node {
            id
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 95) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
  }
`
    
export default PaintingThumbnails