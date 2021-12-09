import { getCoin, getCoinOHLC } from '../api/coins';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

import { ICoinInfo } from '../types/coins.type';
import styled from 'styled-components';

export default function Detail() {
  const { coinId } = useParams<{ coinId: string }>();

  const {
    isLoading: infoLoading,
    data: infoData,
    error: infoError,
  } = useQuery<ICoinInfo>(['INFO', coinId], () => getCoin(coinId));
  const {
    isLoading: ohlcLoading,
    data: ohlcData,
    error: ohlcError,
  } = useQuery(['OHLC', coinId], () => getCoinOHLC(coinId));
  if (infoLoading || ohlcLoading) return <span>IsLoading...</span>;

  return (
    <Layout>
      <Heading>
        <h1>{infoData?.name}</h1>
        <p>{infoData?.description}</p>
      </Heading>
      <ChartContainer></ChartContainer>
    </Layout>
  );
}

const Layout = styled.div({});
const Heading = styled.header(
  {
    textAlign: 'center',
    padding: '1em',
    h1: {
      fontSize: '5rem',
      fontWeight: '400',
      marginBottom: '.1em',
    },
    p: {
      fontSize: '1.2rem',
      width: '50%',
      margin: '0 auto',
      lineHeight: '1.2em',
      letterSpacing: '1px',
    },
  },
  ({ theme }) => ({
    background: theme.colors.background_elevation,
  })
);
const ChartContainer = styled.div({});
