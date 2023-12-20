import { Route, Routes } from "react-router-dom";

{/* Branch */}
import InitialLogin from "./Pages/Branch/InitialLogin";
import InitialSignUp from "./Pages/Branch/InitialSignUp";

{/* User */}
import UserLogin from "./Pages/User/userLogin";
import UserRegister from "./Pages/User/userRegister";

// Reception Pannel
import ReceptionWraper from "../src/Components/ReceptionPannel/ReceptionPannelWraper";
import AddOptions from "./Pages/Add-on";
import PatientInvoice from "./Pages/PatientInvoice";
import PurchaseInvoice from "./Pages/PurchaseInvoice";
import ListofOptions from "./Pages/Add-on-list";
import PatientInvoiceList from "./Pages/PatientInvoiceList"
import PurchaseInvoiceList from "./Pages/PurchaseInvoiceList"
import ReceptionHome from "./Pages/ReceptionPannel/Home";
import AddDoc from "./Pages/Add-Doc";
import DoctorsList from "./Pages/Doctors-List";
import PurchaseReport from "./Pages/reports/purchase-report-list"
import PatientReport from "./Pages/reports/patiants-report-list"

// Review Pannel
import ReviewPannelWraper from "./Components/ReviewPannel/ReviewPannelWraper";
import ReviewHome from "./Pages/ReviewPannel/Home"



function App() {
  return (
    <>
      <Routes>

        {/* Branch */}
        <Route path="/login" element={<InitialLogin />} />
        <Route path="/signup" element={<InitialSignUp />} />

        {/* User */}
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />

        {/* Reception Pannel */}
        <Route path="/" element={<ReceptionWraper />}>
          <Route index element={<ReceptionHome/>}/>
          <Route path="patient-invoice" element={<PatientInvoice />} />
          <Route path="Patient-Invoice-list" element={<PatientInvoiceList />} />
          <Route path="purchase-invoice" element={<PurchaseInvoice />} />
          <Route path="purchase-Invoice-list" element={<PurchaseInvoiceList />} />
          <Route path="add-on" element={<AddOptions />} />
          <Route path="add-on-list" element={<ListofOptions />} />
          <Route path="add-Doc" element={<AddDoc />} />
          <Route path="Doctors-list" element={<DoctorsList />} />
          <Route path="Purchase-reports-list" element={<PurchaseReport />} />
          <Route path="Patient-reports-list" element={<PatientReport />} />
          <Route path="settings" element={<Wraper value={"settings"} />} />
          <Route path="accounts" element={<Wraper value={"accounts"} />} />
          <Route path="help" element={<Wraper value={"Help"} />} />         
        </Route>

        {/* Reception Pannel */}
        <Route path="review-Pannel" element={<ReviewPannelWraper />}>
          <Route index element={<ReviewHome/>}/>
          <Route path="patient-invoice" element={<PatientInvoice />} />
          <Route path="Patient-Invoice-list" element={<PatientInvoiceList />} />
          <Route path="purchase-invoice" element={<PurchaseInvoice />} />
          <Route path="purchase-Invoice-list" element={<PurchaseInvoiceList />} />
          <Route path="add-on" element={<AddOptions />} />
          <Route path="add-on-list" element={<ListofOptions />} />
          <Route path="add-Doc" element={<AddDoc />} />
          <Route path="Doctors-list" element={<DoctorsList />} />
          <Route path="Purchase-reports-list" element={<PurchaseReport />} />
          <Route path="Patient-reports-list" element={<PatientReport />} />
          <Route path="settings" element={<Wraper value={"settings"} />} />
          <Route path="accounts" element={<Wraper value={"accounts"} />} />
          <Route path="help" element={<Wraper value={"Help"} />} />         
        </Route>



      </Routes>
    </>
  );
}

export default App;


// eslint-disable-next-line react/prop-types
const Wraper = ({value}) => {
  return (
    <div className="text-2xl uppercase text-center p-10 font-Poppins font-bold">
                {value}
              </div>
  )
}

