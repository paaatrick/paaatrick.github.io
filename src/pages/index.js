/** @jsx jsx */
import { jsx } from 'theme-ui'
import SEO from '../components/Seo'
import Section from '../components/Section'
import ProjectsGrid from '../components/ProjectsGrid'
import PaintingsGrid from '../components/PaintingsGrid'
import Header from '../components/Header'
import About from '../components/About'

import 'normalize.css'

const IndexPage = () => {

  return (
    <div sx={{fontFamily: 'body'}}>
      <SEO />

      <Header />

      <Section bg='#8CA9C9' title='Software' id='software'>
        <ProjectsGrid />
      </Section>

      <Section bg='#618E4F' title='Painting' id='painting'>
        <PaintingsGrid />
      </Section>

      <Section bg='#DABB9C' title='About' id='about'>
        <About />
      </Section>
    </div>
  )
}

export default IndexPage
