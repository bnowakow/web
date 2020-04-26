import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ qrCode, color }) => {
  return <QRCode renderAs="svg" value={qrCode} fgColor={color} />;
};

QRCodeGenerator.defaultProps = {
  color: '#000000'
};

QRCodeGenerator.propTypes = {
  qrCode: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default QRCodeGenerator;
