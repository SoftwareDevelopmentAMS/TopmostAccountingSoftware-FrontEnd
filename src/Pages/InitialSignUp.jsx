import NavBar from "../components/NavBar"
import SignUp from "../components/signup/signup"
const InitialSignUp = () => {
  return (
<div className="flex flex-col flex-nowrap items-center justify-center h-screen bg-[#F3E9E5]">
      <NavBar signup={true}/>
      <div className="h-full bg-[#F3E9E5] flex justify-center items-center  ">
      <SignUp/>      
      </div>
    </div>

  )
}

export default InitialSignUp
