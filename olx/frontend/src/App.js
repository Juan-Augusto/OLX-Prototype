import React from "react";
import { connect } from "react-redux";


const Page = (props) => {
  return (
    <>
      <h1>Funcionando</h1>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    user:state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);