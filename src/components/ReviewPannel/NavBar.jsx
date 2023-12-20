/* eslint-disable react/prop-types */
import Profile from "../../assets/DashBoard/NavBar/Account.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileInfo from "../../Components/ReceptionPannel/ProfileInfo";   
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
const NavBar = ({handleToggleSidebar,isSidebarOpen}) => {
  return (
    <div className={` h-[4.5rem]  text-NavBarText   bg-NavBar w-full relative `}>
       
      <div className="flex h-[4.5rem] w-full items-center ">
      <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} onClick={handleToggleSidebar} className="w-10 hover:scale-[2] scale-150"/>
      <div className="flex h-[4.5rem] w-full items-center justify-around">
        

      <div className="w-[40%]  bg-white rounded-lg overflow-hidden h-fit  relative">
            <input type="text" className="outline-none placeholder:text-xl placeholder:text-[#C6C6C6] placeholder:opacity-50 w-full px-5 py-3" placeholder="Search" />
            <img alt="svgImg" className="opacity-30   cursor-pointer  absolute top-2 right-0 xs1:right-5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiM2MjdiODciIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTEzLDNjLTUuNTExLDAgLTEwLDQuNDg5IC0xMCwxMGMwLDUuNTExIDQuNDg5LDEwIDEwLDEwYzIuMzk2NTEsMCA0LjU5NzM4LC0wLjg1MTAxIDYuMzIyMjcsLTIuMjYzNjdsNS45NzA3LDUuOTcwN2MwLjI1MDgyLDAuMjYxMjQgMC42MjMyNywwLjM2NjQ4IDAuOTczNzEsMC4yNzUxMmMwLjM1MDQ0LC0wLjA5MTM2IDAuNjI0MTEsLTAuMzY1MDMgMC43MTU0NywtMC43MTU0N2MwLjA5MTM2LC0wLjM1MDQ0IC0wLjAxMzg4LC0wLjcyMjg5IC0wLjI3NTEyLC0wLjk3MzcxbC01Ljk3MDcsLTUuOTcwN2MxLjQxMjY2LC0xLjcyNDg4IDIuMjYzNjcsLTMuOTI1NzYgMi4yNjM2NywtNi4zMjIyN2MwLC01LjUxMSAtNC40ODksLTEwIC0xMCwtMTB6TTEzLDVjNC40MzAxMiwwIDgsMy41Njk4OCA4LDhjMCw0LjQzMDEyIC0zLjU2OTg4LDggLTgsOGMtNC40MzAxMiwwIC04LC0zLjU2OTg4IC04LC04YzAsLTQuNDMwMTIgMy41Njk4OCwtOCA4LC04eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="/>
        </div>
        <div className="pl-5">
        <ProfileInfo NameColor={" text-NavBarText "} Profile={Profile} Name={"KrishaPriya MA"}/>
        </div>
      </div>
      </div>
    </div>
  );
};
 

export default NavBar;
