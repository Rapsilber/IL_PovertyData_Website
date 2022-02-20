import PropTypes from 'prop-types'

const Button = ({ text, onClick, onMouseOver }) => { //create constant for button with attributes
    return ( //returns these attributes to render (color, text, onClick function)
        <button //button has class 'btn' from the css sheet to style it
            className='btn'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button
