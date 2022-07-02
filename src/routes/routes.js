/**
 *    © 2022 REACT SECURE ROUTES
 *    Author: Abraham Mitiku
 *
 *
 */

//-------------------------------------------------------------------


/**
 *  Public route
 */
import Home from "../components/views/public/Home";

/**
 *  Private route
 */
import Dashboard from "../components/views/private/Dashboard";

/**
 *  Layouts [Private, Public]
 *  Contains - [Outlet, Navigations ... etc]
 */
 import PrivateLayout from "../components/layouts/PrivateLayout";
 import PublicLayout from "../components/layouts/PublicLayout";

 /**
 *  Authorized Routes [PrivateRoute]
 *  Checks whether personel is authorized or not ... or will redirect to login page ...
 *  You can change authorization methods for pages [views] here from [PrivateRoute]
 */
import PrivateRoute from "./PrivateRoute";

const routes = [
    /**
     *  Public Views
     *  Directories:
     *  Views -> Public -> [Home, Login ....]
     */
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { index: true, element: <Home /> },
      ],
    },
    /**
     *  Private Views
     *  Directories:
     *  Views -> Private -> [Dashboard, Profile, ... etc]
     */
    {
      path: "/dashboard",
      element: <PrivateLayout />,
      children: [
        {
          index: true,
          element: <PrivateRoute><Dashboard /></PrivateRoute>,
        },

      ],
    },
  ];
  export default routes;
  