export const Variants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        // duration: 0.3,
        stiffness: 200,
        damping: 15,
      },
    },
  };