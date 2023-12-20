import NavBar from "../../components/common/NavBar";
import SignIn from "../../components/Branch/SignIn";
const InitialLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F3E9E5]">
    
    <NavBar signup={false} />
    <div className="h-full bg-[#F3E9E5] flex justify-center items-center">
      <SignIn />
    </div>
  </div>
  );
};

export default InitialLogin;
