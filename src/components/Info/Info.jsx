import { useState } from "react";
import "./Info.css";

const Info = () => {
  const [input, setInput] = useState("");
  const [info, setInfo] = useState([]);

  const handleFind = () => {
    if (input.length !== 12) {
      alert("Aadhar no. should be of 12 digit!");
    } else {
      const localUsers = JSON.parse(localStorage.getItem("data"));

      const filterData = localUsers.filter((user) => user.aadhar === input);
      setInfo(filterData);
    }
  };
  return (
    <>
      <section className="retrieve-info-container">
        <p>Retrieve Information</p>
        <div className="find-container">
          <input
            type="text"
            name="aadhar-input-box"
            value={input}
            id="aadhar-input-box"
            onChange={(e) => setInput(e.target.value)}
          />
          <button id="find-btn" onClick={handleFind}>
            Find
          </button>
        </div>

        {info.length > 0 ? (
          <table id="show-info-table">
            {info.map((element, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <td>Name : </td>
                    <td> {element.uname}</td>
                  </tr>
                  <tr>
                    <td>DOB : </td>
                    <td> {element.dob}</td>
                  </tr>
                  <tr>
                    <td>Aadhar: </td>
                    <td> {element.aadhar}</td>
                  </tr>
                  <tr>
                    <td>Mobile No. : </td>
                    <td> {element.mobile}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <h1 style={{ textAlign: "center" }}>No Data</h1>
        )}
      </section>
    </>
  );
};

export default Info;
