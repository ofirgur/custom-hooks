import React, { useState } from 'react';

import { PacketCard } from '../../../../utils/types';
import { FlipPacketCardStyled, FlipCardStyled, FlipCardInnerStyled, FlipCardFrontStyled, FlipCardBackStyled } from './styled';

type FlipPacketCardProps = {
  packetCard: PacketCard;
  isMatched: boolean;
  onClick: (packetCard: PacketCard, setOpen: (open: boolean) => void, setStop: (stop: boolean) => void) => void;
};

const FlipPacketCard = (props: FlipPacketCardProps) => {
  const { packetCard, onClick, isMatched } = props;
  const [open, setOpen] = useState(false);
  const [stop, setStop] = useState(false);
  const handleClick = () => {
    if (stop) return;
    onClick(packetCard, setOpen, setStop);
  };

  return (
    <FlipPacketCardStyled
      isMatched={isMatched}
      onClick={handleClick}
    >
      <FlipCardStyled>
        <FlipCardInnerStyled className="flip-card-inner" flip={open}>
          <FlipCardFrontStyled />
          <FlipCardBackStyled image={packetCard.image} />
        </FlipCardInnerStyled>
      </FlipCardStyled>
    </FlipPacketCardStyled>
  );
};

export default FlipPacketCard;
