import Addon from "../Components/common/AddOptions"
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
const AddOn = () => {
  return (
    <>
      <Addon buttonlist={buttonlist}/>
    </>
  )
}

export default AddOn
