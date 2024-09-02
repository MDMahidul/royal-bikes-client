import { FC, useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const LoadingUpButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* toggle button visibility */
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      {isVisible && (
        <motion.div
          initial={{ y: 20, scale: 0.7 }}
          animate={{
            scale: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.3,
            },
          }}
          whileHover={{ scale: 1.1}}
          className="fixed bottom-8 right-4 bg-secondary text-white   rounded-full z-50 text-3xl p-1 cursor-pointer"
          onClick={handleScrollToTop}
        >
          <FaAngleUp />
        </motion.div>
      )}
    </div>
  );
};

export default LoadingUpButton;
