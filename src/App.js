import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import MyState from "./context/data/myState";
import Order from "./pages/order/Order";
import NoPage from "./pages/nopage/NoPage";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import Allproducts from "./pages/allproducts/Allproducts";

function App() {
  return (
    <MyState>
        <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={
          
          <Order />
        
        } />
        <Route path="/allproducts" element={<Allproducts/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={
          <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
        } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/productinfo/:id' element={<ProductInfo/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/addProduct" element={
          <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
       
        <Route path="/upDateProduct" element={
          <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
        
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
  
  )
}

export default App
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'knupadhyay784@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}