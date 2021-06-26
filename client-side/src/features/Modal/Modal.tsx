import React from 'react';

interface IProps {
  className?: string;
}

const Modal: React.FC<IProps> = ({
  className = '',
  children
}) => {
  return (
    <section className={`modal ${className}`}>
      {children}
    </section>
  );
};

export default  Modal;