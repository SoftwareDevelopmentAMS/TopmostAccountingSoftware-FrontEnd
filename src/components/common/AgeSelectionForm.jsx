/* eslint-disable react/prop-types */
import { useFormik } from 'formik';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const AgeSelectionForm = ({ ModalOpen, setModalOpen, Submit }) => {
  const formik = useFormik({
    initialValues: {
      startAge: '',
      endAge: '',
    },
    validate: values => {
    const errors = {};
    const { startAge, endAge } = values;

    if (!startAge && !endAge) {
      return errors; // No error if both fields are empty
    }

    if (startAge && endAge) {
      if (isNaN(startAge) || isNaN(endAge)) {
        errors.startAge = 'Both ages must be numbers';
        errors.endAge = 'Both ages must be numbers';
      } else if (Number(endAge) < Number(startAge)) {
        errors.endAge = 'End age must be greater than start age';
      }
    } else {
      errors.startAge = 'If selecting one age, fill both fields with the same age';
      errors.endAge = 'If selecting one age, fill both fields with the same age';
    }

    return errors;
  },
    onSubmit: values => {
      Submit(values);
      setModalOpen(false);
    },
  });


  return (
    <Dialog open={ModalOpen} onClose={() => setModalOpen(false)}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Set Age Range</DialogTitle>
        <DialogContent>
        <TextField
            name="startAge"
            label="Start Age"
            value={formik.values.startAge}
            onChange={formik.handleChange}
            margin="dense"
            fullWidth
            error={formik.touched.startAge && Boolean(formik.errors.startAge)}
            helperText={formik.touched.startAge && formik.errors.startAge}
          />
          <TextField
            name="endAge"
            label="End Age"
            value={formik.values.endAge}
            onChange={formik.handleChange}
            margin="dense"
            fullWidth
            error={formik.touched.endAge && Boolean(formik.errors.endAge)}
            helperText={formik.touched.endAge && formik.errors.endAge}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">OK</Button>
          <Button onClick={() => setModalOpen(false)} color="primary">Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AgeSelectionForm;




