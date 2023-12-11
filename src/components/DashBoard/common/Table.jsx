
import  { useState } from 'react';

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



 

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container mx-auto mt-4">
      <table className="min-w-full border bg-white">
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.name}>
              <td className="border p-2">{row.name}</td>
              <td className="border p-2 text-right">{row.calories}</td>
              <td className="border p-2 text-right">{row.fat}</td>
            </tr>
          ))}
          {emptyRows > 0 && (
            <tr style={{ height: 53 * emptyRows }}>
              <td colSpan={3} className="border" />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="p-2">
              <div className="flex justify-between items-center">
                <div>
                  <select
                    className="px-2 py-1 rounded border"
                    value={rowsPerPage}
                    onChange={(e) => handleChangeRowsPerPage(e)}
                  >
                    {[5, 10, 25, -1].map((option) => (
                      <option key={option} value={option}>
                        {option === -1 ? 'All' : option}
                      </option>
                    ))}
                  </select>
                  {' rows per page'}
                </div>
                <TablePaginationActions
                  count={rows.length}
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
