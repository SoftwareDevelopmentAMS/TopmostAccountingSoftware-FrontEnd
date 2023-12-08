import { useState } from "react";
import DynamicForm from "./AddTypeForm";
const buttonlist = [
  {
    name: "Branch",
    fields: [{ name: "branchName", label: "Branch Name", type: "text" }],
  },

  {
    name: "Patiant type",
    fields: [{ name: "patientType", label: "Patient Type", type: "text" }],
  },
  {
    name: "Amount Method",
    fields: [{ name: "amountType", label: "Amount Type", type: "text" }],
  },
  {
    name: "Procedure",
    fields: [
      { name: "procedure", label: "Procedure", type: "text" },
      {
        name: "department",
        label: "Department",
        type: "dropdown",
        options: ["option1", "option2"],
      },
    ],
  },
  {
    name: "Gender",
    fields: [{ name: "genderType", label: "Gender Type", type: "text" }],
  },
  {
    name: "Department",
    fields: [
      { name: "departmentName", label: "Department Name", type: "text" },
      {
        name: "branch",
        label: "Branch",
        type: "dropdown",
        options: ["option1", "option2"],
      },
    ],
  },
  {
    name: "Visitor",
    fields: [{ name: "visitingType", label: "Visiting Type", type: "text" }],
  },
];

const AddOptions = () => {
  const [selectedButton, setSelectedButton] = useState({
    name: "Branch",
    fields: [{ name: "branchName", label: "Branch Name", type: "text" }],
  });

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
  };

  return (
    <div className="m-auto w-auto">
      <div className="topbar m-5 p-4 bg-white flex flex-wrap justify-center">
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
