import React, { useState } from "react";
import AddInput from "./components/add-input/addInput.js";

import DataInput from "./components/dataList/data.js";
const data = [
  {
    id: Math.random(),
    nama: "Yudi Runat Masneno",
    tahun: 1998,
    hobby: "Sepak Bola",
  },

  {
    id: Math.random(),
    nama: "hana Safira",
    tahun: 2001,
    hobby: "Nyanyi",
  },

  {
    id: Math.random(),
    nama: "enrico joseph",
    tahun: 1999,
    hobby: "music",
  },
];

const App = () => {
  const [inputData, updateData] = useState(data);
  let dataInputs = (datas) =>
    updateData((prevState) => {
      console.log(datas);
      return [datas, ...prevState];
    });
  return (
    <div>
      <AddInput onDataInput={dataInputs} />
      <DataInput items={inputData} />
    </div>
  );
};

export default App;
