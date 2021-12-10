import { getCoin, getCoinOHLC, getCoinPrice } from '../api/coins';
import { useQuery } from 'react-query';
import { Route, Switch, useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ApexChart from 'react-apexcharts';
import styled from 'styled-components';

import { ICoinInfo, ICoinOHLC, ICoinPrice } from '../types/coins.type';
import { candlestickOption } from '../constants';
import { ReactComponent as Home } from '../assets/home.svg';

export default function Detail() {
  const { coinId } = useParams<{ coinId: string }>();
  const history = useHistory();

  const {
    isLoading: infoLoading,
    data: infoData,
    error: infoError,
  } = useQuery<ICoinInfo>(['INFO', coinId], () => getCoin(coinId));

  const {
    isLoading: ohlcLoading,
    data: ohlcData,
    error: ohlcError,
  } = useQuery<ICoinOHLC[]>(['OHLC', coinId], () => getCoinOHLC(coinId));

  const {
    isLoading: priceLoading,
    data: priceData,
    error: priceError,
  } = useQuery<ICoinPrice>(['PRICE', coinId], () => getCoinPrice(coinId));

  if (infoLoading || ohlcLoading || priceLoading)
    return <span>IsLoading...</span>;

  const parsedChartData = ohlcData?.map(obj => {
    const { open, high, low, close, time_close } = obj;
    return {
      x: new Date(time_close),
      y: [open, high, low, close].map((price: number) => price.toFixed(2)),
    };
  });

  console.log(priceData);

  return (
    <Layout>
      <Heading>
        <BackBtn onClick={() => history.push('/')}>
          <Home width="1em" height="1em" />
        </BackBtn>
        <h1>{infoData?.name}</h1>
        <p>{infoData?.description}</p>
      </Heading>
      <Tabs>
        <Tab to={`/${coinId}/chart`}>Chart</Tab>
        <Tab to={`/${coinId}/price`}>Price</Tab>
      </Tabs>
      <Content>
        <Switch>
          <Route path={`/${coinId}/chart`}>
            <ChartContainer>
              <ApexChart
                series={[{ data: parsedChartData }]}
                type="candlestick"
                height={350}
                options={candlestickOption}
              />
            </ChartContainer>
          </Route>
          <Route path={`/${coinId}/price`}>
            <TableContainer>
              <TableItem>
                <strong>1시간 변동률</strong>
                <span>{priceData?.quotes.USD.percent_change_1h}</span>
              </TableItem>
              <TableItem>
                <strong>6시간 변동률</strong>
                <span>{priceData?.quotes.USD.percent_change_6h}</span>
              </TableItem>
              <TableItem>
                <strong>12시간 변동률</strong>
                <span>{priceData?.quotes.USD.percent_change_12h}</span>
              </TableItem>
              <TableItem>
                <strong>하루 변동률</strong>
                <span>{priceData?.quotes.USD.percent_change_24h}</span>
              </TableItem>
              <TableItem>
                <strong>일주일 변동률</strong>
                <span>{priceData?.quotes.USD.percent_change_7d}</span>
              </TableItem>
              <TableItem>
                <strong>한달 변동률</strong>
                <span>{priceData?.quotes.USD.percent_change_30d}</span>
              </TableItem>
            </TableContainer>
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
}

const Layout = styled.div({});
const Heading = styled.header(
  {
    position: 'relative',
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
const BackBtn = styled.a({
  fontSize: '2rem',
  marginBottom: '1em',
  cursor: 'pointer',
  ':hover': {
    color: 'orange',
  },
});
const Content = styled.main({
  margin: '0 auto',
  width: '80%',
  marginTop: '2em',
});
const ChartContainer = styled.div(({ theme }) => ({
  background: 'white',
  padding: '1em',
}));

const Tabs = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1em',
  '> *:first-of-type': {
    marginRight: '2em',
  },
});
const Tab = styled(Link)(({ theme }) => ({
  padding: '.5em .8em',
  border: `1px solid ${theme.colors.primary.cyan}`,
  borderRadius: '5px',
}));

const TableContainer = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  rowGap: '3em',
});

const TableItem = styled.li({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  strong: {
    marginBottom: '1em',
    fontSize: '1.2rem',
  },
  span: {},
});
