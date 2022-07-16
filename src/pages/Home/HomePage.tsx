import React, { useContext, useEffect } from "react";

import { IState, StoreContext } from "../../store/store";

export function HomePage(): JSX.Element {
  const store: IState = useContext(StoreContext);

  useEffect(() => {
    console.log({ store });
  }, [store]);

  return (
    <main>
      <h1>Rick and Morty mini app</h1>
    </main>
  );
}
