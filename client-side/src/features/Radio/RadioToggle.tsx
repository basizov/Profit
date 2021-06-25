import React from 'react';

interface IProps {
  name: string;
  onChange?: () => void;
}

const RadioToggle: React.FC<IProps> = ({
  name,
  onChange
}) => {
  return (
    <input
      className='radio-toggle'
      name={name}
      onChange={onChange}
      type='checkBox' />
  );
};

export default  RadioToggle;