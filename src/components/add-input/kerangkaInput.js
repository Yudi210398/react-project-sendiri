import React, { useState } from "react";
import ErroModal from "../UI/errorModal.js";
import "./inputadd.css";
const KerangkanInput = (props) => {
  const [inputData, gantiTitleInput] = useState({
    inputNama: "",
    inputHobby: "",
    inputTahun: "",
  });

  const [error, erroInput] = useState();

  const namaData = (e) => {
    gantiTitleInput((prevState) => {
      return { ...prevState, inputNama: e.target.value };
    });
  };

  const hobbyData = (e) => {
    gantiTitleInput((prevState) => {
      return { ...prevState, inputHobby: e.target.value };
    });
  };

  const tahunData = (e) => {
    gantiTitleInput((prevState) => {
      return { ...prevState, inputTahun: +e.target.value };
    });
  };

  const handlerError = () => {
    erroInput(null);
  };

  const sumbmitData = (e) => {
    e.preventDefault();
    if (inputData.inputNama.trim().length === 0) {
      erroInput({
        judul: `Masukan Input`,
        pesan: `Jangan malas`,
      });
      return;
    }

    const dataInput = {
      nama: inputData.inputNama,
      hobby: inputData.inputHobby.trim(),
      tahun: inputData.inputTahun,
    };

    props.onDataKerangka(dataInput);
    gantiTitleInput(() => {
      return {
        inputNama: "",
        inputHobby: "",
        inputTahun: "",
      };
    });
  };

  return (
    <div>
      {error && (
        <ErroModal
          judul={error.judul}
          pesan={error.pesan}
          onConfrim={handlerError}
        />
      )}

      <div className="main-content-add">
        <form onSubmit={sumbmitData}>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={namaData}
                  value={inputData.inputNama}
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Tahun</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  onChange={tahunData}
                  value={inputData.inputTahun}
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">hobby</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={hobbyData}
                  value={inputData.inputHobby}
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <button className="btn btn-warning">Submit Data</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KerangkanInput;
