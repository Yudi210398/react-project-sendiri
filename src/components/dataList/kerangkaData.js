import React from "react";
import Card from "../UI/Card.js";
import style from "./Data.module.css";

const KerangkaReact = (props) => {
  return (
    <Card>
      <td>{props.no}</td>
      <td>{props.nama}</td>
      <td>{props.tahun}</td>
      <td>{props.hobby}</td>
    </Card>
  );
};

export default KerangkaReact;
