import { useEffect, useState } from "react";
import "./scroll.css";

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);
  const visibilityToggle = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", visibilityToggle);
    return () => {
      window.removeEventListener("scroll", visibilityToggle);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className='back-to-top'>
          <i className='fas fa-angle-up'></i>
        </button>
      )}
    </>
  );
};

export default Scroll;
