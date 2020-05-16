import React from "react";
import { connect } from "react-redux";
import { changeDoingAC, addDoingAC } from "../../reducers/toDoReducer";
import style from "./components.module.scss";

const Main = ({ newDoing, addDoingAC, changeDoingAC }) => {
  const add = () => {
    if (newDoing) {
      addDoingAC();
    }
  };
  return (
    <div>
      <h1>To do</h1>
      <input
        type="text"
        value={newDoing}
        onChange={(e) => changeDoingAC(e.target.value)}
        placeholder="Add some new tasks to do"
        className={style.mainInput}
      />
      <button onClick={add} className={style.addButton}>
        Add
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  doings: state.toDoReducer.doings,
  newDoing: state.toDoReducer.newDoing,
});

export default connect(mapStateToProps, { changeDoingAC, addDoingAC })(Main);
