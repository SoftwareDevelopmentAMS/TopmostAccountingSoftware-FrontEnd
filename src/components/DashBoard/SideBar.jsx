/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const MenuList = [
  {
    name: "Patient Invoice ",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.49799 0.500244H11.5022C14.053 0.500244 15.493 1.94699 15.5005 4.49774V11.5027C15.5005 14.0527 14.053 15.5002 11.5022 15.5002H4.49799C1.94724 15.5002 0.500488 14.0527 0.500488 11.5027V4.49774C0.500488 1.94699 1.94724 0.500244 4.49799 0.500244ZM8.03729 12.3952C8.36054 12.3952 8.62979 12.1552 8.65979 11.8327V4.19024C8.68979 3.95774 8.57804 3.72449 8.37554 3.59774C8.16479 3.47024 7.90979 3.47024 7.70804 3.59774C7.50479 3.72449 7.39304 3.95774 7.41479 4.19024V11.8327C7.45304 12.1552 7.72229 12.3952 8.03729 12.3952ZM11.488 12.3952C11.803 12.3952 12.0723 12.1552 12.1105 11.8327V9.37275C12.1323 9.132 12.0205 8.90775 11.8173 8.78025C11.6155 8.65275 11.3605 8.65275 11.1505 8.78025C10.9473 8.90775 10.8355 9.132 10.8655 9.37275V11.8327C10.8955 12.1552 11.1648 12.3952 11.488 12.3952ZM5.16476 11.8327C5.13476 12.1552 4.86551 12.3952 4.54226 12.3952C4.21976 12.3952 3.94976 12.1552 3.92051 11.8327V6.65024C3.89801 6.41699 4.00976 6.18524 4.21301 6.05774C4.41476 5.93024 4.67051 5.93024 4.87301 6.05774C5.07476 6.18524 5.18801 6.41699 5.16476 6.65024V11.8327Z"
      />
    ),
  },
  {
    name: "Purchase Invoice",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.59097 7.42484H11.6669C11.9816 7.42484 12.2289 7.16461 12.2289 6.8508C12.2289 6.52934 11.9816 6.27677 11.6669 6.27677H9.59097C9.27622 6.27677 9.02891 6.52934 9.02891 6.8508C9.02891 7.16461 9.27622 7.42484 9.59097 7.42484ZM14.1324 3.44562C14.5896 3.44562 14.8893 3.60635 15.1891 3.95843C15.4889 4.3105 15.5413 4.81565 15.4739 5.27412L14.7619 10.295C14.627 11.2602 13.8177 11.9712 12.8659 11.9712H4.68979C3.69307 11.9712 2.86871 11.1913 2.78627 10.181L2.09681 1.83755L0.965194 1.63855C0.665428 1.58498 0.455591 1.28648 0.50805 0.980325C0.560509 0.667284 0.852782 0.459865 1.16004 0.506554L2.9474 0.781326C3.2022 0.828014 3.38955 1.04156 3.41204 1.30179L3.55443 3.01624C3.57691 3.26193 3.77176 3.44562 4.01157 3.44562H14.1324ZM4.56973 13.1809C3.94023 13.1809 3.43062 13.7014 3.43062 14.3443C3.43062 14.9795 3.94023 15.5 4.56973 15.5C5.19175 15.5 5.70135 14.9795 5.70135 14.3443C5.70135 13.7014 5.19175 13.1809 4.56973 13.1809ZM13.0007 13.1809C12.3712 13.1809 11.8616 13.7014 11.8616 14.3443C11.8616 14.9795 12.3712 15.5 13.0007 15.5C13.6227 15.5 14.1323 14.9795 14.1323 14.3443C14.1323 13.7014 13.6227 13.1809 13.0007 13.1809Z"
      />
    ),
  },
  {
    name: "List of Invoice",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.8575 0.5H10.1432C12.46 0.5 13.75 1.835 13.75 4.1225V11.87C13.75 14.195 12.46 15.5 10.1432 15.5H3.8575C1.5775 15.5 0.25 14.195 0.25 11.87V4.1225C0.25 1.835 1.5775 0.5 3.8575 0.5ZM4.06011 3.995V3.9875H6.30185C6.6251 3.9875 6.8876 4.25 6.8876 4.57175C6.8876 4.9025 6.6251 5.165 6.30185 5.165H4.06011C3.73686 5.165 3.47511 4.9025 3.47511 4.58C3.47511 4.2575 3.73686 3.995 4.06011 3.995ZM4.06011 8.555H9.9401C10.2626 8.555 10.5251 8.2925 10.5251 7.97C10.5251 7.6475 10.2626 7.38425 9.9401 7.38425H4.06011C3.73686 7.38425 3.47511 7.6475 3.47511 7.97C3.47511 8.2925 3.73686 8.555 4.06011 8.555ZM4.06002 11.9825H9.94002C10.2393 11.9525 10.465 11.6968 10.465 11.3975C10.465 11.09 10.2393 10.835 9.94002 10.805H4.06002C3.83502 10.7825 3.61752 10.8875 3.49752 11.0825C3.37752 11.27 3.37752 11.5175 3.49752 11.7125C3.61752 11.9 3.83502 12.0125 4.06002 11.9825Z"
      />
    ),
  },
];

