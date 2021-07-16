import { createContext, useReducer } from 'react';

export const SwitchPlayerContext = createContext(null);

export const switchPlayerReducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH':
      return !state;

    default:
      return state;
  }
};

const SwitchProvider = ({ children }) => {
  const [switchValue, switchDispatch] = useReducer(switchPlayerReducer, true);

  return (
    <SwitchPlayerContext.Provider value={{ switchValue, switchDispatch }}>
      {children}
    </SwitchPlayerContext.Provider>
  );
};

export default SwitchProvider;
