import { useState } from "react";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validate: (values)=>{
const errors = {};
if (!values.email) {
  errors.email = "Email is required";
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
  errors.email = "Invalid email address";
}

if (!values.password) {
  errors.password = "Password is required";
} else if (
  !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(
    values.password
  )
) {
  errors.password =
    "Password must be at least 6 characters, include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
}
return errors;
    },
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log("Form submitted:", values);
    },
  })

  return (
   
  <div className="w-full md:w-[75%] lg:w-[50%]  bg-white md:h-full h-[98%] m-2 ms:m-10 md:m-0 rounded-[50px] md:rounded-[0px] md:rounded-s-[50px] flex justify-center items-center">
    <div className="w-[80%] mx-auto">
      <div className=" bg-white rounded-lg">
        <h1 className="font-Inter font-extrabold text-[30px]  text-center py-10">
          Login Here
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <TextInput
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
              <div className="text-[#ff4b4b] text-right">{formik.errors.email}</div>
            )}
          <PasswordInput
            label="Password"
            id="password"
            name="password"
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            className="mb-1"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-[#ff4b4b] text-right">{formik.errors.password}</div>
          )}
          <p className="text-[#ee7203] text-right">Forgot your password?!</p>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-[#ee7203] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <p className="text-center py-4">
              Don’t have an account?{" "}
              <Link to={"/user-register"}><span className=" text-[#ee7203]">Register here</span></Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>

  );
};

export default Login;
