import React from 'react';

const CustomButton = ({ text, color,textColor, onClick }) => {
  const buttonStyle = {
    backgroundColor: color,
    border: 'none',
    color: textColor ,
    fontSize: '14px',
    fontFamily: 'Mona-Sans-Medium',
    width: '100px',
    height: '36px',
    borderRadius: '6px',
    marginRight: '10px',
    cursor: 'pointer',
    
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
