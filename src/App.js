
import HeroSection from "./components/HeroSection/HeroSection";
import MainCard from "./components/MainCard/MainCard";
import MainHeader from "./components/MainHeader/MainHeader";
import ProdctCard from "./components/ProductPhone/ProductCard";

import {createStore} from 'redux'
import MobileXredcuer from "./components/store-redux/redcuer";
import { Provider } from "react-redux";


const store = createStore(MobileXredcuer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {

  return (


    <div>
      <Provider store={store}>
   <MainHeader />
   <HeroSection />
   <MainCard />
   <ProdctCard />
   </Provider>
   </div>

  )

}

export default App;
