import './App.css';
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import {Route, Routes} from "react-router-dom";
import ProductInfoPage from "./pages/productInfoPage/ProductInfoPage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/products' element={<Header />}>
                    <Route index={true} element={<HomePage />} />
                    <Route path=':productId' element={<ProductInfoPage />} />
                </Route>
            </Routes>
        </div>
    );
}


export default App;
