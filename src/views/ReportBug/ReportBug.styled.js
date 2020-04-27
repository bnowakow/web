import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

const resolveDefaultColor = defaultColor => ({ color }) =>
  color || defaultColor;

const resolveDefaultFontWeight = defaultFontWeight => ({ fontWeight }) =>
  fontWeight || defaultFontWeight;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  color: #1b1b1b;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: ${resolveDefaultFontWeight(FontWeight.Normal)};
  color: ${resolveDefaultColor(Color.black)};
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;
