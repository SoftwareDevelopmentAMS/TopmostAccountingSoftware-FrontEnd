import {formatDate} from "../../commonFn/Datefn"
const companyInfo = ({companyName}) => {
  return (
    <div className="w-11/12 mx-auto flex flex-col xl:flex-row justify-between items-center py-4 mb-4">
        <div className="xl:text-left mb-4 lg:mb-0">
          <h1 className="text-3xl font-bold">Welcome {companyName} </h1>
          <p>All systems are running smoothly!</p>
        </div>
        
        <div className="xl:text-right">
          <p className="px-4 py-2 bg-white rounded-lg shadow">
            Today {formatDate()}
          </p>
        </div>
      </div>
  )
}

export default companyInfo
