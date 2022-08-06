/** @jsx jsx */
import { jsx } from 'theme-ui'
import ArtPage from '../../components/art/ArtPage'

const Heading = props => (
    <h2
        {...props}
        sx={{
            fontSize: 2,
            fontWeight: 'bold',
            marginBottom: 2,
        }}
    />
)

const Item = ({year, title, location, ...rest}) => (
    <div {...rest}>
        <b>{year}</b> <i>{title}</i>, {location}
    </div>
)

const Section = props => (
    <section 
        {...props} 
        sx={{
            marginBottom: 4
        }} 
    />
)

const ArtCV = () => {
    return (
        <ArtPage>
            <Section>
                <Heading>Group Exhibitions</Heading>
                <Item year={2022} title='Home Team: World Stage' location='Maude Kerns Art Center, Eugene OR' />
                <Item year={2020} title='Spring Exhibition' location='Emerald Art Center, Springfield OR' />
                <Item year={2020} title='Zone 4 All' location='New Zone Gallery, Eugene OR' />
            </Section>
            <Section>
                <Heading>Education</Heading>
                <Item year={2008} title='MS Electrical Engineering' location='Purdue University, West Lafayette IN' />
                <Item year={2006} title='BS Electrical Engineering' location='Rose-Hulman Institute of Technology, Terre Haute IN' />
            </Section>
        </ArtPage>
    )
}

export default ArtCV