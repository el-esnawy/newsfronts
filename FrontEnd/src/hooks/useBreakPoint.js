import { useState, useEffect } from "react";

function useBreakPoint(breakpoint) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const setWindowWidth = () => {
    setWindowSize(window.innerWidth);
  };
  window.addEventListener("resize", setWindowWidth);
  const [belowBP, setbelowBP] = useState(windowSize < breakpoint);

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);
    setbelowBP(windowSize < breakpoint);
    return () => window.removeEventListener("resize", setWindowWidth);
  }, [windowSize, breakpoint]);
  return belowBP;
}

export default useBreakPoint;
