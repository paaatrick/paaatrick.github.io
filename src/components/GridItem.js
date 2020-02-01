/** @jsx jsx */
import { jsx } from 'theme-ui'

const GridItem = ({widths, ...props}) => (
  <div
    {...props}
    sx={{
      flexBasis: widths,
      position: 'relative',
      boxSizing: 'border-box',
      padding: 3,
    }}
  />
)

export default GridItem