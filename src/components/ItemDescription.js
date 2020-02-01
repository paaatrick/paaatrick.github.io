/** @jsx jsx */
import { jsx } from 'theme-ui'

const ItemDescription = ({title, description, dark}) => (
  <div
    sx={{
      backgroundColor: dark ? 'bgDark' : 'bgLight',
      color: dark ? 'textLight' : 'text',
      padding: 3,
      boxSizing: 'border-box',
      '& a': {
        color: dark ? 'textLight' : 'text',
      }
    }}
  >
    <div
      sx={{
        fontSize: [2, 3],
        fontWeight: 'bold',
        marginBottom: 1,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        py: 2,
      }}
    >
      {title}
    </div>
    <i>{description}</i>
  </div>
)

export default ItemDescription
