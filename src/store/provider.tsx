import React, { useReducer } from "react";

import { initialState, StoreContext } from "./store";
import { reducer } from "./reducer";

export function StoreProvider(props: any): JSX.Element {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
}
