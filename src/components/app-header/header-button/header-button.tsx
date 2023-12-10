import React, { ReactNode, CSSProperties } from 'react';
import styles from './header-button.module.css';
import clsx from 'clsx';

interface HeaderButtonProps {
  children: ReactNode;
  text: string;
  otherStyles?: CSSProperties;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  children,
  text,
  otherStyles
}) => {
  return (
    <button
      className={clsx(styles.button, 'mr-2')}
      type="button"
      style={otherStyles}
    >
      {children}
      <span className={'text text_type_main-default'}>{text}</span>
    </button>
  );
};

export default HeaderButton;
