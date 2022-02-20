import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => { //Create header with default title
    const onClick= () => { //Create onClick function to pass thru our button element
        window.open('http://data.census.gov/cedsci/'); //takes us to US Census site
    }

    return ( //header returns title as H1 element, and a button element
        <header className='header'>
            <h1 className='title'>{title}</h1> 
            <Button text='US Census' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Income & Poverty Data: Illinois',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
