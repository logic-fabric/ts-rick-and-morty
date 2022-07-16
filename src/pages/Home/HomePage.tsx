import React, { useContext, useEffect } from "react";

import { StoreContext } from "../../store/store";
import { fetchAllEpisodesAction } from "../../store/actions";

export function HomePage(): JSX.Element {
  const { store, dispatch } = useContext(StoreContext);

  useEffect(() => {
    if (store.episodes.length === 0) {
      fetchAllEpisodesAction(dispatch);
    }

    console.log({ store });
  }, [store, dispatch]);

  return (
    <main>
      <h1>Rick and Morty mini app</h1>
    </main>
  );
}
