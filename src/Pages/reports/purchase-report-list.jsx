import { useState } from "react";
import InvoiceTable from "../../components/common/InvoceTable"
import {purchaselist} from "../../assets/data"
import FilterComponent from "../../components/common/filter";

// Mock data for dropdown lists
const dateOptions = [
  { value: 'today', label: 'Today' },
  { value: 'last7', label: 'Last 7 Days' },
  { value: 'last30', label: 'Last 30 Days' },
  { value: 'custom', label: 'Custom Range' }
];

const doctorOptions = [
  { value: 'doctor1', label: 'Doctor 1' },
  { value: 'doctor2', label: 'Doctor 2' }
  // Add more doctor options
];

const procedureOptions = [
  { value: 'procedure1', label: 'Procedure 1' },
  { value: 'procedure2', label: 'Procedure 2' }
  // Add more procedure options
];

const patientTypeOptions = [
  { value: 'type1', label: 'Type 1' },
  { value: 'type2', label: 'Type 2' }
  // Add more patient type options
];

const visitorOptions = [
  { value: 'new', label: 'New' },
  { value: 'renewed', label: 'Renewed' }
  // Add more visitor options
];

const departmentOptions = [
  { value: 'dept1', label: 'Department 1' },
  { value: 'dept2', label: 'Department 2' }
  // Add more department options
];

const paymentMethodOptions = [
  { value: 'cash', label: 'Cash' },
  { value: 'upi', label: 'UPI' },
  { value: 'bank', label: 'Bank' }
  // Add more payment method options
];




const PurchaseInvoiceList = () => {
    const [filterVisible,setFilterVisible]=useState(true)
    const [selectedFields, setSelectedFields] = useState([
        "id",
        "enteredBy",
        "createdAt",
        "branch",
        "invoiceId",
        "deptType"
      ]);
  return (
    <div className="m-auto w-auto h-screen ">
     <div className={`m-5 p-4  bg-white ${filterVisible ? "hidden" : "block"}`}>
     <FilterComponent 
    dateOptions={dateOptions}
    doctorOptions={doctorOptions}
    procedureOptions={procedureOptions}
    patientTypeOptions={patientTypeOptions}
    visitorOptions={visitorOptions}
    departmentOptions={departmentOptions}
    paymentMethodOptions={paymentMethodOptions}
     />
     </div>
    <div className="topbar m-5 p-4  bg-white  flex  flex-wrap justify-center">
      <h2 className="text-xl font-Inter font-bold uppercase tracking-normal"> Purchase invoicelist</h2>
    <InvoiceTable  openFilter={filterVisible} setFilterOpen={setFilterVisible} data={purchaselist} setSelectedFields={setSelectedFields} selectedFields={selectedFields}/>
    </div>
    
  </div>
  )
}

export default PurchaseInvoiceList