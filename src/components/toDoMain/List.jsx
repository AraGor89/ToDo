import React from "react";
import style from "./components.module.scss";
import deleteButton from "../../images/delete.png";

const List = ({ doings, edit, deleteItem }) => {
  let listElements = doings.map((d) => {
    return (
      <div key={d.id} className={style.list}>
        <input
          type="text"
          value={d.newDoing}
          onChange={(e) => edit(e.target.value, d.id)}
          className={style.listItem}
        />
        <img
          src={deleteButton}
          alt="delete"
          onClick={(e) => deleteItem(d.id)}
          className={style.delButton}
        />
      </div>
    );
  });
  return <div>{listElements}</div>;
};
export default List;
