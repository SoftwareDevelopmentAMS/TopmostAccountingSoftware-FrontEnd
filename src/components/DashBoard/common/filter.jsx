import  { useState } from 'react';

const FilterComponent = () => {
  const [filters, setFilters] = useState({
    date: '',
    age: '',
    gender: '',
    doctor: '',
    procedure: '',
    patientType: '',
    visitor: '',
    department: '',
    paymentMethod: '',
    approveStatus: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <input type="date" name="date" value={filters.date} onChange={handleChange} className="border p-2 rounded" />
        <input type="number" name="age" placeholder="Age" value={filters.age} onChange={handleChange} className="border p-2 rounded" />
        <select name="gender" value={filters.gender} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {/* Add more input/select fields here for other filters */}
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterComponent;
