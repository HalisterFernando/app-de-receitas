import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Provider from './context/Provider';

export default function renderWithRouter(component, { route = '/' } = {}) {
  window.history.pushState({}, 'App', route);
  return render(
    <BrowserRouter>
      <Provider>
        {component}
      </Provider>
    </BrowserRouter>,
  );
}
