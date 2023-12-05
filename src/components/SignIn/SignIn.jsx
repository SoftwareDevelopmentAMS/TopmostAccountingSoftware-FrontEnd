/* eslint-disable */
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const SignIn = () => {
  // useFormik is a hook for handling form state and form submission
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordVisible: false, // Added state for password visibility
    },
    validate: (values) => {
      const errors = {};

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.email) {
        errors.email = 'Required';
      } else if (!emailRegex.test(values.email)) {
        errors.email = 'Invalid email format';
      }
      
      // Validate password
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 5) {
        errors.password = 'Password must be at least 5 characters';
      }

      return errors;
    },
    onSubmit: (values) => {
      // Add your authentication logic here
      console.log("Form submitted:", values);
    },
  });

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    formik.setFieldValue("passwordVisible", !formik.values.passwordVisible);
  };

  return (
    <div className="h-full flex items-center justify-center ">
      <div className="max-w-md w-full mx-4 bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-center uppercase font-Inter text-3xl font-bold mb-6">
          Sign In
        </h1>
        <p className="text-base md:text-[22px] text-center max-w-xs m-auto font-semibold text-black mb-6">
          Hey, enter your details to log in to your account
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Email input field */}
          <input
            type="text"
            className="w-full border py-2 px-4 rounded-md outline-none"
            placeholder="Enter Email / Phone No"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {/* Display email validation error if any */}
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}

          {/* Password input field with toggle button */}
          <div className="relative">
            <input
              type={formik.values.passwordVisible ? "text" : "password"}
              className="w-full border py-2 px-4 rounded-md pr-10 outline-none"
              placeholder="Password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-black cursor-pointer"
            >
              {formik.values.passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          {/* Display password validation error if any */}
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}

          {/* Forgot password link */}
          <div className="text-right">
            <a href="#" className="text-[#EE7203] text-sm ">
              Forgot your password?!
            </a>
          </div>
          
          {/* Sign In button */}
          <button
            type="submit"
            className="w-full bg-[#EE7203] text-white py-2 px-4 rounded-md"
          >
            Sign In
          </button>
        </form>
        
        {/* Registration link */}
        <p className="text-xs py-4 text-center px-4">
          Don’t have an account?{" "}
          <Link to={'/signup'}><span className="hover:cursor-pointer font-bold">Register Now</span></Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
