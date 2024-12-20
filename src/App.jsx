import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFooterData, getIconsMedia } from "./Redux/footerSlice";
import { lazy } from "react";
import Loading from "./components/Loading/Loading";
const Services = lazy(() => import("./pages/Services/Services"));
const Us = lazy(() => import("./pages/Us/Us"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Home = lazy(() => import("./pages/Home/Home"));
const ServicesDetails = lazy(() =>
  import("./pages/ServiceDetails/ServicesDetails")
);

const route = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<Loading />}>
            {" "}
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/us",
        element: (
          <Suspense fallback={<Loading />}>
            <Us />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/ServicesDetails/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ServicesDetails />
          </Suspense>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  // call one time  => at first app render => then useEffect httnafez
  useEffect(() => {
    dispatch(getFooterData()); // general info
    dispatch(getIconsMedia()); // icon media
  }, []);
  return <RouterProvider router={route} />;
};

export default App;
