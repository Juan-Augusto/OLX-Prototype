import React from "react";
import './App.css'
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Template } from "./Components/MainComponents";
import Header from "./Components/Partials/Header";
import Footer from "./Components/Partials/Footer";

const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
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