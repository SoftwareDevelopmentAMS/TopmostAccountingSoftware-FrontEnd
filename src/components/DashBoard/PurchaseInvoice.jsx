import PurchaseInvoiceForm from "./invoiceForm/PurchaseInvoiceForm"
const PurchaseInvoice = () => {
  return (
    <div className="m-auto w-auto">
      <div className="topbar m-5 p-4 bg-white flex flex-wrap justify-center">
        <h2 className="text-xl font-Inter font-bold uppercase tracking-normal">Purchase Invoice</h2>
        <PurchaseInvoiceForm />
      </div>
    </div>
  );
};

export default PurchaseInvoice;
