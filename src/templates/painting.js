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
      maxWidth: '1000px',
      margin: '0 auto',
    }}
  />
)

const Details = props => (
  <div
    {...props}
    sx={{
      fontSize: 1,
    }}
  />
)

const PrevNext = props => (
  <div 
    {...props}
    sx={{
      fontSize: 1,
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
        <Img 
          fluid={painting.image.childImageSharp.fluid} 
          imgStyle={{objectFit: 'contain'}} 
          sx={{marginBottom: 2, minHeight: '300px'}}
        />
        <Details>
          <div sx={{fontWeight: 'bold'}}>{painting.title}</div>
          <div>
            {painting.medium}
            , {new Date(painting.date).getFullYear()}
            , {painting.width} in &times; {painting.height} in
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
    painting: paintingsYaml(id: { eq: $id }) {
      id
      title
      medium
      date
      width
      height
      image {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
  
export default Painting
  