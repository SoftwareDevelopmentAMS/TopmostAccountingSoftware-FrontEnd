/* eslint-disable react/prop-types */
import { useState } from "react";
import Table from "../DashBoard/common/Table"


const ListofOptions = ({tableData}) => {
  const [selectedTable, setSelectedTable] = useState(tableData[0].name);

  const handleTableClick = (tableName) => {
    setSelectedTable(tableName);
  };
  return (
    <div className="m-auto w-auto">
      <div className="topbar m-5 p-4 bg-white flex flex-wrap justify-center">
        {tableData.map((item, i) => (
          <button
            key={i + item.name}
            onClick={() => handleTableClick(item.name)}
            className={`${selectedTable == item.name ? 'bg-slate-300':''} shadow-xl w-40 m-2 px-4 py-2 text-[14px] font-Poppins border border-[##0000001F] rounded-lg `}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="m-5 p-4 bg-white w-auto">
        {selectedTable && (
          <Table columns={tableData.find((item) => item.name === selectedTable).columns}
          data={tableData.find((item) => item.name === selectedTable).data}/>
        )}
      </div>
    </div>
  )
}

export default ListofOptions
