import { Route, Routes } from "react-router-dom";
import InitialLogin from "./Pages/InitialLogin";
import InitialSignUp from "./Pages/InitialSignUp";
import UserLogin from "./Pages/userLogin";
import UserRegister from "./Pages/userRegister";

// Reception Pannel
import HomePage from "./Pages/HomePage";
import AddOptions from "./Pages/Add-on";
import PatientInvoice from "./Pages/PatientInvoice";
import PurchaseInvoice from "./Pages/PurchaseInvoice";
import ListofOptions from "./Pages/Add-on-list";
import PatientInvoiceList from "./Pages/PatientInvoiceList"
import PurchaseInvoiceList from "./Pages/PurchaseInvoiceList"
import DashBoard from "./Pages/DashBoard";
import AddDoc from "./Pages/Add-Doc";
import DoctorsList from "./Pages/Doctors-List";
import PurchaseReport from "./Pages/reports/purchase-report-list"
import PatientReport from "./Pages/reports/patiants-report-list"

// Review Pannel
import ReviewPannelWraper from "./Pages/Review Pannel/ReviewPannelWraper";



function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<InitialLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/signup" element={<InitialSignUp />} />

        {/* Reception Pannel */}
        <Route path="/" element={<HomePage />}>
          <Route index element={<DashBoard/>}/>
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
          <Route index element={<DashBoard/>}/>
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


const Wraper = ({value}) => {
  return (
    <div className="text-2xl uppercase text-center p-10 font-Poppins font-bold">
                {value}
              </div>
  )
}

