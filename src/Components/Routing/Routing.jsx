import { Route, Routes } from "react-router-dom";
import { lazy,Suspense } from "react";
import MainLayout from "../../Pages/Layout";
import PageLoader from "../PageLoader/PageLoader";

const Home = lazy(()=> import('../../Pages/Home'));
const CoinDetailsPage = lazy(()=>import('../../Pages/CoinDetailsPage'));

function Routing(){
    return(
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={
          <Suspense fallback={<PageLoader/>}>
            <Home/>
          </Suspense>}/>
        <Route path="/details/:coinID" element={
           <Suspense fallback={<PageLoader/>}>
           <CoinDetailsPage/>
         </Suspense>}/>
        </Route>
      </Routes>    
    )
}
export default Routing;