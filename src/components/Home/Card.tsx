import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ICard {
  id: string;
  url: string;
  name: string;
  rank: number;
}

export default function Card({ id, url, name, rank }: ICard) {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={url} />
      </ImageContainer>
      <Content>
        <h3>{name}</h3>
        <span>#{rank}</span>
      </Content>
      <StyledLink to={`/${id}`}>more</StyledLink>
    </Wrapper>
  );
}

const Wrapper = styled.div(
  {
    position: 'relative',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em',
    marginBottom: '1em',
  },
  ({ theme }) => ({
    background: theme.colors.background_elevation,
  })
);
const ImageContainer = styled.div({
  '> img': {
    width: '80px',
  },
  marginBottom: '1em',
});
const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  h3: {
    fontSize: '1.7rem',
    fontWeight: '300',
  },
  span: {
    margin: '.5em 0',
  },
});

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'absolute',
  fontSize: '0.7rem',
  fontWeight: '700',
  bottom: '1em',
  right: '1em',
  background: theme.colors.primary.cyan,
  color: theme.colors.background,
  padding: '.5em .8em',
  borderRadius: '5px',
  textTransform: 'uppercase',
}));
