import MainHeader from './components/MainHeader/MainHeader';

import { createStore } from 'redux';
import MobileXredcuer from './components/store-redux/redcuer';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomeComponents from './HomeComponents';
import ProductPage from './components/ProductPage/ProductPage';
import NoutFoundPage from './components/NoutFoundPage';

const store = createStore(
  MobileXredcuer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div>
      <Provider store={store}>
        <MainHeader />

        <Routes>
          <Route path="/" element={<HomeComponents />} />
          <Route path="/Product/:id" element={<ProductPage />} />
          <Route path="/mobilex" element={<Navigate to="/" />} />

          <Route path="/*" element={<Navigate to="PageNotFound" />} />
          <Route path="/PageNotFound" element={<NoutFoundPage />} />
        </Routes>

        <Footer />
      </Provider>
    </div>
  );
}

export default App;
