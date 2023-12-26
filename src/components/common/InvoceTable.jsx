/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-buttons";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "datatables.net-buttons/js/buttons.html5";
import "jspdf-autotable";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InvoiceLogo from "../../assets/NavBar/logo 1.png";
import { formatDate } from "../../commonFn/Datefn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faTrashAlt, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



const invoiceData = {
  companyName: "TOPMOST KALAMASSERY",
  companyAddress: `OPPOSITE METRO PILLAR 316, PKA NAGAR,ALFIYA NAGARA, SOUTH KALAMASSRY, ERNAKULAM, KERALA
  KOCHI 682033 , 
  Phone: 7558011177
  Email: topmostkalamasserry@gmail.com`
   ,
  patientName: "Patient Name",
  invoiceId: "12345",
  date: "YYYY-MM-DD",
  items: [
    {
      name: "Item 1",
      description: "Description",
      quantity: 1,
      price: "$100",
      total: "$100",
    },
    {
      name: "Item 1",
      description: "Description",
      quantity: 1,
      price: "$100",
      total: "$100",
    },
    {
      name: "Item 1",
      description: "Description",
      quantity: 1,
      price: "$100",
      total: "$100",
    },
  ],
  generatedBy: "Your Name",
  printedOn: new Date().toLocaleDateString(),
  totalAmount: "$1000",
  totalDiscount: "$50",
  amountToBePaid: "$950",
};

