import React, { ComponentProps, Suspense } from "react";
import { lazy, useCallback, useState } from "react";
import type * as Loaders from "./index";

export function useLoader<T extends keyof typeof Loaders>(
  name: T,
  params?: Omit<ComponentProps<typeof Loaders[T]>, "loading" | "color">
) {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState<string>("#ffffff");

  const toggleLoader = useCallback(() => {
    setLoading((preState) => !preState);
  }, []);

  const changeColor = useCallback((color: string) => {
    setColor(color);
  }, []);

  const Loader = lazy(() => import(`./${name}`));

  return {
    Loader: () => (
      <Suspense>
        <Loader {...params} loading={loading} color={color} />
      </Suspense>
    ),
    toggleLoader,
    changeColor,
  };
}
