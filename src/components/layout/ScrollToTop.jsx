import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ scrollRef }) {
  const location = useLocation();

  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [location.pathname, scrollRef]);

  return null;
}