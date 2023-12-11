import InvoiceForm from "./invoiceForm/PatientInvoiceForm";

const PatientInvoice = () => {
  return (
    <div className="m-auto w-auto h-screen ">
      <div className="topbar m-5 p-4  bg-white  flex  flex-wrap justify-center">
        <h2 className="text-xl font-Inter font-bold uppercase tracking-normal">Patient Invoice</h2>
        <InvoiceForm />
      </div>
    </div>
  );
};

export default PatientInvoice;
