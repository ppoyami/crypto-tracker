import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Global from './styles/Global';
import Theme from './styles/theme';

import Home from './pages/Home';
import Detail from './pages/Detail';

export default function App() {
  const [mode, setMode] = useState('dark');
  return (
    <Layout>
      <ThemeProvider theme={Theme[mode]}>
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
  maxWidth: '1440px',
  margin: '0 auto',
});
