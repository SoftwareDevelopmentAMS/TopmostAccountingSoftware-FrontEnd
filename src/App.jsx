import { Route, Routes } from "react-router-dom";
import InitialLogin from "./Pages/InitialLogin";
import InitialSignUp from "./Pages/InitialSignUp";
import UserLogin from "./Pages/userLogin";
import UserRegister from "./Pages/userRegister";
import HomePage from "./Pages/HomePage";
import AddOptions from "./components/DashBoard/AddOptions";
import PatientInvoice from "./components/DashBoard/PatientInvoice";
import PurchaseInvoice from "./components/DashBoard/PurchaseInvoice";
import ListofOptions from "./components/DashBoard/ListofOptions";


function App() {
  return (
    <>
      <Routes>
        
        <Route path="/login" element={<InitialLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/signup" element={<InitialSignUp />} />
        {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
        <Route path="/" element={<HomePage />} >
          <Route  index element={<PatientInvoice/>}/>
          <Route  path="patient-invoice" element={<PatientInvoice/>}/>
          <Route  path="add-option" element={<AddOptions/>}/>
          <Route  path="purchase-invoice" element={<PurchaseInvoice/>}/>
          <Route  path="Tables" element={<ListofOptions/>}/>
          <Route  path="List-invoice" element={<PatientInvoice/>}/>
          <Route  path="accounts" element={<PatientInvoice/>}/>
          <Route  path="help" element={<PatientInvoice/>}/>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
