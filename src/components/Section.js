/** @jsx jsx */
import { jsx } from 'theme-ui'

const Section = ({bg = 'white', ...props}) => (
  <section
    {...props}
    sx={{
      bg,
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      pb: 6,
      borderTop: '1px solid rgba(0, 0, 0, 0.15)',
    }}
  />
)

const SectionInner = props => (
  <div
    {...props}
    sx={{
      maxWidth: '1200px',
      margin: '0 auto',
      overflow: 'hidden',
      px: 4,
    }}
  />
)

const SectionTitle = props => (
  <h2
    {...props}
    sx={{
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'heading',
      textTransform: 'uppercase',
      fontSize: [4, 6],
      margin: 0,
      py: 4,
    }}
  />
)

export default ({bg, children, title, ...props}) => (
  <Section bg={bg} {...props}>
    <SectionInner>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionInner>
  </Section>
)
