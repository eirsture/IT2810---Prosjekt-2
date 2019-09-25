import React from 'react';

const CustomSound = ({ sound }) => {
  return (
    <div>
      <audio controls loop src={sound} />
    </div>
  );
};

export default CustomSound;
