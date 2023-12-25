/* eslint-disable react/prop-types */
import { useState } from "react";
import DynamicForm from "./AddTypeForm";


const   AddOptions = ({buttonlist}) => {
  const [selectedButton, setSelectedButton] = useState(buttonlist[0]);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
  };
  return (
    <div className="m-auto w-auto">
      <div className={` ${(buttonlist.length > 1) ? " topbar m-5 p-4 bg-white flex  flex-wrap justify-center " : "hidden" }`}>
        {buttonlist.map((button, i) =>
          selectedButton?.name === button.name ? (
            <button
              key={i + button.name}
              className={`shadow-xl w-40 m-2 px-4 py-2 text-[14px] font-Poppins bg-[#0000001F] border border-[##0000001F] rounded-lg `}
              onClick={() => handleButtonClick(button)}
            >
              {button.name}
            </button>
          ) : (
            <button
              key={i + button.name}
              className={`shadow-xl w-40 m-2 px-4 py-2 text-[14px] font-Poppins border border-[##0000001F] rounded-lg `}
              onClick={() => handleButtonClick(button)}
            >
              {button.name}
            </button>
          )
        )}
      </div>
      <div className="m-5 p-4 bg-white w-auto">
        {selectedButton && (
          <DynamicForm
            formFields={{
              headText: selectedButton.name,
              subtitle: "Subtitle to describe the usage of form",
              fields: selectedButton.fields,
            }}
            onSubmit={handleFormSubmit} 
            value={selectedButton}
          />
        )}
      </div>
    </div>
  );
};

export default AddOptions;
