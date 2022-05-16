import styled from '@emotion/styled';

export const Styled = styled.div`
  min-height: 100vh;
  padding: 24px;
  background-color: #16191D;
`;

export const Title = styled.h2`
  text-align: center;
  height: 70px;
  color: #fff;
`;

export const Widgets = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media only screen and (min-width: 690px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
