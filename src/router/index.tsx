import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/layouts/Default';

import { HomePage } from '~/pages/Home';
import { CheckoutPage } from '~/pages/Checkout';
import { CompletedPage } from '~/pages/Completed';

export function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={<DefaultLayout />}
      >
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/checkout'
          element={<CheckoutPage />}
        />
        <Route
          path='/completed'
          element={<CompletedPage />}
        />
      </Route>
    </Routes>
  );
}
