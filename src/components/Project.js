/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import ItemDescription from './ItemDescription';

const Project = props => (
  <div
    {...props}
    sx={{
      borderRadius: 1,
      overflow: 'hidden', 
      boxShadow: 1,
    }}
  />
)

const ProjectCover = props => (
  <div
    {...props}
    sx={{
      height: ['300px', '400px'],
      position: 'relative',
      overflow: 'hidden',
    }}
  />
)

const ProjectImage = props => (
  <Img
    {...props}
    sx={{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      transition: 'transform 100ms linear',
      '&:hover': {
        transform: 'scale(1.05) translateY(-9px)',
      }
    }}
  />
)

export default ({project}) => (
  <Project>
    <ProjectCover>
      <a href={project.url}>
        {project.cover && <ProjectImage fluid={project.cover.childImageSharp.fluid} objectFit='cover' />}
      </a>
    </ProjectCover>
    <ItemDescription 
      title={
        <Fragment>
          {project.title}
          <a href={project.source}><FontAwesomeIcon icon={faGitAlt} /></a>
        </Fragment>
      }
      description={project.tags && project.tags.join(', ')}
    />
  </Project>
)
