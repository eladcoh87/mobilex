
import HeroSection from "./components/HeroSection/HeroSection";
import MainCard from "./components/MainCard/MainCard";
import MainHeader from "./components/MainHeader/MainHeader";

import {createStore} from 'redux'
import MobileXredcuer from "./components/store-redux/redcuer";
import { Provider } from "react-redux";
import ProductContainer from "./components/ProductPhone/ProductContainer";
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import HomeComponents from "./HomeComponents";
import ProductPage from "./components/ProductPage/ProductPage";
const store = createStore(MobileXredcuer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {

  return (


    <div>

    <Provider store={store}>
   <MainHeader />

   <Routes>


   <Route path="/" element={<HomeComponents />  }/>
   <Route path="/Product/:id" element={<ProductPage />  }/>

   {/* <HeroSection />
   <MainCard />
   <ProductContainer /> */}

   </Routes>


   <Footer />
   </Provider>
   </div>

  )

}

export default App;