const OthersList = [
  {
    name: "Settings ",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3018 9.18512C14.57 9.32762 14.777 9.55262 14.9226 9.77762C15.2062 10.2426 15.1832 10.8126 14.9073 11.3151L14.3707 12.2151C14.0871 12.6951 13.5583 12.9951 13.0141 12.9951C12.7458 12.9951 12.4469 12.9201 12.2016 12.7701C12.0024 12.6426 11.7724 12.5976 11.5271 12.5976C10.7683 12.5976 10.1322 13.2201 10.1092 13.9626C10.1092 14.8251 9.40403 15.5001 8.52259 15.5001H7.48019C6.59109 15.5001 5.88594 14.8251 5.88594 13.9626C5.87061 13.2201 5.23444 12.5976 4.47564 12.5976C4.2227 12.5976 3.99276 12.6426 3.80115 12.7701C3.55588 12.9201 3.24929 12.9951 2.98869 12.9951C2.43683 12.9951 1.90797 12.6951 1.62438 12.2151L1.09551 11.3151C0.811922 10.8276 0.796592 10.2426 1.08019 9.77762C1.20282 9.55262 1.43276 9.32762 1.69336 9.18512C1.90797 9.08012 2.04594 8.90762 2.17623 8.70512C2.55947 8.06012 2.32953 7.21262 1.67803 6.83012C0.919227 6.40262 0.673957 5.45012 1.11084 4.70762L1.62438 3.82262C2.06893 3.08012 3.01935 2.81762 3.78582 3.25262C4.45264 3.61262 5.31875 3.37262 5.70965 2.73512C5.83229 2.52512 5.90127 2.30012 5.88594 2.07512C5.87061 1.78262 5.95492 1.50512 6.10055 1.28012C6.38414 0.815122 6.89768 0.515122 7.4572 0.500122H8.53792C9.10511 0.500122 9.61864 0.815122 9.90223 1.28012C10.0402 1.50512 10.1322 1.78262 10.1092 2.07512C10.0938 2.30012 10.1628 2.52512 10.2855 2.73512C10.6764 3.37262 11.5425 3.61262 12.217 3.25262C12.9758 2.81762 13.9339 3.08012 14.3707 3.82262L14.8843 4.70762C15.3288 5.45012 15.0836 6.40262 14.3171 6.83012C13.6656 7.21262 13.4356 8.06012 13.8265 8.70512C13.9492 8.90762 14.0871 9.08012 14.3018 9.18512ZM5.83221 8.00763C5.83221 9.18513 6.80562 10.1226 8.00898 10.1226C9.21233 10.1226 10.1628 9.18513 10.1628 8.00763C10.1628 6.83013 9.21233 5.88513 8.00898 5.88513C6.80562 5.88513 5.83221 6.83013 5.83221 8.00763Z"
      />
    ),
  },
  {
    name: "Accounts",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.97047 4.46829C9.97047 6.67106 8.2043 8.43733 5.99998 8.43733C3.7964 8.43733 2.02949 6.67106 2.02949 4.46829C2.02949 2.26552 3.7964 0.5 5.99998 0.5C8.2043 0.5 9.97047 2.26552 9.97047 4.46829ZM6 15.5C2.74678 15.5 0 14.9712 0 12.9312C0 10.8904 2.76404 10.3804 6 10.3804C9.25397 10.3804 12 10.9092 12 12.9492C12 14.99 9.23596 15.5 6 15.5Z"
      />
    ),
  },
  {
    name: "Help",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.7525 0.49939H11.255C13.7975 0.49939 15.5 2.28439 15.5 4.93939V11.0676C15.5 13.7151 13.7975 15.4994 11.255 15.4994H4.7525C2.21 15.4994 0.5 13.7151 0.5 11.0676V4.93939C0.5 2.28439 2.21 0.49939 4.7525 0.49939ZM7.99256 5.79515C7.64006 5.79515 7.34756 5.5019 7.34756 5.14265C7.34756 4.77515 7.64006 4.48265 8.00756 4.48265C8.36756 4.48265 8.66006 4.77515 8.66006 5.14265C8.66006 5.5019 8.36756 5.79515 7.99256 5.79515ZM8.65244 10.8351C8.65244 11.1951 8.35994 11.4876 7.99244 11.4876C7.63244 11.4876 7.33994 11.1951 7.33994 10.8351V7.52013C7.33994 7.15938 7.63244 6.86013 7.99244 6.86013C8.35994 6.86013 8.65244 7.15938 8.65244 7.52013V10.8351Z"
      />
    ),
  },
];

const LeftSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen  relative">
      {/* Sidebar */}
      <div
        className={` bg-[#F1F2F7] shadow-md transition-all transform duration-500 ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Toggle Button */}
        <button
          className="fixed top-2 right-0 text-black rounded-full focus:outline-none"
          onClick={handleToggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>

          {/* {isSidebarOpen ? (
            <FontAwesomeIcon icon={faChevronLeft} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )} */}
        </button>
        <div className="px-2 mt-10  flex flex-col justify-end border-b-2">
          <div className="flex flex-col justify-center items-center">
            <p
              className={`text-md mb-2 text-[#082431] w-full opacity-50 ${
                isSidebarOpen ? "text-left" : "text-right"
              } font-semibold uppercase`}
            >
              Menu
            </p>

            {MenuList.map((list, i) => (
              <div
                key={i}
                className={`group flex w-full h-full items-center ${
                  isSidebarOpen
                    ? "justify-start p-3 gap-2 hover:bg-[#EE720333] hover:text-[#EE7203]"
                    : "justify-center gap-2 my-2"
                }  rounded-lg m-1  hover:cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="fill-[#082431] opacity-50 group-hover:fill-[#EE7203] group-hover:opacity-100 group-hover:scale-150  h-6 w-6 transition-all  ease-in-out duration-300 "
                >
                  {list.icon}
                </svg>
                <h1
                  className={
                    isSidebarOpen
                      ? `font-Poppins font-medium fill-[#082431] opacity-50 group-hover:opacity-100`
                      : `hidden`
                  }
                >
                  {list.name}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="px-2 mt-10  flex flex-col justify-end ">
          <div className="flex flex-col justify-end items-center">
            <p
              className={`text-md tracking-tighter mb-4 text-[#082431] w-full opacity-50 ${
                isSidebarOpen ? "text-left pl-5" : "text-right"
              } font-semibold uppercase`}
            >
              Others
            </p>

            {OthersList.map((list, i) => (
              <div
                key={i}
                className={`group flex w-full h-full items-center ${
                  isSidebarOpen
                    ? "justify-start pl-10 p-3 gap-2 hover:bg-[#EE720333] hover:text-[#EE7203]"
                    : "justify-center gap-2 my-2"
                }  rounded-lg  m-1   hover:cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="fill-[#082431] opacity-50 group-hover:fill-[#EE7203] group-hover:opacity-100 group-hover:scale-150  transition-all  ease-in-out duration-300   h-6 w-6"
                >
                  {list.icon}
                </svg>
                <h1
                  className={
                    isSidebarOpen
                      ? `font-Poppins font-medium fill-[#082431] opacity-50 group-hover:opacity-100`
                      : `hidden`
                  }
                >
                  {list.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-1 transition-all  ease-in-out duration-500`}>
        {/* Content Area Content */}
        adfasads
      </div>
    </div>
  );
};

export default LeftSidebar;
