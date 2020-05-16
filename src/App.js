import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Main from "./components/toDoMain/Main";
import List from "./components/toDoMain/List";
import { deleteDoingAC, editDoingAC } from "./reducers/toDoReducer";

function App({ doings, deleteDoingAC, editDoingAC }) {
  return (
    <div className="App">
      <Main />
      <List doings={doings} deleteItem={deleteDoingAC} edit={editDoingAC} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  doings: state.toDoReducer.doings,
});
export default connect(mapStateToProps, { deleteDoingAC, editDoingAC })(App);
