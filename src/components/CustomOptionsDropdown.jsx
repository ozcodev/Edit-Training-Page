const CustomOptionsDropdown = ({type,options }) => {
    return (
      <div>
        <select className="border p-2 w-full rounded-md">
          <option value="">{type}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  export default CustomOptionsDropdown;