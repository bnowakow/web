import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

import { NUMBER_OF_STEPS } from './ImprintFiller.constants';

import {
  Age,
  BloodGroup,
  ChronicSick,
  Name,
  PhoneNumber,
  Sex,
  Smoke,
  Summary
} from './components';
import { GovFooter, Stepper } from '..';
import { Header } from '../Header';

import { Container, View } from '../../theme/grid';

const steps = {
  1: {
    Component: Name
  },
  2: {
    Component: PhoneNumber
  },
  3: {
    Component: Sex
  },
  4: {
    Component: Age
  },
  5: {
    Component: ChronicSick
  },
  6: {
    Component: BloodGroup
  },
  7: {
    Component: Smoke
  }
};

const ImprintFiller = ({ editMode }) => {
  const {
    values: { step }
  } = useFormikContext();

  useEffect(() => {
    if (window && window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [step]);

  if (step === 8) {
    return <Summary />;
  }

  const StepComponent = steps[step].Component;

  return (
    <View>
      <Header hideMenuButton hideBackButton />
      <Container>
        <Stepper currentStep={step} numberOfSteps={NUMBER_OF_STEPS} />
        <StepComponent editMode={editMode} />
        <GovFooter type="black" />
      </Container>
    </View>
  );
};

export default ImprintFiller;
