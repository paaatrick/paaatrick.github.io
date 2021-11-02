/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import ArtPage from '../../components/art/ArtPage'

const Heading = props => (
    <h2
        {...props}
        sx={{
            fontSize: 2,
            fontWeight: 'bold',
        }}
    />
)

const Item = ({year, title, location, ...rest}) => (
    <div {...rest}>
        <b>{year}</b> <i>{title}</i>, {location}
    </div>
)

const ArtCV = () => {
    return (
        <ArtPage>
            <Heading>Group Exhibitions</Heading>
            <Item year={2020} title='Spring Exhibition' location='Emerald Art Center, Springfield OR' />
            <Item year={2020} title='Zone 4 All' location='New Zone Gallery, Eugene OR' />
            <Heading>Education</Heading>
            <Item year={2008} title='MS Electrical Engineering' location='Purdue University, West Lafayette IN' />
            <Item year={2020} title='BS Electrical Engineering' location='Rose-Hulman Institute of Technology, Terre Haute IN' />
        </ArtPage>
    )
}

export default ArtCV