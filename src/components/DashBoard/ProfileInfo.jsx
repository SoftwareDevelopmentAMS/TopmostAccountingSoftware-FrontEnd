/* eslint-disable  */
const ProfileInfo = ({ Profile, Name, Data }) => {
  const handleDropdownToggle = () => {
    const dropdown = document.getElementById("dropdownAvatarName");
    dropdown.classList.toggle("hidden");
  };

  return (
    <div className="relative inline text-left">
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center  text-sm pe-1 font-medium text-gray-900 rounded-lg    md:me-0   dark:focus:ring-gray-700 dark:text-white"
        type="button"
        onClick={handleDropdownToggle}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-10  h-10 me-2 rounded-full object-contain hover:scale-125  transition-all  ease-in-out duration-500"
          src={Profile}
          alt="user photo"
        />
        <h1 className="text-[#1F384C] text-lg hidden xs1:inline  font-Poppins font-normal">{Name}</h1>
        <div className="sm:ms-3 p-1 h-full rounded-md bg-white ">
        <svg
          className="w-3 h-3  "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
            
          />
        </svg>
        </div>
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdownAvatarName"
        className="absolute z-10 hidden bg-white right-1 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium">Designation</div>
          <div className="truncate">{Name}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownAvatarNameButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
