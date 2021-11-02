/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import slugify from '@sindresorhus/slugify'
import {Masonry} from 'masonic'
import Img from 'gatsby-image'
import ArtPage from '../../components/art/ArtPage'

const MasonryCard = ({data: {node: painting}}) => (
  <Link to={`/art/paintings/${slugify(painting.title)}`} key={painting.id}>
    <Img 
      fluid={painting.image.childImageSharp.fluid} 
      imgStyle={{objectFit: 'contain', objectPosition: 'center top'}}
    />
  </Link>
)

const PaintingThumbnails = ({ data }) => {
  const { theme } = useThemeUI();
  return (
    <ArtPage>
      <Masonry 
        items={data.paintings.edges}
        render={MasonryCard}
        columnGutter={theme.space[4]}
      />
    </ArtPage>
  )
}
  
export const pageQuery = graphql`
  query PaintingThumbnails {
    paintings: allPaintingsJson(
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