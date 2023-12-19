import ListofOptions from "../components/DashBoard/ListofOptions"
const tableData = [
    
    {
      name: "Doctor",
      columns: ["DoctorID", "DoctorName", "Department", "Branch", "Education & Specialization", "ContactInformation","Collections"],
      data: [
        { DoctorID: 1, DoctorName: 'Deepak', Department: 'General Dentist', Branch: 'Kalamasheri', "Education & Specialization": 'Qualification', 'ContactInformation': 'Address, Contact Number, Email','Collections':25450 },
        { DoctorID: 2, DoctorName: 'Smith', Department: 'Cardiologist', Branch: 'Pace', "Education & Specialization": 'Cardiology, MBBS', 'ContactInformation': 'Address, Contact Number, Email','Collections':18750 },
        { DoctorID: 3, DoctorName: 'Deepak', Department: 'General Dentist', Branch: 'Kalamasheri', "Education & Specialization": 'Qualification', 'ContactInformation': 'Address, Contact Number, Email','Collections':25450 },
        { DoctorID: 4, DoctorName: 'Smith', Department: 'Cardiologist', Branch: 'Pace', "Education & Specialization": 'Cardiology, MBBS', 'ContactInformation': 'Address, Contact Number, Email','Collections':18750 },
        { DoctorID: 5, DoctorName: 'Deepak', Department: 'General Dentist', Branch: 'Kalamasheri', "Education & Specialization": 'Qualification', 'ContactInformation': 'Address, Contact Number, Email','Collections':25450 },
        { DoctorID: 6, DoctorName: 'Smith', Department: 'Cardiologist', Branch: 'Pace', "Education & Specialization": 'Cardiology, MBBS', 'ContactInformation': 'Address, Contact Number, Email','Collections':18750 },
        { DoctorID: 7, DoctorName: 'Deepak', Department: 'General Dentist', Branch: 'Kalamasheri', "Education & Specialization": 'Qualification', 'ContactInformation': 'Address, Contact Number, Email','Collections':25450 },
        { DoctorID: 8, DoctorName: 'Smith', Department: 'Cardiologist', Branch: 'Pace', "Education & Specialization": 'Cardiology, MBBS', 'ContactInformation': 'Address, Contact Number, Email','Collections':18750 },
        { DoctorID: 9, DoctorName: 'Deepak', Department: 'General Dentist', Branch: 'Kalamasheri', "Education & Specialization": 'Qualification', 'ContactInformation': 'Address, Contact Number, Email','Collections':25450 },
        { DoctorID: 10, DoctorName: 'Smith', Department: 'Cardiologist', Branch: 'Pace', "Education & Specialization": 'Cardiology, MBBS', 'ContactInformation': 'Address, Contact Number, Email','Collections':18750 },
        { DoctorID: 11, DoctorName: 'Deepak', Department: 'General Dentist', Branch: 'Kalamasheri', "Education & Specialization": 'Qualification', 'ContactInformation': 'Address, Contact Number, Email','Collections':25450 },
        { DoctorID: 12, DoctorName: 'Smith', Department: 'Cardiologist', Branch: 'Pace', "Education & Specialization": 'Cardiology, MBBS', 'ContactInformation': 'Address, Contact Number, Email','Collections':18750 },
        { DoctorID: 13, DoctorName: 'Deepak', Department: 'General Dentist', Branch: 'Kalamasheri', "Education & Specialization": 'Qualification', 'ContactInformation': 'Address, Contact Number, Email','Collections':25450 },
        { DoctorID: 14, DoctorName: 'Smith', Department: 'Cardiologist', Branch: 'Pace', "Education & Specialization": 'Cardiology, MBBS', 'ContactInformation': 'Address, Contact Number, Email','Collections':18750 },
        { DoctorID: 15, DoctorName: 'Deepak', Department: 'General Dentist', Branch: 'Kalamasheri', "Education & Specialization": 'Qualification', 'ContactInformation': 'Address, Contact Number, Email','Collections':25450 },
        { DoctorID: 16, DoctorName: 'Smith', Department: 'Cardiologist', Branch: 'Pace', "Education & Specialization": 'Cardiology, MBBS', 'ContactInformation': 'Address, Contact Number, Email','Collections':18750 },
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
