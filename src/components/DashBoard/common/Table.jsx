/* eslint-disable react/prop-types */
import { useState } from 'react';



function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = () => {
    onPageChange(0);
  };

  const handleBackButtonClick = () => {
    onPageChange(page - 1);
  };

  const handleNextButtonClick = () => {
    onPageChange(page + 1);
  };

  const handleLastPageButtonClick = () => {
    onPageChange(Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        className="px-2 py-1 rounded bg-blue-500 text-white"
      >
        {'<<'}
      </button>
      <button
        onClick={handleBackButtonClick}
        disabled={page === 0}
        className="px-2 py-1 rounded bg-blue-500 text-white"
      >
        {'<'}
      </button>
      <button
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        className="px-2 py-1 rounded bg-blue-500 text-white"
      >
        {'>'}
      </button>
      <button
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        className="px-2 py-1 rounded bg-blue-500 text-white"
      >
        {'>>'}
      </button>
    </div>
  );
}

function CustomTable({ columns, data, rowsPerPageOptions = [5, 10, 25, -1] }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  

  return (
    <div className="container mx-auto mt-4">
      <input type="date" />
      <table className="min-w-full border bg-white">
        <thead>
          <tr>
            {columns?.map((column) => (
              <th key={column} className="border p-2">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column} className="border p-2">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
          {emptyRows > 0 && (
            <tr style={{ height: 53 * emptyRows }}>
              <td colSpan={columns?.length} className="border" />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={columns?.length} className="p-2">
              <div className="flex justify-between items-center">
                <div>
                  <select
                    className="px-2 py-1 rounded border"
                    value={rowsPerPage}
                    onChange={(e) => handleChangeRowsPerPage(e)}
                  >
                    {rowsPerPageOptions.map((option) => (
                      <option key={option} value={option}>
                        {option === -1 ? 'All' : option}
                      </option>
                    ))}
                  </select>
                  {' rows per page'}
                </div>
                {/* Assuming TablePaginationActions is a component that handles pagination */}
                {/* You might need to replace this component with your own implementation */}
                <TablePaginationActions
                  count={data?.length}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handleChangePage}
                />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}


export default CustomTable

 
