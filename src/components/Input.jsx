import PropTypes from "prop-types";

function Input({ type, value, placeholder, onChange }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-dark-green"
      onChange={event => onChange(event)}
    />
  );
}

Input.propTypes = {
  type: "text",
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Input;
