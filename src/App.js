import { useState } from "react";
import dayjs from "dayjs";

import "./App.css";
import PersonItem from "./components/PersonItem";
import { data } from "./MOCK_DATA";
import FilterBar from "./components/FilterBar";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function App() {

  const [allData, setData] = useState(data);

  const generatesizeDataForDropdown = () => {
    return [...new Set(data.map((item) => item.size))];
  };

  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterEmail = (categories) => {
    const filteredData = data.filter((item) => {
      if (item.categories.toLowerCase().includes(categories.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFiltersize = (size) => {
    const filteredData = data.filter((item) => {
      if (item.size === size) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterDate = (price, field) => {
    const filteredData = data.filter((item) => {
      if (field === "from" && dayjs(item.price).isSameOrAfter(dayjs(price))) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <div className="container">
    <div className="header">
     <h1>Shoe.</h1>
    </div>
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            sizes={generatesizeDataForDropdown()}
            onNameFilter={handleFilterName}
            onEmailFilter={handleFilterEmail}
            onsizeFilter={handleFiltersize}
            onDateFilter={handleFilterDate}

          />
        </div>



        <div className="col-sm-9">
          <div className="row mt-5">
            {allData.map((item) => (
              <PersonItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
