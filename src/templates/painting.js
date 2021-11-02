/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image'
import ArtPage from '../components/art/ArtPage'

const Container = props => (
  <div
    {...props}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100vh - 128px)',
      maxWidth: '1200px'
    }}
  />
)

const Close = props => (
  <div
    {...props}
    sx={{
      fontSize: 6,
      display: 'flex',
      justifyContent: 'flex-end',
    }}
  />
)

const Details = props => (
  <div
    {...props}
    sx={{
      fontWeight: '700',
      fontSize: 0,
    }}
  />
)

const PrevNext = props => (
  <div 
    {...props}
    sx={{
      fontSize: 0,
      color: 'text'
    }}
  />
)

const PrevNextLink = ({to, ...rest}) => (
  to ? 
    <Link to={to} {...rest} /> : 
    <span sx={{color: 'textLight', textDecoration: 'line-through'}} {...rest} />
)

const Painting = ({data: { painting }, pageContext}) => {
  return (
    <ArtPage>
      <Container>
        <Close><Link to='/art/paintings'>&times;</Link></Close>
        <Img 
          fluid={painting.image.childImageSharp.fluid} 
          imgStyle={{objectFit: 'contain'}} 
          style={{minHeight: '300px'}}
        />
        <Details>
          <div>{painting.title}</div>
          <div>
            {painting.medium}
            , {new Date(painting.date).getFullYear()}
            , {painting.width} &times; {painting.height}
          </div>
        </Details>
        <PrevNext>
          <PrevNextLink to={pageContext.prevPath}>Prev</PrevNextLink> / <PrevNextLink to={pageContext.nextPath}>Next</PrevNextLink>
        </PrevNext>
      </Container>
    </ArtPage>
  )
}
  
export const query = graphql`
  query($id: String) {
    painting: paintingsJson(id: { eq: $id }) {
      id
      title
      medium
      date
      width
      height
      image {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
  
export default Painting
  