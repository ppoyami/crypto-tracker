import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Global from './styles/Global';
import Theme from './styles/theme';

import Home from './pages/Home';
import Detail from './pages/Detail';

import { ReactComponent as Moon } from './assets/icon-moon.svg';
import { ReactComponent as Sun } from './assets/icon-sun.svg';

type modeType = 'dark' | 'light';

export default function App() {
  const [mode, setMode] = useState<modeType>('dark');
  return (
    <Layout>
      <ThemeProvider theme={Theme[mode]}>
        <ToggleBtn
          state={mode}
          onClick={() => setMode(prev => (prev === 'dark' ? 'light' : 'dark'))}
        >
          <span></span>
          <i>
            <Moon />
          </i>
          <i>
            <Sun />
          </i>
        </ToggleBtn>
        <Global />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:coinId" component={Detail} />
        </Switch>
      </ThemeProvider>
    </Layout>
  );
}

const Layout = styled.div({
  position: 'relative',
  maxWidth: '1440px',
  margin: '0 auto',
});

const ToggleBtn = styled.div<{ state: modeType }>(
  {
    position: 'absolute',
    right: '3%',
    top: '3%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 .3em',
    width: '75px',
    height: '40px',
    borderRadius: '100px',
    cursor: 'pointer',
    zIndex: '100',
    i: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  ({ theme, state }) => ({
    background: theme.colors.text,
    span: {
      position: 'absolute',
      top: '9%',
      transform: `translateX(${state === 'dark' ? '0em' : '2.7em'})`,
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      background: theme.colors.background,
      zIndex: '200',
      cursor: 'pointer',
      transition: 'all 300ms ease',
    },
  })
);
