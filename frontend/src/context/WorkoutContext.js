import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

// type describes the state change we want to make.
// payload represents any data we need to make this change. In this case, an array of workouts objects.
// the argument inside the dipatch function is known as an argument
//   dispatch({ type: "SET_WORKOUTS", payload: [{}, {}] });
// when we call the dispatch function, our reducer function is invoked. Which is the workoutsReducer function.
// the workoutsReducer function passes the action into the reducer function so that it can update the state using the data.

// workoutsReducer function
// state - the previous state, before we are making the change to it.
// action - object passed into the dispatch function