const DataTable = ({
  openFilter,
  setFilterOpen,
  data,
  selectedFields,
  setSelectedFields,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleEdit = (id) => {
    console.log(`Edit row with ID ${id}`);
    // Add logic for editing row
  };

  const handleDelete = (id) => {
    console.log(`Delete row with ID ${id}`);
    // Add logic for deleting row
  };

  const handleHide = (id) => {
    console.log(`Hide row with ID ${id}`);
    // Add logic for hiding row
  };

  const tableRef = useRef(null);

  useEffect(() => {
    const dataTable = tableRef.current;

    if (dataTable && !$.fn.DataTable.isDataTable(dataTable)) {
      $(dataTable).DataTable({
        dom: "Bfrtip",
        pageLength: 25,
        buttons: [
          {
            extend: "copyHtml5",
            text: '<i class="fa fa-files-o"></i> Copy',
            titleAttr: "Copy to Clipboard",
            exportOptions: {
              columns: ":not(:last-child)",
            },
          },
          {
            extend: "excelHtml5",
            text: '<i class="fa fa-file-excel-o"></i> Excel',
            titleAttr: "Export to Excel",
            title: "TopMost Accounts",
            exportOptions: {
              columns: ":not(:last-child)",
            },
          },
          {
            extend: "csvHtml5",
            text: '<i class="fa fa-file-text-o"></i> CSV',
            titleAttr: "CSV",
            title: "TopMost Accounts",
            exportOptions: {
              columns: ":not(:last-child)",
            },
          },
          {
            extend: "pdfHtml5",
            text: '<i class="fa fa-file-pdf-o"></i> PDF',
            titleAttr: "PDF",
            title: "TopMost Accounts",
            exportOptions: {
              columns: ":not(:last-child)",
            },
          },
        ],
      });
    }

    return () => {
      if (dataTable && $.fn.DataTable.isDataTable(dataTable)) {
        $(dataTable).DataTable().destroy(true);
      }
    };
  }, [data]);

  const toggleField = (field) => {
    const isSelected = selectedFields.includes(field);
    setSelectedFields((prevSelectedFields) =>
      isSelected
        ? prevSelectedFields.filter((selectedField) => selectedField !== field)
        : [...prevSelectedFields, field]
    );
  };

  const printTable = () => {
    const printWindow = window.open("", "_blank");
    const tableHtml = document.getElementById("print-table").outerHTML;

    printWindow.document.write(`
      <html>
        <head>
          <title>Print Table</title>
          <style>
          #actioncolumn{
            display: none !important;
          }
          
           #td{
            display: none !important;
          }
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width:100%;
            margin: 0;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid black;
            text-align: center;
            padding: 2px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          </style>
        </head>
        <body>
          ${tableHtml}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div className=" mx-auto p-4 pt-20 mb-16 grid grid-cols-1 relative ">
      <button
        onClick={printTable}
        className="bg-green-400 px-4 py-2 rounded-lg text-white text-xl uppercase m-2 absolute right-0 top-0"
      >
        print
      </button>
      {setFilterOpen && (
        <button
          onClick={() => setFilterOpen(!openFilter)}
          className={`${!openFilter ? "bg-blue-400 px-4 py-2 rounded-lg text-white text-xl uppercase m-2 absolute left-0 top-0 " : "hidden"}  `}
        >
         Filter
        </button>
      )}
      
      <div className="p-1 overflow-x-auto">
      <table
  id="print-table"
  ref={tableRef}
  className="bg-white border   border-gray-300  shadow-md rounded "
>
  <thead>
    <tr>
      {selectedFields.map((field) => (
        <th key={field} className="text-center py-2 px-4 border-b text-sm lg:text-base">
          {field}
        </th>
      ))}
      <th id="td" className="text-center py-2 px-4 border-b text-sm lg:text-base">
        Actions
      </th>
    </tr>
  </thead>
  <tbody>
    {data.map((row, i) => (
      <tr key={i} onClick={() => handleRowClick(row)} className="cursor-pointer hover:bg-gray-100 transition duration-150">
        {selectedFields.map((field) => (
          <td key={field} className="text-center py-2 px-4 border-b text-sm lg:text-base">
            {row[field]}
          </td>
        ))}
        <td id="actioncolumn" className="text-center py-2 px-4 border-b space-x-2 font-bold">
          {/* Consider replacing text with icons for smaller screens */}
          <button onClick={(e) => { e.stopPropagation(); handleEdit(row.InvoiceId); }} className="bg-[#007bff] p-2 lg:p-3 hover:bg-[#3a6ba0] rounded-lg">
          <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleDelete(row.InvoiceId); }} className="bg-[#dc3545] p-2 lg:p-3 hover:bg-[#ad424d] rounded-lg">
          <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleHide(row.InvoiceId); }} className="bg-[#6c757d] p-2 lg:p-3 hover:bg-[#5a6d7e] rounded-lg">
          <FontAwesomeIcon icon={faEyeSlash} />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      </div>


      {/* Modal for detailed view */}
      {showModal && (
        <div className=" selectcolumn fixed inset-0 flex  items-center justify-center">
          
          <div
            className="bg-black bg-opacity-50 absolute inset-0"
            onClick={() => {
              setSelectedRow(null);
              setShowModal(false);
            }}
          ></div>
          <div className="relative bg-white p-4  mx-auto z-10 rounded shadow-md print:w-full print:h-full h-[90%] w-[50%] ">
            {/* Display detailed view content */}
            <button onClick={() => window.print()} className="print:hidden    text-black  absolute right-8 border px-3 bg-slate-400 py-1 bottom-5 font-Inter rounded-lg font-semibold">
            <FontAwesomeIcon icon={faPrint}  /> Print
            </button>
            {selectedRow && (
              <div className="p-5 bg-white">
                {/* Header with Logo and Company Address */}
                <div className="flex justify-between items-center border-b pb-4">
                  <img src={InvoiceLogo} alt="Company Logo" className="h-20" />
                  <div className="text-xs text-right">
                    <p className="font-bold text-lg">{invoiceData.companyName}</p>
                    <p>{invoiceData.companyAddress}</p>
                  </div>
                </div>

                {/* Patient Details and Invoice Info */}
                <div className="flex justify-between border-b py-2">
                  <div className="text-xs">
                    <p>
                      <strong>Patient Details:</strong>
                    </p>
                    <p>{selectedRow.Name}</p>
                    <p>{selectedRow.Gender + ", Age:"+ selectedRow.Age }</p>
                    <p>{selectedRow.Address}</p>
                  </div>
                  <div className="text-xs text-right">
                    <p>
                      <strong>Invoice ID:</strong> {selectedRow.InvoiceId}
                    </p>
                    <p>
                      <strong>Date:</strong> {selectedRow.CreatedAt}
                    </p>
                  </div>
                </div>

                {/* Invoice Title */}
                <div className="text-center my-4">
                  <p className="text-xl font-bold uppercase">Invoice</p>
                </div>

                {/* Items Table */}
                <div className="mb-4">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="p-1 text-xs">Item</th>
                        <th className="p-1 text-xs">Description</th>
                        <th className="p-1 text-xs">Quantity</th>
                        <th className="p-1 text-xs">Price</th>
                        <th className="p-1 text-xs">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceData.items.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-1 text-xs">{item.name}</td>
                          <td className="p-1 text-xs">{item.description}</td>
                          <td className="p-1 text-xs">{item.quantity}</td>
                          <td className="p-1 text-xs">{item.price}</td>
                          <td className="p-1 text-xs">{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Footer with Generated By, Total Amount, etc. */}
                <div className="flex justify-between items-center pt-2">
                  <div className="text-xs">
                    <p>
                      <strong>Generated By:</strong> {selectedRow.EnteredBy}
                    </p>
                    <p>
                      <strong>Printed On:</strong> {formatDate() }
                    </p>
                  </div>
                  <div className="text-xs text-right">
                    <p>
                      <strong>Total Amount:</strong> {invoiceData.totalAmount}
                    </p>
                    <p>
                      <strong>Total Discount:</strong>{" "}
                      {invoiceData.totalDiscount}
                    </p>
                    <p>
                      <strong>Amount to be Paid:</strong>{" "}
                      {invoiceData.amountToBePaid}
                    </p>
                  </div>
                
                </div>
              </div>
            )}
            
          </div>
        </div>
      )}

      {/* Field selection controls */}
      <div className="mt-4 pt-4 " id="selectcolumn">
        <h3>Select Fields:</h3>
        {Object.keys(data[0]).map((field) => (
          <FormControlLabel
            key={field}
            control={
              <Checkbox
                checked={selectedFields.includes(field)}
                onChange={() => toggleField(field)}
              />
            }
            label={field}
          />
        ))}
      </div>
    </div>
  );
};

export default DataTable;
