import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import Global from './styles/Global';
import Theme from './styles/theme';

import Home from './pages/Home';
import Detail from './pages/Detail';

export default function App() {
  const [mode, setMode] = useState('dark');
  return (
    <div>
      <ThemeProvider theme={Theme[mode]}>
        <Global />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:coinId" component={Detail} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}
