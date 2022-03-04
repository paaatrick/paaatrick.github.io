/** @jsx jsx */
import { jsx } from 'theme-ui'
import ArtPage from '../../components/art/ArtPage';

const Prose = props => (
    <div 
        {...props}
        sx={{
            maxWidth: 'prose'
        }}
    />
)

const ArtAbout = () => {
    return (
        <ArtPage>
            <Prose>
                <p>
                    I am a self-taught painter living in Springfield, Oregon. 
                </p>
                <p>
                    Knots, links, and braids have been used as decorative elements by many cultures 
                    across centuries. These forms have been analyzed and systematically categorized 
                    by mathematicians. I make paintings which elevate these fascinating forms to the main 
                    subject matter&mdash;sometimes meditatively symmetric, other times complex and puzzling. 
                </p>
                <p>
                    My compositions utilize the precise drawing techniques of ancient Greek geometry, 
                    Islamic geometric design, and technical drafting. However the end result is bold, playful, 
                    and occasionally disorienting.
                </p>  
            </Prose>  
        </ArtPage>
    )
}

export default ArtAbout