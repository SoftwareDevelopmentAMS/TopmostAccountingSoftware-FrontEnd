import AddPatient from "../../components/ReceptionPannel/addPatient"
const addPatient = () => {
    return (
      <div className="m-auto   ">
        <div className="topbar m-5 p-4  bg-white  flex  flex-wrap justify-center">
          <h2 className="text-xl font-Inter font-bold uppercase tracking-normal">Patient Info</h2>
          <AddPatient />
        </div>
       
      </div>
    )
  }
  
  export default addPatient
  