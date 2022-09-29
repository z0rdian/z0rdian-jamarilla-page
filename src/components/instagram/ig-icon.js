import { useEffect, useState } from "react";
import classes from "../instagram/ig-icon.module.scss";
import { FaInstagram } from "react-icons/fa";

export const IgIcon = () => {
  const [isVisable, setIsVisable] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisable(true);
    } else {
      setIsVisable(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <a
        href="https://www.instagram.com/amarilla_construir/"
        type="button"
        className={`${classes.ig_icon} ${
          isVisable ? "opacity-1" : "opacity-0 "
        }`}
        aria-label="Right Align"
      >
        <FaInstagram aria-hidden="true" />
      </a>
    </div>
  );
};
