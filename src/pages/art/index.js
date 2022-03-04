/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from "gatsby"
import ArtPage from '../../components/art/ArtPage';
import Img from 'gatsby-image'

const ArtIndex = () => {
    const data = useStaticQuery(graphql`
        query ArtHomeImageQuery {
            image: file(relativePath: { eq: "PXL_20220303_223751289.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <ArtPage>
            <Img 
                fluid={data.image.childImageSharp.fluid} 
                imgStyle={{objectFit: 'contain'}} 
                sx={{
                    maxHeight: theme => `calc(100vh - ${2 * theme.space[5]}px)`,
                }}
            />
        </ArtPage>
    )
}

export default ArtIndex