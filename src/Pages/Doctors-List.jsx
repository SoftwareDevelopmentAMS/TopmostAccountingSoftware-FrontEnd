import ListofOptions from "../components/DashBoard/ListofOptions"
const tableData = [
    
    {
      name: "Doctor",
      columns: ["DoctorID", "DoctorName", "Department", "Branch", "Education & Specialization", "ContactInformation"],
      data: [
        { DoctorID: 1, DoctorName: 'Deepak', Department: 'General Dentist', Branch: 'Kalamasheri', "Education & Specialization": 'Qualification', ContactInformation: 'Address, Contact Number, Email' },
        { DoctorID: 2, DoctorName: 'Smith', Department: 'Cardiologist', Branch: 'Pace', "Education & Specialization": 'Cardiology, MBBS', ContactInformation: 'Address, Contact Number, Email' },
        // Add more data as needed
      ],
    },
  ];
const DoctorsList = () => {
  return (
    <>
      <ListofOptions tableData={tableData}/>
    </>
  )
}

export default DoctorsList
