import React from "react";
import KerangkanInput from "./kerangkaInput";

const AddInput = (props) => {
  const data = (d) => {
    let dataHasil = { ...d, id: Math.random().toString() };
    props.onDataInput(dataHasil);
  };

  return <KerangkanInput onDataKerangka={data} />;
};

export default AddInput;
