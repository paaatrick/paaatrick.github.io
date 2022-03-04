/** @jsx jsx */
import { jsx } from 'theme-ui'

import 'normalize.css'

const Page = props => (
    <div 
        {...props}
        sx={{
            fontSize: 2,
            fontFamily: 'body',
            lineHeight: 'body',
            color: 'text',
            '& a': {
                textDecoration: 'none',
            },
            minHeight: '100vh'
        }}
    />
)

export default Page
