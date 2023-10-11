import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const Paragraph = ({children}: PropsWithChildren) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
       {children}
      </motion.div>
    )
}