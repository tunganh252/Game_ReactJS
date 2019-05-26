import React, { Component } from "react";
import XucXac from "./XucXac";
import DanhSachCuoc from "./DanhSachCuoc";

export default class GameBauCua extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3 className="display-4 text-success text-center">Game Bầu Cua</h3>
        <div className="row">
          <div className="col">
            <XucXac />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <DanhSachCuoc />
          </div>
        </div>
      </div>
    );
  }
}
