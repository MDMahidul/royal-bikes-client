import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type FadeInUpAnimationProps = {
  children: ReactNode;
  custom?: number;
};

const FadeInUpAnimation = ({ children, custom }: FadeInUpAnimationProps) => {
  const fadeInAnimation: Variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.07 * index,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={custom}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpAnimation;
