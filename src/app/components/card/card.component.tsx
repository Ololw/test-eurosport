import clsx from 'clsx';
import React from 'react';

type CardProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const CardComponent: React.FC<CardProps> = ({ children, onClick, className }: CardProps) => {
  const classes = clsx(className, 'p-8 rounded-lg border border-slate-200 shadow-md transition-shadow');

  return (
    <div data-testid="card" className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default CardComponent;
