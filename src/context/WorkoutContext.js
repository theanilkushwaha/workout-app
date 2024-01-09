// import { createContext, useReducer } from 'react'

// export const WorkoutsContext = createContext()

// export const workoutsReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_WORKOUTS':
//       return { 
//         workouts: action.payload 
//       }
//     case 'CREATE_WORKOUT':
//       return { 
//         workouts: [action.payload, ...state.workouts] 
//       }
//     case 'DELETE_WORKOUT':
//       return { 
//         workouts: state.workouts.filter(w => w._id !== action.payload._id) 
//       }
//     default:
//       return state
//   }
// }

// export const WorkoutsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(workoutsReducer, { 
//     workouts: null
//   })
  
//   return (
//     <WorkoutsContext.Provider value={{ ...state, dispatch }}>
//       { children }
//     </WorkoutsContext.Provider>
//   )
// }





import React, { createContext, useReducer, useEffect } from 'react';

export const WorkoutsContext = createContext();

export const actionTypes = {
  SET_WORKOUTS: 'SET_WORKOUTS',
  CREATE_WORKOUT: 'CREATE_WORKOUT',
  DELETE_WORKOUT: 'DELETE_WORKOUT',
};

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_WORKOUTS:
      return { 
        workouts: action.payload 
      };
    case actionTypes.CREATE_WORKOUT:
      return { 
        workouts: [action.payload, ...state.workouts] 
      };
    case actionTypes.DELETE_WORKOUT:
      return { 
        workouts: state.workouts.filter(w => w._id !== action.payload._id) 
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null
  });

  // Automatic re-rendering when state changes
  useEffect(() => {
    // Force re-rendering when state changes
    WorkoutsContext.displayName = 'WorkoutsContext';
  }, [state]);

  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  );
};
