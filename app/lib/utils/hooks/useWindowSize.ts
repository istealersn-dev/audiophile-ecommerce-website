import { useLayoutEffect, useState } from "react";

type WindowSize<T extends number | undefined = number | undefined> = {
    innerWidth: T;
    innerHeight: T;
};

/**
 * Hook that tracks the browser window size.
 *
 * Initializes state with width and height of 0.
 * On mount, sets state to current window width/height.
 * Adds a resize event listener to update state when window resized.
 * Returns object with innerWidth and innerHeight state.
 */
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    innerWidth: 0,
    innerHeight: 0,
  });

  useLayoutEffect(() => {
    function handleSizeChange() {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    }

    handleSizeChange();
    window.addEventListener("resize", handleSizeChange);
    return (): void => window.removeEventListener("resize", handleSizeChange);
  }, []);

  return windowSize;
};

export default useWindowSize