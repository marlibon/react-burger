import React, { ReactNode, CSSProperties } from 'react';
import styles from './header-button.module.css';
import clsx from 'clsx';

interface HeaderButtonProps {
  children: ReactNode;
  text: string;
  addedClassName?: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  children,
  text,
  addedClassName
}) => {
  return (
    <button
      className={clsx(styles.button, 'mr-2', addedClassName)}
      type="button"
    >
      {children}
      <span className={'text text_type_main-default'}>{text}</span>
    </button>
  );
};

export default HeaderButton;
