/* eslint-disable react/prop-types */
import  {  useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-buttons/js/buttons.html5';
import 'jspdf-autotable';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const DataTable = ({  openFilter,setFilterOpen, data,selectedFields,setSelectedFields }) => {
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
        dom: 'Bfrtip',
        pageLength: 25,
        buttons: [
          {
            extend: 'copyHtml5',
            text: '<i class="fa fa-files-o"></i> Copy',
            titleAttr: 'Copy to Clipboard',
            exportOptions: {
              columns: ':not(:last-child)',
            },
          },
          {
            extend: 'excelHtml5',
            text: '<i class="fa fa-file-excel-o"></i> Excel',
            titleAttr: 'Export to Excel',
            title: 'TopMost Accounts',
            exportOptions: {
              columns: ':not(:last-child)',
            },
          },
          {
            extend: 'csvHtml5',
            text: '<i class="fa fa-file-text-o"></i> CSV',
            titleAttr: 'CSV',
            title: 'TopMost Accounts',
            exportOptions: {
              columns: ':not(:last-child)',
            },
          },
          {
            extend: 'pdfHtml5',
            text: '<i class="fa fa-file-pdf-o"></i> PDF',
            titleAttr: 'PDF',
            title: 'TopMost Accounts',
            exportOptions: {
              columns: ':not(:last-child)',
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
  }, [data])




  const toggleField = (field) => {
    const isSelected = selectedFields.includes(field);
    setSelectedFields((prevSelectedFields) =>
      isSelected
        ? prevSelectedFields.filter((selectedField) => selectedField !== field)
        : [...prevSelectedFields, field]
    );
  };



  const printTable = () => {
    const printWindow = window.open('', '_blank');
    const tableHtml = document.getElementById('print-table').outerHTML;

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
    <div className="container mx-auto p-4 pt-20 mb-16 relative  overflow-x-auto"    >
      <button onClick={printTable} className='bg-green-400 px-4 py-2 rounded-lg text-white text-xl uppercase m-2 absolute right-0 top-0'>print</button>
      {setFilterOpen && <button onClick={()=>setFilterOpen(!openFilter)}  className='bg-blue-400 px-4 py-2 rounded-lg text-white text-xl uppercase m-2 absolute left-0 top-0'>Filter</button>}
      <table  id='print-table'    ref={tableRef} className="min-w-full bg-white border border-gray-300 shadow-md rounded overflow-x-scroll">
        <thead>
          <tr>
            {selectedFields.map((field) => (
              <th  key={field} className="text-center py-2 px-4 border-b truncate">
                {field}
              </th>
            ))}
            <th id='td' className="text-center py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,i) => (
            <tr
              key={i}
              onClick={() => handleRowClick(row)}
              className="cursor-pointer hover:bg-gray-100 transition duration-150"
            >
              {selectedFields.map((field) => (
                <td key={field} className="text-center py-2 px-4 border-b">
                  {row[field]}
                </td>
              ))}
              <td id='actioncolumn' className="text-center py-2 px-4 border-b space-x-2 font-bold text-white ">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(row.InvoiceId);
                  }}
                  className="bg-[#007bff] p-3 hover:bg-[#3a6ba0]   rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(row.InvoiceId);
                  }}
                  className="bg-[#dc3545] p-3 hover:bg-[#ad424d] rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHide(row.InvoiceId);
                  }}
                  className="bg-[#6c757d] p-3 hover:bg-[#5a6d7e]  rounded-lg"
                >
                  Hide
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for detailed view */}
      {showModal && (
        <div  className="selectcolumn fixed inset-0 flex items-center justify-center">
          <div
            className="bg-black bg-opacity-50 absolute inset-0"
            onClick={() => {
              setSelectedRow(null);
              setShowModal(false);
            }}
          ></div>
          <div className="bg-white p-4 max-w-md mx-auto z-10 rounded shadow-md">
            {/* Display detailed view content */}
            {selectedRow && (
              <div>
                <h2>Detailed View</h2>
                {selectedFields.map((field) => (
                  <p key={field}>
                    <strong>{field}:</strong> {selectedRow[field]}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Field selection controls */}
      <div className="mt-4 pt-4" id='selectcolumn' >
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


