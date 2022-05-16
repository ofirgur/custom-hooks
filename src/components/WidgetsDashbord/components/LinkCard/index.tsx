import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WidgetDashboardItem } from '../../types';
import { Styled } from './styled';

type LinkCardProps = {
  widget: WidgetDashboardItem;
};

const LinkCard = (props: LinkCardProps) => {
  const { widget } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(widget.path);
  };

  return (
    <Styled onClick={handleClick}>
      {widget.title}
    </Styled>
  );
};

export default LinkCard;
