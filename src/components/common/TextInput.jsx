/* eslint-disable react/prop-types */
const TextInput = ({ type, id, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="border-b border-[#333] focus:outline-none  w-full px-3 py-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
