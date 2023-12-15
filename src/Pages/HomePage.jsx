import { Outlet } from "react-router-dom"
import NavBar from "../components/DashBoard/NavBar"
import SideBar from "../components/DashBoard/SideBar"
import { useState } from "react";
const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    
        
    

<div className="dark:bg-boxdark-2 dark:text-bodydark">
         
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex  h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <SideBar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar}/>
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="w-full bg-[#F1F2F7]">
          {/* <!-- ===== Header Start ===== --> */}
          {/* <!-- ===== Header End ===== --> */}
           <NavBar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar}/>

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className={`${isSidebarOpen ? "max-w-[calc(100vw-16rem)]" : "max-w-[calc(100vw-7rem)]"} mx-auto h-[calc(100vh-2rem)] w-full overflow-y-auto bg-[#F1F2F7]  `}>
              <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>





  )
}

export default HomePage
