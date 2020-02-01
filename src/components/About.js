/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutContainer = props => (
  <div 
    {...props} 
    sx={{
      display: 'flex',
      flexDirection: ['column', 'row'],
      alignItems: 'center',
    }} />
)

const PortraitImage = props => (
  <Img
    {...props}
    sx={{
      borderRadius: '9999px', 
      mr: ['auto', 4],
      ml: ['auto', 0],
      mb: [4, 0], 
      flexShrink: 0,
    }}
  />
)

const AboutText = props => (
  <div
    {...props}
    sx={{
      mb: 4,
      maxWidth: '40em',
    }}
  />
)

const SocialIcon = props => (
  <FontAwesomeIcon
    {...props}
    sx={{
      fontSize: 4,
      mr: 2,
      color: 'text'
    }}
  />
)

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      portrait: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <AboutContainer>
      <PortraitImage fixed={data.portrait.childImageSharp.fixed} />
      <div>
        <AboutText>
          Hello sharks, my name is Patrick. I work as a software engineer at the 
          University of Oregon supporting genetics research. Otherwise I'm painting,
          riding bikes or working on them.
        </AboutText>
        <div>
          <a href="mailto:patrick.kalita@gmail.com"><SocialIcon icon={faEnvelope} /></a>
          <a href="https://github.com/paaatrick"><SocialIcon icon={faGithub} /></a>
        </div>
      </div>
    </AboutContainer>
  )
}

export default About
