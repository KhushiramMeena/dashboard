import React from 'react';
import { motion } from 'framer-motion';
import { Box, Card, CardContent, Typography } from '@mui/material';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;

