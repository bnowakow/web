import React from 'react';
import { QRCodeGenerator } from '../QRCodeGenerator';

import {
  TextWrapper,
  QualificationContainer,
  UserName,
  Text,
  QRCodeWrapper
} from './Qualification.styled';

const Qualification = ({ color, userName, lastDate, riskGroup, qrCode }) => {
  return (
    <QualificationContainer>
      <UserName>{userName},</UserName>
      <TextWrapper>
        <Text>
          <p>
            przeanalizowaliśmy Twoje odpowiedzi. Wynik testu z{' '}
            <strong>{lastDate}</strong> kwalifikuje Cię do grupy:&nbsp;
            <strong>{riskGroup}</strong>.
          </p>
        </Text>
        <QRCodeWrapper>
          <QRCodeGenerator qrCode={qrCode} color={color} />
        </QRCodeWrapper>
      </TextWrapper>
    </QualificationContainer>
  );
};

export default Qualification;
