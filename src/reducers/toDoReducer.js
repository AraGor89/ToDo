const ADD_DOING = "ADD_DOING";
export const addDoingAC = () => ({ type: ADD_DOING });
const CHANGE_DOING = "CHANGE_DOING";
export const changeDoingAC = (newDoing) => ({ type: CHANGE_DOING, newDoing });
const DELETE_DOING = "DELETE_DOING";
export const deleteDoingAC = (id) => ({ type: DELETE_DOING, id });
const EDIT_DOING = "EDIT_DOING";
export const editDoingAC = (newDoing, id) => ({
  type: EDIT_DOING,
  newDoing,
  id,
});

const initialState = {
  doings: [],
  newDoing: "",
};
console.log();
const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DOING:
      return {
        ...state,
        newDoing: action.newDoing,
      };
    case ADD_DOING:
      return {
        ...state,
        doings: [...state.doings, { newDoing: state.newDoing, id: Date.now() }],
        newDoing: "",
      };
    case DELETE_DOING:
      return {
        ...state,
        doings: [...state.doings.filter((d) => d.id !== action.id)],
      };
    case EDIT_DOING:
      return {
        ...state,
        doings: state.doings.map((d) => {
          if (d.id === action.id) {
            return { newDoing: action.newDoing, id: action.id };
          }
          return d;
        }),
      };
    default:
      return state;
  }
};

export default toDoReducer;
