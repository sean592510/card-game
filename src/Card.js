import React from 'react';
import { motion } from 'framer-motion';

function Card({ emoji, isFlipped, isMatched, onClick }) {
  return (
    <motion.div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
      animate={{
        rotateY: isFlipped ? 180 : 0,
        scale: isMatched ? 1.1 : 1, // Scale up on match
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{emoji}</div>
      </div>
    </motion.div>
  );
}

export default Card;
