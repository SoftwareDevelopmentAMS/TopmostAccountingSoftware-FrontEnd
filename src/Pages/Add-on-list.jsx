import ListOptions from "../components/common/ListofOptions"
const tableData = [
  {
    name: "Branch",
    columns: ["BranchID", "BranchName", "CreatedBy", "Date", "Time"],
    data: [
      { BranchID: 1, BranchName: 'Kalamasheri', CreatedBy: 'user 1', Date: '12/7/2023', Time: '10:00:00' },
      { BranchID: 2, BranchName: 'vedimara', CreatedBy: 'user 2', Date: '12/8/2023', Time: '11:30:00' },
      { BranchID: 3, BranchName: 'north paravur', CreatedBy: 'user 3', Date: '12/9/2023', Time: '09:45:00' },
    ],
  },
   
  {
    name: "Patient Type",
    columns: ["SlNo", "PatientType", "CreatedBy", "Date", "Time"],
    data: [
      { SlNo: 1, PatientType: 'Emergency', CreatedBy: 'user 1', Date: '12/7/2023', Time: '10:00:00' },
      { SlNo: 2, PatientType: 'Regular', CreatedBy: 'user 2', Date: '12/8/2023', Time: '11:30:00' },
      // Add more data as needed
    ],
  },
  {
    name: "Amount Method",
    columns: ["SlNo", "AmountType", "CreatedBy", "Date", "Time"],
    data: [
      { SlNo: 1, AmountType: 'Cash', CreatedBy: 'user 1', Date: '12/7/2023', Time: '10:00:00' },
      { SlNo: 2, AmountType: 'Credit Card', CreatedBy: 'user 2', Date: '12/8/2023', Time: '11:30:00' },
      // Add more data as needed
    ],
  },
  {
    name: "Procedure",
    columns: ["SlNo", "Procedure", "Branch", "Department", "CreatedBy", "Date"],
    data: [
      { SlNo: 1, Procedure: 'Dental Cleaning', Branch: 'Kalamasheri', Department: 'Dentistry', CreatedBy: 'user 1', Date: '12/7/2023' },
      { SlNo: 2, Procedure: 'Cardiac Catheterization', Branch: 'Pace', Department: 'Cardiology', CreatedBy: 'user 2', Date: '12/8/2023' },
      // Add more data as needed
    ],
  },
  {
    name: "Gender",
    columns: ["SlNo", "GenderType", "CreatedBy", "Date", "Time"],
    data: [
      { SlNo: 1, GenderType: 'Male', CreatedBy: 'user 1', Date: '12/7/2023', Time: '10:00:00' },
      { SlNo: 2, GenderType: 'Female', CreatedBy: 'user 2', Date: '12/8/2023', Time: '11:30:00' },
      // Add more data as needed
    ],
  },
  {
    name: "Department",
    columns: ["SlNo", "Department", "Branch", "CreatedBy", "Date", "Time"],
    data: [
      { SlNo: 1, Department: 'Cardiology', Branch: 'Kalamasheri', CreatedBy: 'user 1', Date: '12/7/2023', Time: '10:00:00' },
      { SlNo: 2, Department: 'Dentistry', Branch: 'Pace', CreatedBy: 'user 2', Date: '12/8/2023', Time: '11:30:00' },
      // Add more data as needed
    ],
  },
  {
    name: "Visitor",
    columns: ["SlNo", "VisitingType", "CreatedBy", "Date", "Time"],
    data: [
      { SlNo: 1, VisitingType: 'New Patient', CreatedBy: 'user 1', Date: '12/7/2023', Time: '10:00:00' },
      { SlNo: 2, VisitingType: 'Returning Patient', CreatedBy: 'user 2', Date: '12/8/2023', Time: '11:30:00' },
      // Add more data as needed
    ],
  },
];
const AddOnList = () => {
  return (
    <>
      <ListOptions tableData={tableData}/>
    </>
  )
}

export default AddOnList
