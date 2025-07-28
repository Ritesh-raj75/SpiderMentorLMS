import { Route, Routes } from "react-router-dom";
import { Bottombar } from "../Bottom/Bottombar";
import { CartPage } from "../Cart/Cart";
import { Header } from "../Header/Header";
import { Landigpage } from "../LandingPage/Landin";
import Login from "../Login_Signup/Login";
import Signup from "../Login_Signup/Signup";
import Payment from "../Payment/Payment";
import { Product } from "../Product/Product";
import Wishlist from "../Wishlist/Wishlist";
import About from "../About/About";
import CategoryPage from "../Category/CategoryPages";
import NotesPage from "../Notes/NotesPage";
import LMSChatBoat from "../ChatBoat/LMSChatBot"
import Testimonials from "../Testimonials/Testimonials";
import Courses from "../Courses/FullStack/FullStack";
import Mern from "../Courses/MernStack/MernStack";
import SoftwareTestingPromo from "../Courses/Testing/Testing";
import FullStackPromo from "../Courses/DataScience/DataScience";
// import Footer from "../Footer/Footer"; 
import SearchResults from "../SearchResult";
export const AllRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landigpage />}></Route>
        <Route path="/courses/:id" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/categories" element={<CategoryPage />}></Route>
        <Route path="/chat" element={<LMSChatBoat/>}></Route>
        <Route path="/testimonials" element={<Testimonials/>}></Route>
        <Route path="/courses/fullstack" element={<Courses/>}></Route>
        <Route path="/courses/mern" element={<Mern/>}></Route>
        <Route path="/courses/testing" element={<SoftwareTestingPromo/>}></Route>
        <Route path="/courses/datascience" element={<FullStackPromo/>}></Route>
       
       

        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
         <Route path="/notes" element={<NotesPage />}></Route>
        <Route path="/join/signup-popup" element={<Signup />}></Route>
        <Route path="/join/login-popup" element={<Login />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>
          {/* <Route path="/footer" element={<Footer />}></Route>  */}
      </Routes>
      <Bottombar /> 
    </>
  );
};
