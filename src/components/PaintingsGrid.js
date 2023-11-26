/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from './Grid'
import GridItem from './GridItem'
import Painting from './Painting'
import PaintingModal from './PaintingModal'

const PaintingsGrid = () => {
  const [selectedPainting, setSelectedPainting] = useState(null);
  const data = useStaticQuery(graphql`
    query PaintingsGridQuery {
      paintings: allPaintingsYaml(
        sort: { order: DESC, fields: [date] },
        limit: 7
      ) {
        edges {
          node {
            title
            medium
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
  `)

  return (
    <Grid>
      {data.paintings.edges.map(painting => (
        <GridItem key={painting.node.title} widths={['50%', '50%', '25%']}>
          <Painting 
            painting={painting.node} 
            onClick={() => setSelectedPainting(painting.node)} 
          />
        </GridItem>
      ))}
      <GridItem widths={['50%', '50%', '25%']} sx={{fontSize: 6, fontFamily: 'heading', textAlign: 'center'}}>
        <a href='/art' sx={{color: 'text'}}>More ➯</a>
      </GridItem>
      <PaintingModal painting={selectedPainting} onClose={() => setSelectedPainting(null)} />
    </Grid>
  )
}

export default PaintingsGrid
