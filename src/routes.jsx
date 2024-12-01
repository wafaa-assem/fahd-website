// import { Suspense } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Loading from './components/Loading/Loading'
// import { lazy } from "react";
// const Services = lazy(() => import("./pages/Services/Services"));
// const Us = lazy(() => import("./pages/Us/Us"));
// const Contact = lazy(() => import("./pages/Contact/Contact"));
// const Home = lazy(() => import("./pages/Home/Home"));
// const ServicesDetails = lazy(() =>
//   import("./pages/ServiceDetails/ServicesDetails")
// );
// import NotFound from './components/NotFound/NotFound';

// export default function AppRoutes() {
//   return (
//     <Suspense fallback={<Loading />}>
//         <Routes>
//             <Route path='/' element={<Home />}/>
//             <Route path='/services' element={<Services />}/>
//             <Route path='/us' element={<Us />}/>
//             <Route path='/contact' element={<Contact />}/>
//             <Route path='/ServicesDetails/:id' element={<ServicesDetails />}/>
//             <Route path='*' element={<NotFound />}/>
//         </Routes>
//     </Suspense>
//   )
// }
