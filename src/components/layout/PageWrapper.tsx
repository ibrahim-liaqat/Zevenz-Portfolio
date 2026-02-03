import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
