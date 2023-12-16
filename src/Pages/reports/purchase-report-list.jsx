import { useState } from "react";
import InvoiceTable from "../../components/DashBoard/common/InvoceTable"
import {purchaselist} from "../../assets/data"
import FilterComponent from "../../components/DashBoard/common/filter";


const PurchaseInvoiceList = () => {
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
    <div className="topbar m-5 p-4  bg-white  flex  flex-wrap justify-center">
      <h2 className="text-xl font-Inter font-bold uppercase tracking-normal"> Purchase invoicelist</h2>
    <InvoiceTable  data={purchaselist} setSelectedFields={setSelectedFields} selectedFields={selectedFields}/>
    </div>
    <FilterComponent/>
  </div>
  )
}

export default PurchaseInvoiceList