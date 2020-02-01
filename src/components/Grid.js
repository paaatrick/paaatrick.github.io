/** @jsx jsx */
import { jsx } from 'theme-ui'

const Grid = ({children}) => (
  <div
    sx={{
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: -3,
    }}  
  >
    {children}
  </div>
)

export default Grid;
