import styled from '@emotion/styled';
import vIcon from '../../assets/images/v.svg';
import xIcon from '../../assets/images/x.svg';

export const SimpleCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type SimpleImageProps = {
  image: string;
};

export const SimpleImage = styled.div<SimpleImageProps>`
width: 110px;
height: 190px;
border-radius: 10px;
background-image: url(${props => props.image});
background-size: cover;
`;

export const SimpleTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  width: 100px;
  padding: 10px;
`;

type SimpleMatchProps = {
  correct: boolean;
};

export const SimpleMatch = styled.div<SimpleMatchProps>`
  width: 25px;
  height: 25px;
  background-image: url(${p => (p.correct ? vIcon : xIcon)});
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  top: -7px;
  right: -7px;
`;
