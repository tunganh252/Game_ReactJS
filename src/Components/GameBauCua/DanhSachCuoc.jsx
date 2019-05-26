import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachCuoc extends Component {
  renderItem = () => {
    return this.props.mangCuoc.map((item, index) => {
      return (
        <div className="col-md-4 mt-5" key={index}>
          <button 
          onClick = {()=>this.props.datCuoc(item.id)}
          className="btn btn-success d-flex justify-content-center align-items-center">
            <img 
            style={{width: '200px', height: '200px'}}
            className="mr-2" src={item.hinhAnh} alt="hinhanh" />
            <p className='display-4 dis'>
              <span>+</span>
            {item.diemCuoc}</p>
              <span>-</span>
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderItem()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { mangCuoc: state.gamePlayStoreReducer.mangCuoc };
};

const mapDispatchToProps = dispatch => {
  return {
    datCuoc:(id) => {
      dispatch({
        type: 'DAT_CUOC',
        id:id
      });
    },
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DanhSachCuoc);
