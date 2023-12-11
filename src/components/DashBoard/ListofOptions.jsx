import { useState } from "react";
import Table from "../DashBoard/common/Table"
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
    name: "Doctor",
    columns: ["DoctorID", "DoctorName", "Department", "Branch", "Education & Specialization", "ContactInformation"],
    data: [
      { DoctorID: 1, DoctorName: 'Deepak', Department: 'General Dentist', Branch: 'Kalamasheri', "Education & Specialization": 'Qualification', ContactInformation: 'Address, Contact Number, Email' },
      { DoctorID: 2, DoctorName: 'Smith', Department: 'Cardiologist', Branch: 'Pace', "Education & Specialization": 'Cardiology, MBBS', ContactInformation: 'Address, Contact Number, Email' },
      // Add more data as needed
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




const ListofOptions = () => {
  const [selectedTable, setSelectedTable] = useState("Branch");

  const handleTableClick = (tableName) => {
    setSelectedTable(tableName);
  };
  return (
    <div className="m-auto w-auto">
      <h2 className="text-xl font-Inter text-center font-bold uppercase tracking-normal">Patient Invoice</h2>
      <div className="topbar m-5 p-4 bg-white flex flex-wrap justify-center">
        {tableData.map((item, i) => (
          <button
            key={i + item.name}
            onClick={() => handleTableClick(item.name)}
            className={`${selectedTable == item.name ? 'bg-slate-300':''} shadow-xl w-40 m-2 px-4 py-2 text-[14px] font-Poppins border border-[##0000001F] rounded-lg `}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="m-5 p-4 bg-white w-auto">
        {selectedTable && (
          <Table columns={tableData.find((item) => item.name === selectedTable).columns}
          data={tableData.find((item) => item.name === selectedTable).data}/>
        )}
      </div>
    </div>
  )
}

export default ListofOptions
