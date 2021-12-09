import React from 'react';
import Card from './Card';
import { ICoin } from '../../types/coins.type';
import styled from 'styled-components';

import { getIconURL } from '../../api/icons';

export default function List({ coins }: { coins?: ICoin[] }) {
  return (
    <Container>
      {coins?.map(({ id, name, symbol, rank }) => (
        <Card id={id} url={getIconURL(symbol)} name={name} rank={rank} />
      ))}
    </Container>
  );
}

const Container = styled.div({
  margin: '0 auto',
  marginBottom: '1em',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',

  '> *': {
    margin: '0 .5em',
    marginTop: '1em',
  },
});
