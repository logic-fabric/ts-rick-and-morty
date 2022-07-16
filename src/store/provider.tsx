import React, { useContext } from "react";

import { IState, StoreContext } from "./store";

export function StoreProvider(props: any): JSX.Element {
  const store: IState = useContext(StoreContext);

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}
