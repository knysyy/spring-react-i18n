import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Index from './pages/index';
import About from './pages/about';

const App = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <nav>
        <Link to="/">{t('page.index.title')}</Link>
        <Link to="/about">{t('page.about.title')}</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
