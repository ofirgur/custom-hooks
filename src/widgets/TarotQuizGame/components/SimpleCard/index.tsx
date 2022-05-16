import React from 'react';
import { SimpleCardProps } from '../../utils/types';
import { SimpleCardStyled, SimpleImage, SimpleTitle, SimpleMatch } from './styled';

const SimpleCard = (props: SimpleCardProps) => {
  const { name, image, correct } = props;

  return (
    <SimpleCardStyled>
      <SimpleImage image={image} />
      {name && <SimpleTitle>{name}</SimpleTitle>}
      {correct !== undefined && <SimpleMatch correct={correct} />}
    </SimpleCardStyled>
  );
};

export default SimpleCard;
