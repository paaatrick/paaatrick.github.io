/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

const PaintingButton = props => (
  <button
    {...props}
    sx={{
      width: '100%',
      padding: '0',
      border: '0',
      cursor: 'pointer',
      paddingTop: '100%',
      position: 'relative',
      transition: 'transform 100ms linear',
      boxShadow: 1,
    }}
  />
)

const PaintingImage = props => (
  <Img
    {...props}
    sx={{
      position: 'absolute !important', 
      top: '0', 
      left: '0', 
      right: '0', 
      bottom: '0',
    }}
  />
)

const Painting = ({painting, onClick}) => {
  return (
    <PaintingButton onClick={onClick}>
      <PaintingImage fluid={painting.image.childImageSharp.fluid} />
    </PaintingButton>
  )
}

export default Painting;
