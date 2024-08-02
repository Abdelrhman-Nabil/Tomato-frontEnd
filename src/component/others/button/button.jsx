import './button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
     className={`${otherProps.disable=== true ? "disabled" : `button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

// className={`${otherProps.disabled===true?"disabled":`button-container ${BUTTON_TYPE_CLASSES[buttonType]`}}`}