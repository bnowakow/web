import React, { useEffect } from 'react';
import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';

import Routes from '../../../../routes';
import { useHistory } from 'react-router-dom';
import useLoaderContext from '../../../../hooks/useLoaderContext';

const ModalConfirmation = () => {
  const { onClose } = useModalContext();
  const history = useHistory();
  const { setLoader } = useLoaderContext();

  const handleClose = () => {
    setLoader(true);
    setTimeout(() => setLoader(false), 15000);
    history.push(Routes.Home);

    console.log( 'storage: check' );
    console.log(localStorage);

    console.log( 'location reload: 5s' );
    setTimeout(() => { window.location.reload() }, 5000);

    onClose();
  }

  return (
    <div className="user-data__modal-confirmation">
      <h4 className="text-center">Twoje dane zostały wymazane.</h4>
      <Button onClick={handleClose} text="OK" />
    </div>
  );
};

export default ModalConfirmation;
