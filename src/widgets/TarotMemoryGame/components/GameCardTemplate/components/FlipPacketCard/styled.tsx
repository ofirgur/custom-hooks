import styled from '@emotion/styled';
import closeCardImage from '../../../../assets/images/card.png';

type FlipPacketCardStyledProps = {
  isMatched: boolean;
};

export const FlipPacketCardStyled = styled.div<FlipPacketCardStyledProps>`
  flex: 0 0 23%;
  position: relative;
  margin: 1%;
  opacity: ${p => (p.isMatched ? '0.5' : '1')};
`;

export const FlipCardStyled = styled.div`
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  cursor: pointer;
  width: 100%;
  padding-top: 179.6%;
`;

type FlipCardInnerStyledProps = {
  flip: boolean;
};

export const FlipCardInnerStyled = styled.div<FlipCardInnerStyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
  transform: ${props => props.flip && 'rotateY(180deg)'};
`;

const SharedStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
`;

export const FlipCardFrontStyled = styled(SharedStyle)`
  background-image: url(${closeCardImage});
  background-size: cover;
  background-position: center center;
`;

type FlipCardBackStyledProps = {
  image: string;
};

export const FlipCardBackStyled = styled(SharedStyle) <FlipCardBackStyledProps>`
  background-color: #F2D4AD;
  transform: rotateY(180deg);
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
`;
