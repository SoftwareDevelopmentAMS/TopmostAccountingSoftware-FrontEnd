import { Route, Routes } from "react-router-dom";
import InitialLogin from "./Pages/InitialLogin";
import InitialSignUp from "./Pages/InitialSignUp";
import UserLogin from "./Pages/userLogin";
import UserRegister from "./Pages/userRegister";
import HomePage from "./Pages/HomePage";
import AddOptions from "./Pages/Add-on";
import PatientInvoice from "./Pages/PatientInvoice";
import PurchaseInvoice from "./Pages/PurchaseInvoice";
import ListofOptions from "./Pages/Add-on-list";
import PatientInvoiceList from "./Pages/PatientInvoiceList"
import PurchaseInvoiceList from "./Pages/PurchaseInvoiceList"
import DashBoard from "./Pages/DashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<InitialLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/signup" element={<InitialSignUp />} />
        <Route path="/" element={<HomePage />}>
          <Route index element={<DashBoard/>}/>
          <Route path="patient-invoice" element={<PatientInvoice />} />
          <Route path="Patient-Invoice-list" element={<PatientInvoiceList />} />
          <Route path="purchase-invoice" element={<PurchaseInvoice />} />
          <Route path="purchase-Invoice-list" element={<PurchaseInvoiceList />} />
          <Route path="add-on" element={<AddOptions />} />
          <Route path="add-on-list" element={<ListofOptions />} />
          <Route
            path="settings"
            element={
              <div className="text-2xl uppercase text-center p-10 font-Poppins font-bold">
                Settings{" "}
              </div>
            }
          />
          <Route
            path="accounts"
            element={
              <div className="text-2xl uppercase text-center p-10 font-Poppins font-bold">
                accounts{" "}
              </div>
            }
          />
          <Route
            path="help"
            element={
              <div className="text-2xl uppercase text-center p-10 font-Poppins font-bold">
                help{" "}
              </div>
            }
          />
          <Route path="patient-table" element={<div className="text-2xl uppercase text-center p-10 font-Poppins font-bold">
                Accounts{" "}
              </div>} />
          <Route path="purchase-table" element={<div className="text-2xl uppercase text-center p-10 font-Poppins font-bold">
                Support{" "}
              </div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
