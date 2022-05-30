import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
        <h2>{title}</h2>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// define the type and other requirements of props 
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header