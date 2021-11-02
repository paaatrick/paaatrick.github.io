/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useLocation } from "@reach/router"

const NavLink = ({to, ...rest}) => {
    const location = useLocation()

    return (
        <Link
            {...rest}
            to={to}
            sx={{
                display: 'block',
                color: theme => location.pathname.startsWith(to) ? `${theme.colors.accent} !important` : undefined
            }}
        />
    )
}

export default NavLink
