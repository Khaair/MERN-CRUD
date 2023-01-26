import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import EditForm from "./Componet/EditForm";
import Form from "./Componet/Form";
import Home from "./Componet/Home";

function App() {
  const [data, setData] = useState([]);

  const FetchData = (values) => {
    setData([...data, values]);
  };

  // const UpdateData = (upDatas) => {
  //   console.log(upDatas, "up data peyechi");
  //   let restData = data.filter((eld, indd) => indd != upDatas.id);
  //   console.log(restData, "reeeee");
  //   setData([
  //     ...restData,
  //     { name: upDatas.name, email: upDatas.email, password: upDatas.password },
  //   ]);
  // };
  const Delete = (id) => {
    //[{23},{45},{65}]-->2
    let deletedData = data.filter((eld, indd) => indd !== id);
    setData(deletedData);
  };
  return (
    <div className="App">
      <nav className="navv">
        <ul>
          <li>
            <Link to="/" className="ll">
              View Data
            </Link>
          </li>
          <li>
            <Link to="/Form" className="ll">
              Add Data
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home datas={data} DeleteFn={Delete} />} />
        <Route path="/Form" element={<Form fetch={FetchData} />} />
        <Route path="/edit/:id" element={<EditForm fetch={FetchData} />} />
      </Routes>
    </div>
  );
}

export default App;
