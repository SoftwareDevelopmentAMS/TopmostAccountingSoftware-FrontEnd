import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const ReviewPannelWraper = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className="dark:bg-boxdark-2 dark:text-bodydark flex h-screen overflow-hidden">
        {/* Sidebar */}
        <SideBar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />
  
        {/* Main content area */}
        <div className="flex flex-col w-full bg-background">
          {/* Navbar */}
          <NavBar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />
  
          {/* Outlet and main content */}
          <main className={`flex-1 overflow-y-auto transition-all duration-300  ease-in-out ${isSidebarOpen ? "max-w-[calc(100vw-16rem)]" : "max-w-[calc(100vw-5rem)]"}   bg-[#F1F2F7]`}>
            <Outlet />
          </main>
        </div>
      </div>
  )
}

export default ReviewPannelWraper
