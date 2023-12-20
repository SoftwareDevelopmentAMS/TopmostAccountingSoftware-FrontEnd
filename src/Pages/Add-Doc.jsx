import Addon from "../Components/common/AddOptions";
const buttonlist = [
  {
    name: "Doctor",
    fields: [
      { name: "Doctor Name", label: "Doctor Name", type: "text" },
      { name: "Specialization", label: "Specialization", type: "text" },
      { name: "Address", label: "Address", type: "text" },
      {
          name: "department",
          label: "Department",
          type: "dropdown",
          options: ["option1", "option2"],
        },
        { name: "phoneNumber", label: "Contact Number", type: "number" },
        { name: "email", label: "email", type: "text" },
    ],
  },
];

const AddDoc = () => {
  return (
    <>
      <Addon buttonlist={buttonlist} />
    </>
  );
};

export default AddDoc;
