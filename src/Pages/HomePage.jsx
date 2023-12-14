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
        <div className="relative flex flex-1 flex-col ">
          {/* <!-- ===== Header Start ===== --> */}
          <NavBar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar}/>
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto h-[calc(100vh-2rem)] max-w-screen-2xl  overflow-y-auto   ">
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
