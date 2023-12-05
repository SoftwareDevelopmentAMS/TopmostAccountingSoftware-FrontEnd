/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../assets/NavBar/Topmost Logo  1.png";
import Glob from "../assets/NavBar/ph_globe-light.png";

const NavBar = ({signup}) => {
  return (
    <>
    <div className="h-[5rem] flex-grow bg-[#F3E9E5] w-full flex justify-center">
      <div className="w-3/4  flex items-center h-full justify-between">
        <div>
          <img src={Logo} alt="TopMost" />
        </div>
        <div className="">
          <div className="flex gap-2 w-full">
            <img src={Glob} alt="SignUp"/>
            <Link to={!signup ? '/signup' : '/'}><h1 className="uppercase font-Inter font-normal ">{!signup ? "Sign up" : "sign in"}</h1></Link>
          </div>
        </div>
      </div>
      
    </div> 
    </>
  );
};

export default NavBar;
