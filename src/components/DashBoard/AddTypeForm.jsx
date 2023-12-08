/* eslint-disable  */
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";

const DynamicForm = ({ formFields, onSubmit, value }) => {
  const formik = useFormik({
    initialValues: Object.fromEntries(
      formFields?.fields?.map((field) => [field.name, ""])
    ),
    validate: (values) => {
      const errors = {};

      formFields?.fields?.forEach((field) => {
        const fieldName = field.name;

        // Check if the field is required
        if (field.type === "text" || field.type === "dropdown") {
          const fieldValue = values[fieldName];

          // Check if the field is empty
          if (!fieldValue) {
            errors[fieldName] = `${field.label} is required`;
          }

          // Check if the field starts with a space
          if (/^\s/.test(fieldValue)) {
            errors[fieldName] = `${field.label} should not start with a space`;
          }
        }

        // Additional validation for dropdown fields
        if (field.type === "dropdown" && field.options) {
          const validOptions = field.options;
          if (!validOptions.includes(values[fieldName])) {
            errors[fieldName] = `Invalid ${field.label}`;
          }
        }
      });

      return errors;
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  // Use useEffect to update initialValues when formFields change
  useEffect(() => {
    const newInitialValues = Object.fromEntries(
      formFields?.fields?.map((field) => [field.name, ""])
    );

    // Reset the form with the new initial values
    formik.resetForm({ values: newInitialValues });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formFields]);

  const handleReset = (formik) => {
    formik.resetForm({});
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        border: "1px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {value?.name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Form
      </Typography>
      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        {formFields?.fields?.map((field, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            {field.type === "text" && (
              <TextField
                id={field.name}
                name={field.name}
                label={field.label}
                variant="outlined"
                fullWidth
                margin="normal"
                value={formik.values[field.name] || ""}
                onChange={formik.handleChange}
                error={
                  formik.touched[field.name] &&
                  Boolean(formik.errors[field.name])
                }
                helperText={
                  formik.touched[field.name] && formik.errors[field.name]
                }
              />
            )}
            {field.type === "dropdown" && (
              <TextField
                id={field.name}
                name={field.name}
                select
                label={field.label}
                variant="outlined"
                fullWidth
                margin="normal"
                value={formik.values[field.name] || ""}
                onChange={formik.handleChange}
                error={
                  formik.touched[field.name] &&
                  Boolean(formik.errors[field.name])
                }
                helperText={
                  formik.touched[field.name] && formik.errors[field.name]
                }
              >
                {/* Assume a list of options is provided in field.options */}
                {field?.options?.map((option, optionIndex) => (
                  <MenuItem key={optionIndex} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            )}
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => handleReset(formik)}
          >
            Cancel
          </Button>
          <Button type="submit" variant="outlined" color="inherit">
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default DynamicForm;
