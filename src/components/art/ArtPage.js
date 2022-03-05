/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Page from '../Page'
import SEO from '../Seo'
import NavLink from './NavLink'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = props => (
    <div
        {...props}
        sx={{
            position: ['sticky', 'fixed'],
            top: '0',
            bottom: ['auto', '0'],
            left: ['auto', '0'],
            width: ['100%', 'sideBar'],
            minHeight: ['auto', '100vh'],
            padding: [3, 5],
            paddingRight: [3, '0'],
            boxSizing: 'border-box',
            backgroundColor: 'white',
            zIndex: 2,
            '& a': {
                color: 'inherit'
            }
        }}
    />
)

const Content = props => (
    <div
        {...props}
        sx={{
            marginLeft: theme => ['0', theme.sizes.sideBar],
            paddingY: [3, 5],
            paddingX: [3, 4, 5],
        }}
    />
)

const Name = props => (
    <h1
        {...props}
        sx={{
            fontSize: 5,
            fontFamily: 'heading',
            textTransform: 'uppercase',
            marginTop: '0',
            marginBottom: ['0', 4],
            display: 'flex',
            justifyContent: 'space-between',
        }}
    />
)

const Menu = ({open, ...rest}) => (
    <div
        {...rest}
        sx={{
            paddingTop: [4, '0'],
            display: [open ? 'block' : 'none', 'block'],
            overflow: 'hidden',
        }}
    />
)

const MenuButton = props => (
    <button
        {...props}
        sx={{
            background: 'transparent',
            border: 'none',
            display: ['block', 'none']
        }}
    />
)

const ArtPage = ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Page>
            <SEO title='ART' />
            <NavBar>
                <Name>
                    <Link to='/art'>Patrick Kalita</Link>
                    <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars} />}
                    </MenuButton>
                </Name>
                <Menu open={menuOpen}>
                    <NavLink to='/art/paintings' sx={{marginBottom: 4}}>Paintings</NavLink>
                    <NavLink to='/art/cv'>CV</NavLink>
                    <NavLink to='/art/about'>About</NavLink>
                    <NavLink to='/art/contact'>Contact</NavLink>
                </Menu>
            </NavBar>
            <Content>
                {children}
            </Content>
        </Page>
    );
}

export default ArtPage