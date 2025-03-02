import React from 'react';
import { DiFirebase, DiReact, DiBackbone, BiTrendingUp, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="ratings">
    <SectionDivider divider />
    <SectionTitle>Ratings</SectionTitle>
    <SectionText>
      One rating is never enough.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Single Engine Land</ListTitle>
          <ListParagraph>
            Favorite PIC <br />
            DHC-2
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Single Engine Sea</ListTitle>
          <ListParagraph>
            Favorite Float PIC <br />
            PA-11 no electrical system
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Next rating sought</ListTitle>
          <ListParagraph>
            Instrument <br />
            Glider
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
