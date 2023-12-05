import Logo from "../assets/NavBar/Topmost Logo  1.png";
import Glob from "../assets/NavBar/ph_globe-light.png";
const NavBar = () => {
  return (
    <>
    <div className="h-[5rem] absolute top-0 bg-[#F3E9E5] w-full flex justify-center">
      <div className="w-3/4  flex items-center h-full justify-between">
        <div>
          <img src={Logo} alt="TopMost" />
        </div>
        <div className="">
          <div className="flex gap-2 w-full">
            <img src={Glob} alt="SignUp"/>
            <h1 className="uppercase font-Inter font-normal ">Sign up</h1>
          </div>
        </div>
      </div>
      
    </div>
    {/* <div className="pb-[5rem]"></div> */}
    </>
  );
};

export default NavBar;
