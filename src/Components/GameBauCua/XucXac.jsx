import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucSac = () => {
    return this.props.xucXac.map((item, index) => {
      return (
        <div 
        key={index} className="d-flex m-2">
          <img
            style={{ width: "70px", height: "70px" }}
            src={item.hinhAnh}
            alt={item.id}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div
          className="row d-flex align-items-center"
          style={{ justifyContent: "space-around" }}
        >
          <div className="col-3">
            <button
            onClick={()=>this.props.choiGame()}
            style={{ fontSize: "1.5rem" }} className="btn btn-danger">
              Chơi Ngay
            </button>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center">{this.renderXucSac()}</div>
          </div>
          <div className="col-3">
            <span className="display-4">{this.props.tongDiem} BTC</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    xucXac: state.gamePlayStoreReducer.xucXac,
    tongDiem: state.gamePlayStoreReducer.tongDiem
  };
};

const mapDispatchToProps = dispatch => {
  return{
    choiGame: () => {
      dispatch({
        type:'CHOI_GAME',
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XucXac);
