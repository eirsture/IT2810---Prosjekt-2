import React from 'react';

const CustomSound = ({ sound }) => {
  return (
    <div>
      <audio controls loop src={sound}>
        Audio
      </audio>
    </div>
  );
};

export default CustomSound;
