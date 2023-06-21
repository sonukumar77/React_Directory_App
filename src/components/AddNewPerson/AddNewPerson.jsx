import { useState } from "react";
import "./AddNewPerson.css";

const AddNewPerson = () => {
  const [row, setRow] = useState([
    {
      uname: "",
      dob: "",
      aadhar: "",
      mobile: "",
      age: ""
    }
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    let updatedRow = [...row];
    updatedRow[index][name] = value;
    setRow(updatedRow);
  };

  const handleAddRow = () => {
    setRow([
      ...row,
      {
        uname: "",
        dob: "",
        aadhar: "",
        mobile: "",
        age: ""
      }
    ]);
  };

  const handleSave = (e, index) => {
    localStorage.setItem("data", JSON.stringify(row));
  };

  const handleDelete = (e, index) => {
    // const localData = JSON.parse(localStorage.getItem("data"));
    const filterData = row.filter((element, i) => i !== index);
    setRow(filterData);
    localStorage.setItem("data", JSON.stringify(filterData));
  };
  return (
    <>
      <section className="add-new-person-container">
        <p>Add New Person</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Of Birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {row.map((elem, index) => {
              return (
                <tr id="inputs-row" key={index}>
                  <td>
                    <input
                      type="text"
                      name="uname"
                      id="person_name"
                      value={elem.uname}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="dob"
                      id="person_dob"
                      value={elem.dob}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="aadhar"
                      id="person_aadhar"
                      value={elem.aadhar}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="mobile"
                      id="person_mobile"
                      value={elem.mobile}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </td>
                  <td></td>
                  <td>
                    <button id="saveBtn0" onClick={(e) => handleSave(e, index)}>
                      Save
                    </button>
                    <button
                      id="deleteBtn0"
                      onClick={(e) => handleDelete(e, index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="add-btn-container">
          <button id="add-btn" onClick={handleAddRow}>
            Add
          </button>
        </div>
      </section>
      <section className="retrieve-info-container" style={{ display: "none" }}>
        <p>Retrieve Information</p>
        <div className="find-container">
          <input type="text" name="aadhar-input-box" id="aadhar-input-box" />
          <button id="find-btn">Find</button>
        </div>
        <table id="show-info-table"></table>
      </section>
    </>
  );
};

export default AddNewPerson;
