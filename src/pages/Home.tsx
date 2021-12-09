import { useQuery } from 'react-query';
import { getCoins } from '../api/coins';

import { ICoin } from '../types/coins.type';
import List from '@components/Home/List';
import styled from 'styled-components';
import HeadImage from '../assets/bg-desktop-dark.jpg';

export default function Home() {
  const { isLoading, data, error } = useQuery<ICoin[]>('allCoins', getCoins);
  if (isLoading) <span>isLoading...</span>;
  return (
    <Layout>
      <Heading>
        <img src={HeadImage} />
        <h1>Crypto Traker</h1>
      </Heading>
      <List coins={data?.slice(0, 12)} />
    </Layout>
  );
}

const Heading = styled.header({
  position: 'relative',
  height: '280px',
  textAlign: 'center',
  marginBottom: '2em',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },
  h1: {
    position: 'absolute',
    fontSize: '4.5rem',
    top: '50%',
    left: '10%',
  },
});

const Layout = styled.div({});
