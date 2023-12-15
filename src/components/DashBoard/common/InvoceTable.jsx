/* eslint-disable react/prop-types */
import  {  useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-buttons/js/buttons.html5';
import 'jspdf-autotable';


const DataTable = ({ data,selectedFields,setSelectedFields }) => {
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

  return (
    <div className="container mx-auto p-4 mb-16 relative" id='print-table' >
      <button onClick={()=>{
        window.print(tableRef);
      }} className='bg-green-400 px-4 py-2 rounded-lg text-white text-xl uppercase m-2 absolute right-0 -top-11'>print</button>
      <table   ref={tableRef} className="min-w-full bg-white border border-gray-300 shadow-md rounded">
        <thead>
          <tr>
            {selectedFields.map((field) => (
              <th key={field} className="text-center py-2 px-4 border-b">
                {field}
              </th>
            ))}
            <th className="text-center py-2 px-4 border-b">Actions</th>
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
              <td className="text-center py-2 px-4 border-b space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(row.InvoiceId);
                  }}
                  className="bg-blue-500 p-2   rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(row.InvoiceId);
                  }}
                  className="bg-red-500 p-2  rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHide(row.InvoiceId);
                  }}
                  className="bg-gray-500 p-2 rounded-lg"
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
        <div id='selectcolumn' className="selectcolumn fixed inset-0 flex items-center justify-center">
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
      <div className="mt-4 pt-4">
        <h3>Select Fields:</h3>
        {Object.keys(data[0]).map((field) => (
          <label key={field} className="mr-4">
            <input
              type="checkbox"
              checked={selectedFields.includes(field)}
              onChange={() => toggleField(field)}
            />
            {field}
          </label>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
