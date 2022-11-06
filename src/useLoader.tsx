import React, { ComponentProps, Suspense } from "react";
import { lazy, useCallback, useState } from "react";
import type * as Loaders from "./index";

export function useLoader<T extends keyof typeof Loaders>(
  name: T,
  params?: Omit<ComponentProps<typeof Loaders[T]>, "loading">
) {
  const [loading, setLoading] = useState(true);

  const toggleLoader = useCallback(() => {
    setLoading((preState) => !preState);
  }, []);

  const Loader = lazy(() => import(`./${name}`));

  return {
    Loader: () => (
      <Suspense>
        <Loader {...params} loading={loading} />
      </Suspense>
    ),
    toggleLoader,
  };
}
