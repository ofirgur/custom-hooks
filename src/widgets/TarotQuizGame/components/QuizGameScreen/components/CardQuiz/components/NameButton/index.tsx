import React from 'react';
import { NameButtonProps } from '../../../../../../utils/types';
import { NameButtonStyled } from './styled';

const NameButton = (props: NameButtonProps) => {
  const { name, onClick, disabled } = props;
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <NameButtonStyled
      onClick={handleClick}
      disabled={disabled}
    >
      {name}
    </NameButtonStyled>
  );
};

export default NameButton;
