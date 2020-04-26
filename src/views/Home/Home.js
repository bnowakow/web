import React from 'react';

import {
  Badge,
  Container,
  Qualification,
  Info,
  InfoBorder,
  BordersButton
} from '../../components';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import './Home.scss';
import { Icon } from '../RiskTest/RiskTest.styled';

const Home = ({
  lastDate,
  infoContent,
  seriousNames,
  riskColor,
  riskDescription,
  riskGroup,
  riskInfo,
  showBadge,
  triage,
  userName,
  onClickGoToDiagnosis
}) => {
  return (
    <div className="view view__home">
      <Header hideBackButton />
      <Container>
        {showBadge && <Badge />}
        <Qualification
          userName={userName}
          lastDate={lastDate}
          riskGroup={riskGroup}
          qrCode="https://safesafe-stage.thecoders.io/"
          color={riskColor}
        />
        <BordersButton
          onClick={onClickGoToDiagnosis}
          text="Wykonaj TEST oceny ryzyka"
          icon={<Icon />}
        />
        {triage && <Info color={riskColor} content={infoContent} />}
        {triage && (
          <InfoBorder
            content={riskDescription}
            color={riskColor}
            items={seriousNames}
          />
        )}
        {riskInfo}
        <div className="more-information">
          <h4>Więcej informacji</h4>
          <p>
            aktualne informacje na temat sytuacji epidemicznej oraz inne porady
            i wskazówki, znajdziesz na www.gov.pl/koronawirus
          </p>
          <small>
            Wyniki Testu służą wyłącznie celom informacyjnym oraz edukacyjnym.
            Nie traktuj ich jako konsultacji lub diagnozy lekarskiej.
          </small>
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default Home;
