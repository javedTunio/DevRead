import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function useCorrectScrollBehavior() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (navigationType === "POP") {
      // Do nothing when using browser back/forward
      // The browser will automatically restore the scroll position
    } else {
      // For 'PUSH' or 'REPLACE' (new navigation), scroll to top
      window.scrollTo(0, 0);
    }

    prevPathRef.current = pathname;
  }, [pathname, navigationType]);

  return null;
}

export default useCorrectScrollBehavior;
