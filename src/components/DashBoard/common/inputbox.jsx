import PropTypes from "prop-types";
import "./inputbox.css";

const FloatingInputLabel = ({ type, id, name, placeholder,className, ...props }) => {
  return (
    <div>
      <div className={`flex  items-center ${className}`} >
      <label className="relative cursor-pointer">
        <input 
          type={type}
          id={id}
          name={name}
          {...props}
          placeholder={placeholder}
          className="h-20 w-96 px-6 text-4xl text-black bg-white border-[#CDCDCD] border-2 rounded-lg border-opacity-50 outline-none focus:border-[#EE7203] placeholder-[#5E6366] placeholder-opacity-0 transition duration-200"
        />
        <span className="text-4xl text-[#5E6366] text-opacity-80 bg-white absolute left-5 top-5 px-1 transition duration-200 input-text">
          {placeholder}
        </span>
      </label>
    </div>
    </div>
  );
};

FloatingInputLabel.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default FloatingInputLabel;
