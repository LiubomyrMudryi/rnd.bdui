import { lazy, useCallback } from "react";
import { IInstractions } from "../interfaces/instractions";

export const useRenderComponent = () => {
  const render = useCallback(({ name, props, children }: IInstractions) => {
    const Component = lazy(() => import(`../components/${name}`));

    if (children) {
      return <Component {...props}>{children}</Component>;
    }

    return <Component {...props} />;
  }, []);

  return render;
};
