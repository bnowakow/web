import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

import { NUMBER_OF_STEPS } from './UserDataChange.constants';

import {
  Age,
  BloodGroup,
  ChronicSick,
  Name,
  Sex,
  Smoke,
  Summary
} from '../Registration/components';
import { GovFooter, Stepper } from '../../components';
import { Header } from '../../components/Header';

import { Container, View } from '../../theme/grid';

const steps = {
  1: {
    Component: Name
  },
  2: {
    Component: Sex
  },
  3: {
    Component: Age
  },
  4: {
    Component: ChronicSick
  },
  5: {
    Component: BloodGroup
  },
  6: {
    Component: Smoke
  }
};

const UserDataChange = () => {
  const {
    values: { step }
  } = useFormikContext();

  useEffect(() => {
    if (window && window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [step]);

  if (step === 7) {
    return <Summary />;
  }

  const StepComponent = steps[step].Component;

  return (
    <View>
      <Header hideMenuButton hideBackButton />
      <Container>
        <Stepper currentStep={step} numberOfSteps={NUMBER_OF_STEPS} />
        <StepComponent editMode />
        <GovFooter type="black" />
      </Container>
    </View>
  );
};

export default UserDataChange;
