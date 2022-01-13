import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 348, text: 'Total Time'},
  { number: 267, text: 'PIC', },
  { number: 19, text: 'unique aircraft in logbook', },
  { number: 31, text: 'unique airports', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Aviation Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
