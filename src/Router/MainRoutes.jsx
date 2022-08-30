import { Route,Routes } from "react-router-dom";
import HairPage from "../Pages/HairPage";
import HairProduct from "../Pages/HairProduct";
import SkinCarePage from "../Pages/SkinCarePage";
import BestSellers from "../Pages/BestSellers";
import Trending from "../Pages/Trending";
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import {Home} from '../Pages/Home'
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";


const MainRoutes = () =>{
  
   return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/haircare" element={<HairPage/>}/>
        <Route path="/bestsellers" element={<BestSellers/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="skincare" element={<SkinCarePage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        {/* <Route path="/HairPage/:id" element={<HairProduct/>}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />

    </Routes>
}
export default MainRoutes;
