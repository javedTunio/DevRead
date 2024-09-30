import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function useCorrectScrollBehavior() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (navigationType === "POP") {
      //if type is 'POP' it means if going back or forward, do nothing browser will handle itself,
    } else {
      // if PUSH, means adding new path , then scroll to top
      window.scrollTo(0, 0);
    }

    // Update prevPathRef setting the current pathname // not usefull here but can be used in future
    prevPathRef.current = pathname;
  }, [pathname, navigationType]);

  return null;
}

export default useCorrectScrollBehavior;
