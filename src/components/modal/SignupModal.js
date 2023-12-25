import React, { useState } from 'react';
import Modal from 'react-modal';
import Confetti from 'react-dom-confetti';

// Set up confetti configuration
const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

const SignUpModal = ({ isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <h2>Congratulations!</h2>
        <p>You earned the sign-up badge!</p>
        <Confetti active={isOpen} config={confettiConfig} />
        <button onClick={onClose}>Close</button>
      </Modal>
    );
  };

export default SignUpModal;
