import { useState } from "react";
import Slider from 'react-input-slider';



const FilterBar = ({
  sizes,
  onNameFilter,
  onEmailFilter,
  onsizeFilter,
  onDateFilter,
}) => {
  const [filters, setFilters] = useState({
    name: "",
    categories: "",
    size: "",
    from: "",
    to: "",
  });

 
  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;
      case "categories":
        onEmailFilter(value);
        break;
      case "size":
        onsizeFilter(value);
        break;
      case "from":
        onDateFilter(value, "from");
        break;
      case "to":
   
        break;
      default:
        break;
    }
  };




  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Brand</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="categories">Catergories</label>

        <input
          type="text"
          className="form-control"
          id="categories"
          onChange={handleInput("categories")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="size">Size</label>
        <select
          className="form-control"
          id="size"
          onChange={handleInput("size")}
        >
          <option value="">Select</option>
          {sizes.map((size) => (
            <option value={size} key={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="startDate">Price From</label>
        <input
          type="text"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div>
      <div className="col-sm-12 my-2">



        <label htmlFor="endDate">To</label>
        <input
          type="text"
          className="form-control"
          id="endDate"
          onChange={handleInput("to")}
        />
      </div>
    </div>
  );
};

export default FilterBar;
