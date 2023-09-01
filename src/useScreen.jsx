import { useState, useEffect } from "react";
export default function useScreen() {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.addEventListener("resize", checkScreenSize);
    };
  }, []);

  const checkScreenSize = () => {
    if (window.innerWidth < 1600 && window.innerWidth > 1000) {
      return setScreenSize("Laptop ");
    } else if (window.innerWidth < 992 && window.innerWidth > 600) {
      return setScreenSize("Tablet ");
    } else if (window.innerWidth < 600) {
      return setScreenSize("Mobile ");
    } else {
      return setScreenSize("Desktop ");
    }
  };

  return screenSize;
}
