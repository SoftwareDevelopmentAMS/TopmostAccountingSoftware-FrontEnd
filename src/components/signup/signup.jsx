/* eslint-disable  */
import { useFormik } from "formik";
import { Link } from "react-router-dom";

let Branchs = ["KALAMASSERY", "VEDIMARA", "NORTH PARAVOOR"];

const SignUp = ({ data }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      branch: "",
    },
    validate: (values) => {
      const errors = {};
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.email) {
        errors.email = "Required";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email format";
      }

      // Validate password
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 5) {
        errors.password = "Password must be at least 5 characters";
      }
      if (!values.branch) {
        errors.branch = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      // Add your authentication logic here
      console.log("Form submitted:", values);
    },
  });

  const togglePasswordVisibility = () => {
    formik.setFieldValue("passwordVisible", !formik.values.passwordVisible);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-md w-full mx-4 bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-center uppercase font-Inter text-3xl font-bold mb-6">
          Sign Up
        </h1>
        <p className="text-base md:text-[22px] text-center max-w-xs m-auto font-semibold text-black mb-6">
        Enter your details to register to your account
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full border py-2 px-4 rounded-md  outline-none"
            placeholder="Enter Email / Phone No"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {/* errors */}
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}

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
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}

          <div className="text-right">
            <a href="#" className="text-[#EE7203] text-sm ">
              Forgot your password?!
            </a>
          </div>

          <select
            value={formik.values.branch}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full box-border border py-2 px-4 rounded-lg "
            id="branch"
            name="branch"
          >
            <option value="" disabled>
              Select Branch
            </option>
            {Branchs.map((Branch, i) => (
              <option value={Branch} key={i + Branch}>
                {Branch}
              </option>
            ))}
          </select>
          {formik.errors.branch && formik.touched.branch && (
            <div className="text-red-500 text-sm">{formik.errors.branch}</div>
          )}

          <button
            type="submit"
            className="w-full bg-[#EE7203] text-white py-2 px-4 rounded-md"
          >
            Sign In
          </button>
        </form>
        <p className="text-xs py-4 text-center px-4">
          Already have an account?{" "}
          <Link to={"/"}>
            <span className="hover:cursor-pointer font-bold"> - Login Now</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
