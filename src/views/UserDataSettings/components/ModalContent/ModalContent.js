import React from 'react';
import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import { ModalConfirmation } from '../ModalConfirmation';

const ModalContent = () => {
  const { onClose, openModal } = useModalContext();

  const handleErase = () => {
    localStorage.clear();
    openModal(<ModalConfirmation />, 'dialog');

    console.log( 'storage: check' );
    console.log(localStorage);
  };

  return (
    <div className="user-data__modal-content">
      <h4 className="text-center medium-2">Czy jesteś pewien?</h4>
      <p className="text-center medium">
        Tej operacji nie da się odwrócić. Stracisz całą historię, wszystkie
        podane dane a także zostaniesz przeniesiony/a do pierwszego ekranu.
        Jeżeli będziesz chciał/a korzystać dalej z aplikacji będziesz musiał/a
        podać jeszcze raz wszystkie swoje dane.
      </p>
      <div className="buttons">
        <Button onClick={handleErase} text="Tak" />
        <Button onClick={onClose} text="Nie" />
      </div>
    </div>
  );
};

export default ModalContent;
