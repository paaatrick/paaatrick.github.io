import React from 'react'
import { useThemeUI } from 'theme-ui'
import ReactModal from 'react-modal'
import Img from 'gatsby-image'
import ItemDescription from './ItemDescription'

const imageWrapperStyle = {
  flexGrow: '1',
}

const PaintingModal = ({painting, onClose}) => {
  ReactModal.setAppElement('#___gatsby')
  const { theme } = useThemeUI()
  
  const modalStyle = {
    overlay: {
      fontFamily: theme.fonts.body,
      backgroundColor: theme.colors.modalOverlay,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      position: 'static',
      border: 'none',
      background: 'transparent',
      borderRadius: '0px',
      padding: '0',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      width: '1000px',
      maxWidth: '100%',
      maxHeight: '90vh',
    }
  }

  const imageStyle = {
    objectFit: 'contain',
    backgroundColor: theme.colors.bgDark,
  }
  
  return (
    <ReactModal isOpen={!!painting} onRequestClose={onClose} style={modalStyle}>
      {painting && <React.Fragment>
        <Img fluid={painting.cover.childImageSharp.fluid} style={imageWrapperStyle} imgStyle={imageStyle} />
        <ItemDescription title={painting.title} description={painting.medium} dark />
      </React.Fragment>}
    </ReactModal>
  )
}

export default PaintingModal;
