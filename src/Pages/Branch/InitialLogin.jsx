import NavBar from "../../components/common/NavBar";
import SignIn from "../../components/Branch/SignIn";
const InitialLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
    
    <NavBar signup={false} />
    <div className="h-full bg-white  flex justify-center items-center">
      <SignIn />
    </div>
  </div>
  );
};

export default InitialLogin;
