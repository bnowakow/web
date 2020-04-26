import styled from 'styled-components';

export const QualificationContainer = styled.div`
  grid-template-areas: 'name' 'text_wrapper';
  grid-template-rows: auto auto;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  grid-area: text_wrapper;
`;

export const UserName = styled.div`
  display: grid;
  grid-area: name;
  margin-bottom: 9px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: #1b1b1b;
`;

export const Text = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 216px;
  p {
    font-size: 16px;
    line-height: 1.44;
    color: #1b1b1b;
  }
`;

export const IconSmile = styled.div`
  display: flex;
  width: calc(100% - 216px);
  justify-content: center;
  align-items: center;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const QRCodeWrapper = styled.div`
  display: flex;
  width: calc(100% - 216px);
  justify-content: center;
  align-items: center;
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
