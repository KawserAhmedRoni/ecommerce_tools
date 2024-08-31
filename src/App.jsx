import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "/public/assets/css/style.css";

import Navbar from "./menu/navbar";
import Home from "./pages";
import Error from "./pages/error";
import Product from "./pages/product";
import ProductDetails from "./pages/productDetails";



function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/product" element={<Product />}></Route>
					<Route
						path="/productDetails"
						element={<ProductDetails />}
					></Route>
					<Route path="*" element={<Error />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
