import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import indexRoutes from 'routes';

const Header = lazy(() => import('components/common/Header'));
const HelpSidebar = lazy(() => import('components/common/HelpSidebar'));
const Footer = lazy(() => import('components/common/Footer'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Header />
      <HelpSidebar />
      <div className="root-wrapper">
        <Switch>
          {indexRoutes.map(prop => (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={prop.path}
            />
          ))} 
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  </Suspense>
);

export default App;
