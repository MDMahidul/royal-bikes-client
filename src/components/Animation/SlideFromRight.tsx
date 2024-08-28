import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type SlideInFromRightProps = {
  children: ReactNode;
  custom?: number;
};

const SlideInFromRight = ({ children, custom }: SlideInFromRightProps) => {
  const slideInFromRight: Variants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.07 * index,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      variants={slideInFromRight}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={custom}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromRight;
