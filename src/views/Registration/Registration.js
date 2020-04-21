import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { saveUser } from '../../store/actions/user';
import * as constants from '../../constants';
import { chronicSickValues } from '../../constants';
import useInstallApp from '../../hooks/useInstallApp';
import { EXPLAINER_STEP, SPLASH_SCREEN_STEP } from './Registration.constants';
import { StartScreen } from '../StartScreen';
import { Explainer } from './components/Explainer';
import { ImprintFiller } from '../../components/ImprintFiller';

const Registration = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(SPLASH_SCREEN_STEP);

  useInstallApp();

  if (step === SPLASH_SCREEN_STEP) {
    return <StartScreen onStartClick={() => setStep(EXPLAINER_STEP)} />;
  }

  if (step === EXPLAINER_STEP) {
    return <Explainer onFinishClick={() => setStep(undefined)} />;
  }

  const initialValues = {
    [constants.FIELD_AGE]: '',
    [constants.FIELD_SEX]: '',
    [constants.FIELD_NAME]: '',
    // [constants.FIELD_PHONE]: '',
    [constants.FIELD_BLOOD_GROUP]: '',
    step: 1,
    [constants.FIELD_TERM1]: false
  };

  const validationSchema = Yup.object().shape({
    [constants.FIELD_NAME]: Yup.string()
      .min(3, 'Za krótkie imię')
      .max(20, 'Za długie imię')
      .required('Imię jest wymagane'),
    [constants.FIELD_PHONE]: Yup.string().required(
      'Numer telefonu jest wymagany'
    ),
    [constants.FIELD_TERM1]: Yup.boolean().oneOf(
      [true],
      'Proszę zaznaczyć zgodę'
    ),
    [constants.FIELD_AGE]: Yup.number()
      .min(1, 'Za mały wiek')
      .max(150, 'Za duży wiek')
      .required('Wiek jest wymagany')
  });

  const resolveSex = field => {
    switch (field) {
      case constants.VALUE_MAN:
        return 'male';
      case constants.VALUE_WOMAN:
        return 'female';
      default:
        return '';
    }
  };

  const handleSubmit = form => {
    const chronicSicks = chronicSickValues
      .filter(sick => form[sick.field])
      .map(sick => {
        return { name: sick.field, description: form[sick.description] };
      });

    const data = {
      name: form[constants.FIELD_NAME],
      phone: form[constants.FIELD_PHONE],
      sex: resolveSex(form[constants.FIELD_SEX]),
      age: form[constants.FIELD_AGE],
      chronicSicks: [...chronicSicks],
      bloodGroup: form[constants.FIELD_BLOOD_GROUP],
      smokeNumber: form[constants.FIELD_SMOKE_NUMBER]
    };

    dispatch(saveUser(data));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <ImprintFiller />
    </Formik>
  );
};

export default Registration;
