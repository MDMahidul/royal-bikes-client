import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type ZoomInEffectProps = {
  children: ReactNode;
  custom?: number;
};

const ZoomInEffect = ({ children, custom }: ZoomInEffectProps) => {
  const zoomInEffect: Variants = {
    initial: {
      opacity: 0,
      scale: 0.8, // Initial scale for zoom-in effect
    },
    animate: (index: number) => ({
      opacity: 1,
      scale: 1, // Final scale for zoom-in effect
      transition: {
        delay: 0.07 * index,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      variants={zoomInEffect}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={custom}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInEffect;
