/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Header = props => (
  <header
    {...props}
    sx={{
      height: '100vh',
      overflow: 'hidden',
      position: 'sticky',
      top: '0',
      zIndex: '-1',
    }}
  />
)

const HeaderImage = props => (
  <Img
    {...props}
    sx={{
      height: '100vh',
      overflow: 'hidden',
    }}
  />
)

const HeaderTitle = props => (
  <h1
    {...props}
    sx={{
      fontSize: [5, 7],
      fontFamily: 'heading',
      fontWeight: 'heading',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxSizing: 'border-box',
      bg: 'accent',
      color: 'heading',
      boxShadow: 1,
      margin: 0,
      px: [3, 5],
      py: [2, 4], 
    }}
  />
)

export default () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      },
      image: file(relativePath: { eq: "IMG_20180622_134858.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Header>
      <HeaderImage alt='header background' fluid={data.image.childImageSharp.fluid} />
      <HeaderTitle>{data.site.siteMetadata.title}</HeaderTitle>
    </Header>
  )
}
