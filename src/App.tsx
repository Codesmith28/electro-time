import "./App.css";
import "daisyui/dist/full.css";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [tableData, setTableData] = useState(data);

  const handleDelete = (id: number) => {
    const updatedData = tableData.filter((item) => item.id !== id);
    setTableData(updatedData);
  };

  const handleAdd = () => {
    const newItem = {
      id: tableData.length + 1,
      title: "New Entry",
      times: [
        {
          start: "Start Time",
          end: "End Time",
        },
      ],
      days: ["Mon", "Tue", "Wed"],
    };
    setTableData([...tableData, newItem]);
  };

  return (
    <div>
      <h1 className="title">TimeTable Maker</h1>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content" style={{ padding: "10px" }}>
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            Open Editor
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <div className="overflow-x-auto">
              <h2 className="subHeading">My Schedule</h2>
              <table className="table table-zebra w-96">
                <thead>
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Times</th>
                    <th>Days</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <tr key={item.id}>
                      <th>{item.id}</th>
                      <td>{item.title}</td>
                      <td>
                        <ul>
                          {item.times.map((time, index) => (
                            <li key={index}>
                              Start: {time.start}, End: {time.end}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td>{item.days.join(", ")}</td>
                      <td>
                        <button
                          className="btn btn-error"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-primary" onClick={handleAdd}>
              Add Entry
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
