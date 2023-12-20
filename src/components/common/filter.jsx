 import  { useState } from "react";
import Datefilter from "./Date filter button";
import SelectBox from "./SelectBox";
import AgeRangeDialog from "./AgeSelectionForm";
import { Box, Grid, Button } from "@mui/material";
import { useFormik } from 'formik';
 

const dropdownData = [
  {
    label: "Gender",
    name: "gender",
    type: "dropdown",
    options: ["Male", "Female", "Other"],
  },
  {
    label: "Doctor",
    name: "doctor",
    type: "dropdown",
    options: [
      "Dr. Smith",
      "Dr. Johnson",
      "Dr. Williams",
      "Dr. Brown",
      "Dr. Jones",
    ],
  },
  {
    label: "Procedure",
    name: "procedure",
    type: "dropdown",
    options: [
      "Routine Checkup",
      "Surgical Procedure",
      "Dental Cleaning",
      "Eye Examination",
      "Physical Therapy",
    ],
  },
  {
    label: "Patient Type",
    name: "patientType",
    type: "dropdown",
    options: ["Inpatient", "Outpatient", "Emergency", "Referral", "Revisit"],
  },
  {
    label: "Visitor",
    name: "visitor",
    type: "dropdown",
    options: ["New", "Renewed"],
  },
  {
    label: "Department",
    name: "department",
    type: "dropdown",
    options: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "Dermatology",
    ],
  },
  {
    label: "Payment Methods",
    name: "paymentMethods",
    type: "dropdown",
    options: [
      "Cash",
      "Credit Card",
      "Insurance",
      "Online Payment",
      "Bank Transfer",
    ],
  },
];


function Filter() {
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [ageModalOpen, setAgeModalOpen] = useState(false);
  const [ageRange, setAgeRange] = useState({ startAge: '', endAge: '' });

  const formik = useFormik({
    initialValues: {
      gender: "",
      doctor: "",
      procedure: "",
      patientType: "",
      visitor: "",
      department: "",
      paymentMethods: "",
    },
    onSubmit: values => {
      const formData = { ...values, ...ageRange,selectedDateRange };
      console.log("Form Data:", formData);
      // Send formData to backend
    }
  });

  const handleAgeSubmit = (ageValues) => {
    setAgeRange(ageValues);
    setAgeModalOpen(false);
  };

  const clearAgeSelection = () => {
    setAgeRange({ startAge: '', endAge: '' });
  };

  return (
    <Box className="relative container"  >
      <h1 className="uppercase text-lg font-bold">Filter</h1>
      <Grid item xs={12} container className="gap-4">
            <Datefilter
              selectedDateRange={selectedDateRange}
              setSelectedDateRange={setSelectedDateRange}
            />
            <Button variant="outlined" onClick={() => setAgeModalOpen(true)}>
              {ageRange.startAge && ageRange.endAge ? `${ageRange.startAge}-${ageRange.endAge}` : "Set Age Range"}
            </Button>
            {ageRange.startAge && ageRange.endAge && (
              <Button onClick={clearAgeSelection}>Clear Age</Button>
            )}
          </Grid>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          
          {dropdownData.map(list => (
            <Grid item xs key={list.name}>
              <SelectBox
                id={list.name}
                name={list.name}
                label={list.label}
                options={list.options}
                // onChange={formik.handleChange}
                onChange={(selectedValue) =>
                  formik.setFieldValue(list.name, selectedValue)
                }
                value={formik.values[list.name] || null} 
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <div className="flex gap-4">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button onClick={formik.handleReset} variant="outlined" color="secondary">
                Reset
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>

      <AgeRangeDialog
      ModalOpen={ageModalOpen}
      setModalOpen={setAgeModalOpen}
      Submit={handleAgeSubmit}
         
      />
    </Box>
  );
}

export default Filter;
