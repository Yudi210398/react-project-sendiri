import KerangkaReact from "./kerangkaData.js";
import style from "./Data.module.css";
import Card from "../UI/Card.js";
let data = new Date();
let tahun = +data.getFullYear();
const DataInput = (props) => {
  return (
    <div className="main-content">
      <table className="table table-striped table-hover">
        <thead>
          <tr className={style.border}>
            <th>no</th>
            <th>nama</th>
            <th>umur</th>
            <th>hobby</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((data, index) => {
            return (
              <KerangkaReact
                key={data.id}
                no={index + 1}
                nama={data.nama}
                tahun={tahun - data.tahun}
                hobby={data.hobby}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataInput;
